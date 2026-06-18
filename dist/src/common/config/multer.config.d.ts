export declare const multerConfig: {
    storage: any;
    fileFilter: (_req: any, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => void;
    limits: {
        fileSize: number;
    };
};
export declare const getUploadUrl: (filename: string) => string;
export declare const getFileUrl: (file: Express.Multer.File) => string;
