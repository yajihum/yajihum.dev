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
      className="prose prose-neutral m-auto mt-5 max-w-4xl prose-headings:text-white prose-a:whitespace-normal prose-a:break-all prose-a:text-blue-500 prose-blockquote:text-neutral-300 prose-strong:text-white prose-code:text-red-400"
    >
      {content}
    </Markdown>
  );
}
