import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

const listDirectoryFiles = () =>
  fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dirent.name}`]
        : listFilesRecursively(`${dirent.name}`),
    );

const listFilesRecursively = (dir: string): string[] =>
  fs
    .readdirSync(path.join(postsDirectory, dir), { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFilesRecursively(`${dir}/${dirent.name}`),
    );

export type Items = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.split(',').join('/').replace(/\.md$/, '');
  const fileName = `${realSlug}.md`;
  const fullPath = path.join(postsDirectory, fileName, '');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPosts(fields: string[] = [], limit?: number) {
  const slugs = listDirectoryFiles();
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.pubDate > post2.pubDate ? -1 : 1))
    .slice(0, limit);
  return posts;
}
