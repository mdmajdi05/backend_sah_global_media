"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileUrl = exports.getUploadUrl = exports.multerConfig = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const cloudinary_config_1 = require("./cloudinary.config");
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.webm', '.mov'];
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE || '10485760', 10);
const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';
let cloudinaryStorage = null;
if ((0, cloudinary_config_1.isCloudinaryEnabled)()) {
    try {
        const cloudinary = require('cloudinary').v2;
        const { CloudinaryStorage } = require('multer-storage-cloudinary');
        cloudinary.config((0, cloudinary_config_1.getCloudinaryConfig)());
        cloudinaryStorage = new CloudinaryStorage({
            cloudinary,
            params: async (_req, file) => ({
                folder: 'sah-global-media',
                resource_type: file.mimetype?.startsWith('video/') ? 'video' : 'image',
                allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'mp4', 'webm', 'mov'],
            }),
        });
        console.log('[Upload] Using Cloudinary storage');
    }
    catch {
        console.warn('[Upload] Cloudinary packages not installed — run: npm install cloudinary multer-storage-cloudinary');
        console.warn('[Upload] Falling back to local disk storage');
    }
}
if (!cloudinaryStorage) {
    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }
}
const localDiskStorage = (0, multer_1.diskStorage)({
    destination: UPLOAD_DIR,
    filename: (_req, file, cb) => {
        const timestamp = Date.now();
        const random = Math.round(Math.random() * 1e9);
        const ext = (0, path_1.extname)(file.originalname).toLowerCase();
        cb(null, `${timestamp}-${random}${ext}`);
    },
});
exports.multerConfig = {
    storage: cloudinaryStorage || localDiskStorage,
    fileFilter: (_req, file, cb) => {
        if (cloudinaryStorage) {
            cb(null, true);
            return;
        }
        const ext = (0, path_1.extname)(file.originalname).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(ext)) {
            return cb(new common_1.BadRequestException(`File type '${ext}' not allowed. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}`), false);
        }
        cb(null, true);
    },
    limits: { fileSize: MAX_FILE_SIZE },
};
const getUploadUrl = (filename) => {
    if (filename?.startsWith('http'))
        return filename;
    return `/uploads/${filename}`;
};
exports.getUploadUrl = getUploadUrl;
const getFileUrl = (file) => {
    if (file?.path?.startsWith('http'))
        return file.path;
    return `/uploads/${file.filename}`;
};
exports.getFileUrl = getFileUrl;
//# sourceMappingURL=multer.config.js.map