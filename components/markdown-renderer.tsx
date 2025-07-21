"use client"

import { useMemo } from "react"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export const MarkdownRenderer = ({ content, className = "" }: MarkdownRendererProps) => {
  const renderedContent = useMemo(() => {
    // Simple markdown parser - in a real app, you'd use a library like react-markdown
    const html = content
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mb-4 text-white">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-6 text-white">$1</h2>')
      .replace(
        /^# (.*$)/gim,
        '<h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$1</h1>',
      )

      // Code blocks
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto"><code class="text-green-400">$2</code></pre>',
      )

      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-purple-300 px-2 py-1 rounded text-sm">$1</code>')

      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')

      // Italic
      .replace(/\*(.*?)\*/g, '<em class="italic text-white/90">$1</em>')

      // Links
      .replace(
        /\[([^\]]+)\]$$([^)]+)$$/g,
        '<a href="$2" class="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noopener noreferrer">$1</a>',
      )

      // Paragraphs
      .replace(/^(?!<[h1-6]|<pre|<ul|<ol)(.+)$/gim, '<p class="text-white/80 mb-4 leading-relaxed">$1</p>')

      // Lists
      .replace(/^- (.+)$/gim, '<li class="text-white/80 mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')

    return html
  }, [content])

  return (
    <div
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  )
}
