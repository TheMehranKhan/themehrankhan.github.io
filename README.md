# TheMehranKhan's Blog: A Next.js, Markdown, and TypeScript Static Blog

This project is a statically generated blog using Next.js, Markdown, and TypeScript. It's based on the [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) example from Next.js, with added TypeScript support.

## Features

- Static Generation with Next.js
- Markdown for content creation
- TypeScript for enhanced development experience
- Tailwind CSS for styling

## How It Works

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in this directory will automatically create a new blog post.

We use:
- [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert Markdown into HTML
- [`gray-matter`](https://github.com/jonschlinkert/gray-matter) to parse the metadata in each post

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev