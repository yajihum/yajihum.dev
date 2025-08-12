import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    pubDate: {
      type: 'string',
      description: 'The publish date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the post',
      required: true,
    },
    icon: {
      type: 'string',
      description: 'Icon for the post',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => {
        const pathParts = post._raw.flattenedPath.split('/');
        return pathParts[pathParts.length - 1];
      },
    },
    tag: {
      type: 'string',
      resolve: (post) => {
        const pathParts = post._raw.flattenedPath.split('/');
        return pathParts[0]; // tech/xxx or life/xxx
      },
    },
    url: {
      type: 'string',
      resolve: (post) => {
        const pathParts = post._raw.flattenedPath.split('/');
        const tag = pathParts[0];
        const slug = pathParts[pathParts.length - 1];
        return `/blog/posts/${tag}/${slug}`;
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Post],
  disableImportAliasWarning: true,
})