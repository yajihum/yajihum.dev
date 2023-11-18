import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type Tag = 'life' | 'tech';

const postsDirectory = path.join(process.cwd(), 'src/posts');

const listDirectoryFiles = (tag: Tag) =>
  fs
    .readdirSync(`${postsDirectory}/${tag}`, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dirent.name}`]
        : listFilesRecursively(`${dirent.name}`, tag),
    );

const listFilesRecursively = (dir: string, tag: Tag): string[] =>
  fs
    .readdirSync(path.join(`${postsDirectory}/${tag}`, dir), {
      withFileTypes: true,
    })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFilesRecursively(`${dir}/${dirent.name}`, tag),
    );

export type Items = {
  [key: string]: string;
};

export function getPostBySlug(tag: Tag, slug: string, fields: string[] = []) {
  const realSlug = slug.split(',').join('/').replace(/\.md$/, '');
  const fileName = `${realSlug}.md`;
  const fullPath = path.join(`${postsDirectory}/${tag}`, fileName, '');
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

export function getPostsByTag(tag: Tag, fields: string[] = [], limit?: number) {
  const slugs = listDirectoryFiles(tag);
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => getPostBySlug(tag, slug, fields))
    .sort((post1, post2) => (post1.pubDate > post2.pubDate ? -1 : 1));
  return posts;
}

export function getAllPosts(fields: string[] = [], limit?: number) {
  const tags: Tag[] = ['life', 'tech'];
  const posts = tags
    .flatMap((tag) => {
      const slugs = listDirectoryFiles(tag);
      return slugs
        .filter((slug) => slug.match(/\.md$/))
        .map((slug) => getPostBySlug(tag, slug, fields))
        .sort((post1, post2) => (post1.pubDate > post2.pubDate ? -1 : 1));
    })
    .slice(0, limit);
  return posts;
}
