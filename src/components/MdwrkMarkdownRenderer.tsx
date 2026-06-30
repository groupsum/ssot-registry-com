import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * useMdwrkJsonLd Hook
 * Dynamically inserts/updates the JSON-LD structured data in the document head.
 * This directly implements mdwrk's structured data emission for SEO/AEO search-engine crawls.
 */
export function useMdwrkJsonLd(data: Record<string, any> | null | undefined) {
  useEffect(() => {
    if (!data) return;

    // Find or create the script tag
    let script = document.getElementById('mdwrk-jsonld-script') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'mdwrk-jsonld-script';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    // Set JSON-LD content
    script.textContent = JSON.stringify(data, null, 2);
  }, [data]);
}

interface MdwrkMarkdownRendererProps {
  content: string;
}

/**
 * MdwrkMarkdownRenderer Component
 * Integrates react-markdown with syntax highlighting for code blocks.
 */
export default function MdwrkMarkdownRenderer({ content }: MdwrkMarkdownRendererProps) {
  return (
    <div className="mdwrk-markdown-wrapper text-sm text-zinc-700 leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-zinc-900 mt-6 mb-4 first:mt-0" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-zinc-900 mt-5 mb-3 first:mt-0" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-lg font-bold text-zinc-900 mt-4 mb-2 first:mt-0" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 text-zinc-700 first:mt-0" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...props} />,
          li: ({node, ...props}) => <li className="text-zinc-700" {...props} />,
          a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-zinc-300 pl-4 italic my-4 text-zinc-600" {...props} />,
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                className="rounded-md overflow-hidden text-xs my-4"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
