# MSME Financing & Fintech Blog

A modern, responsive blog platform focused on MSME financing and fintech innovations. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive grid layout for blog articles
- Category filtering
- Search functionality
- SEO-friendly meta tags
- Cross-platform compatibility
- Modern UI with smooth animations
- Mobile-first design

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog_page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Sign up for a Netlify account if you haven't already

3. Click "New site from Git" in your Netlify dashboard

4. Select your repository and configure the build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `.next`

5. Click "Deploy site"

## Project Structure

```
blog_page/
├── app/
│   ├── blog/
│   │   └── [id]/
│   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── public/
│   ├── package.json
│   └── README.md
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- PostCSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
