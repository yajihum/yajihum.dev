'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 z-10 cursor-pointer rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-400 opacity-0 transition-opacity hover:text-neutral-200 group-hover:opacity-100"
      aria-label="コードをコピー"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
