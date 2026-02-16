# Digambar Media – Strategic Branding & Visual Storytelling Agency

This is the official codebase for the Digambar Media website. A premium, strategy-led web presence built for Nepal's leading creative agency.

## Technologies Used

- **Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## Project Structure

- `src/components`: Reusable UI components and page sections.
- `src/pages`: Individual page components (Home, About, Services, Approach, Brand & Beyond, Contact).
- `src/data`: Centralized data for services, blogs, stats, and approach steps.
- `public`: Static assets including logos, CNAME, and images.

## Development

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start development server:
   ```sh
   npm run dev
   ```

## Deployment

The site is configured for deployment to GitHub Pages at [digambarmedia.com](https://digambarmedia.com).

To deploy:
```sh
npm run deploy
```

This will:
1. Build the project into the `dist` folder (`npm run build`).
2. Push the contents of `dist` to the `gh-pages` branch.

## Configuration

- **Domain**: Configured via `public/CNAME`.
- **Base Path**: Set to `/` in `vite.config.ts`.
- **404 Handling**: Uses `HashRouter` to ensure compatibility with GitHub Pages custom domains.

---
© 2026 Digambar Media Pvt. Ltd.
