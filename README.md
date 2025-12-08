# Empire Ecommerce Landing Page

A modern, responsive landing page for an ecommerce conglomerate built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern gradient design with dark theme
- Fully responsive across all devices
- Interactive brand portfolio showcase
- Smooth animations and transitions
- SEO-friendly structure
- Optimized for Vercel deployment

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
ecommerce/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
└── vercel.json          # Vercel configuration
```

## Customization

Edit [app/page.tsx](app/page.tsx) to customize:
- Brand names and categories
- Company statistics
- Color schemes
- Content and messaging

## Deploy on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## License

MIT
