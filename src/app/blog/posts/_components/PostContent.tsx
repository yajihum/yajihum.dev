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
      className="prose prose-a:text-neutral-200 prose-a:border-b prose-a:border-neutral-600 prose-neutral prose-pre:p-0 prose-pre:bg-neutral-900 prose-headings:text-white prose-blockquote:text-neutral-300 prose-strong:text-white prose-em:text-sm prose-em:text-neutral-200 prose-code:mx-1 prose-code:rounded prose-code:px-1.5 prose-code:py-1 prose-code:font-normal prose-code:before:hidden prose-code:after:hidden prose-img:my-4 prose-a:mx-1 prose-img:rounded prose-code:bg-zinc-800 prose-a:no-underline prose-code:text-neutral-200 md:prose-img:w-3/4 prose-a:break-all m-auto mt-5 max-w-4xl text-neutral-200"
    >
      {content}
    </Markdown>
  );
}
