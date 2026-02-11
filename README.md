# My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark/light mode based on user preference
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Optimized with Next.js and Tailwind CSS
- **TypeScript**: Type-safe development experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans and Geist Mono
- **Linting**: ESLint

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Customization

### Personal Information
Edit the following in `app/page.tsx`:
- Replace `[Your Name]` with your actual name
- Update the bio text in the About section
- Add your location and email
- Replace placeholder project descriptions with your actual projects

### Styling
- Modify Tailwind classes in the components for custom styling
- Update colors in the `globals.css` file if needed

### Adding Projects
- Duplicate the project card structure in the Projects section
- Add real project images to the `public/` directory
- Update project descriptions and tech stacks

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
This is a standard Next.js app that can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Node.js

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   ```bash
   npm run dev -- -p 3001
   ```

2. **Build errors**:
   - Ensure all dependencies are installed: `npm install`
   - Check for TypeScript errors: `npm run build`

3. **Styling issues**:
   - Clear Next.js cache: `rm -rf .next`
   - Restart dev server

## Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## License

This project is open source and available under the [MIT License](LICENSE).
