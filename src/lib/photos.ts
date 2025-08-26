import fs from 'fs';
import path from 'path';
import { PHOTO_LIST } from './photo-list';

export function getAllPhotos(): string[] {
  // 開発環境では動的にファイルを読み取り
  if (process.env.NODE_ENV === 'development') {
    const photosDir = path.join(process.cwd(), 'public/photos');
    const files = fs.readdirSync(photosDir);
    const imageFiles = files.filter((file: string) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file),
    );
    return imageFiles;
  }

  // 本番環境: 事前生成されたTypeScriptファイルを使用
  // 動的importを使用して生成されたファイルを読み込み
  return PHOTO_LIST.photos;
}
