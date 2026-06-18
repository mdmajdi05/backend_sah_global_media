import { diskStorage } from 'multer';
import { extname } from 'path';
import { BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import { isCloudinaryEnabled, getCloudinaryConfig } from './cloudinary.config';

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.webm', '.mov'];
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE || '10485760', 10);
const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';

let cloudinaryStorage: any = null;

if (isCloudinaryEnabled()) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cloudinary = require('cloudinary').v2;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { CloudinaryStorage } = require('multer-storage-cloudinary');
    cloudinary.config(getCloudinaryConfig());
    cloudinaryStorage = new CloudinaryStorage({
      cloudinary,
      params: async (_req: any, file: Express.Multer.File) => ({
        folder: 'sah-global-media',
        resource_type: file.mimetype?.startsWith('video/') ? 'video' : 'image',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'mp4', 'webm', 'mov'],
      }),
    });
    console.log('[Upload] Using Cloudinary storage');
  } catch {
    console.warn('[Upload] Cloudinary packages not installed — run: npm install cloudinary multer-storage-cloudinary');
    console.warn('[Upload] Falling back to local disk storage');
  }
}

if (!cloudinaryStorage) {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
}

const localDiskStorage = diskStorage({
  destination: UPLOAD_DIR,
  filename: (_req, file, cb) => {
    const timestamp = Date.now();
    const random = Math.round(Math.random() * 1e9);
    const ext = extname(file.originalname).toLowerCase();
    cb(null, `${timestamp}-${random}${ext}`);
  },
});

export const multerConfig = {
  storage: cloudinaryStorage || localDiskStorage,
  fileFilter: (_req: any, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
    if (cloudinaryStorage) {
      // Cloudinary validates on its end
      cb(null, true);
      return;
    }
    const ext = extname(file.originalname).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return cb(new BadRequestException(`File type '${ext}' not allowed. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}`), false);
    }
    cb(null, true);
  },
  limits: { fileSize: MAX_FILE_SIZE },
};

export const getUploadUrl = (filename: string): string => {
  if (filename?.startsWith('http')) return filename;
  return `/uploads/${filename}`;
};

// Use this in controllers — handles both Cloudinary (file.path = secure URL)
// and local disk storage (file.filename = basename).
export const getFileUrl = (file: Express.Multer.File): string => {
  if (file?.path?.startsWith('http')) return file.path;
  return `/uploads/${file.filename}`;
};
