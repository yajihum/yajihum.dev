import fs from 'fs';
import path from 'path';

// ビルド時に取得なのでfs,pathを使用して問題ない
const photosDir = path.join(process.cwd(), 'public/photos');

export function getAllPhotos() {
  const files = fs.readdirSync(photosDir);
  const imageFiles = files.filter((file: string) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file),
  );
  return imageFiles;
}
