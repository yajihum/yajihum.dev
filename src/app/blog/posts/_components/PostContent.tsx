import { ReactMarkdownComponents } from '@/lib/post-content';
import 'highlight.js/styles/github-dark-dimmed.css';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'zenn-content-css';

export default function PostContent({ content }: { content: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={ReactMarkdownComponents}
      className="prose-li:not-prose prose prose-neutral m-auto mt-5 max-w-4xl prose-headings:text-white prose-blockquote:text-neutral-300 prose-strong:text-white prose-em:text-sm prose-em:text-neutral-200 prose-code:text-emerald-400 prose-img:my-4 prose-img:rounded prose-img:md:w-3/4"
    >
      {content}
    </Markdown>
  );
}
