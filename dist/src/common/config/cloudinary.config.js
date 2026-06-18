"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudinaryEnabled = void 0;
exports.getCloudinaryConfig = getCloudinaryConfig;
function getCloudinaryConfig() {
    return {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
        api_key: process.env.CLOUDINARY_API_KEY || '',
        api_secret: process.env.CLOUDINARY_API_SECRET || '',
    };
}
const isCloudinaryEnabled = () => process.env.USE_CLOUDINARY === 'true' &&
    !!process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_CLOUD_NAME !== 'your_cloud_name';
exports.isCloudinaryEnabled = isCloudinaryEnabled;
//# sourceMappingURL=cloudinary.config.js.map