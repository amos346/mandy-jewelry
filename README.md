# Mandy's Jewelry | Port Harcourt Luxury Store

Mandy's Jewelry is a minimalist, luxury e-commerce landing page and catalog for a premier jewelry business based in Port Harcourt, Nigeria (GRA Phase 2). The application showcases exquisite 18k Italian gold sets, diamond rings, bridal collections, traditional coral bead pieces, and luxury watches, with Nigerian Naira (₦) pricing and direct WhatsApp ordering (`0806 904 9707`).

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel (SPA-ready with client-side routing rewrites)

---

## Project Structure

```text
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── README.md
├── public/
│   └── assets/
│       └── aistudio/  (Contains all 10 real product & watch photos)
└── src/
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

---

## Local Development Instructions

1. **Clone the repository** (or extract the downloaded ZIP).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## Production Build Instructions

To generate the production build in the `dist` folder:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## GitHub & Vercel Deployment Instructions

1. **Upload to GitHub**:
   - Create a new repository on GitHub.
   - Commit and push all files (including `package.json`, `vercel.json`, `public/`, and `src/`) to your GitHub repository.
2. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com) and click **Add New > Project**.
   - Import your GitHub repository.
   - Vercel will automatically detect the **Vite** preset:
     - **Framework Preset**: Vite
     - **Root Directory**: `./`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **Deploy**.

---

## License
© 2026 Mandy's Jewelry. All rights reserved.
