# 📁 Struktur Folder React Router Portfolio App

## Organized Architecture

```
my-react-router-app/
├── app/
│   ├── src/
│   │   ├── components/          # Komponen Atomik (Reusable)
│   │   │   ├── Navbar.tsx       # Navigation component with routing
│   │   │   └── ProjectCard.tsx  # Reusable project card
│   │   │
│   │   └── pages/               # Halaman Utuh (Pages/Views)
│   │       ├── Home.tsx         # Hero & About section
│   │       ├── Projects.tsx     # Projects gallery grid
│   │       └── Contact.tsx      # Contact information
│   │
│   ├── routes/                  # Legacy route files
│   ├── root.tsx                 # Root layout (Header + Footer wrapper)
│   ├── routes.ts                # React Router configuration
│   ├── app.css                  # Tailwind CSS styles
│   └── +types/                  # Type definitions
│
├── public/                      # Static assets
├── Dockerfile                   # Container configuration
├── package.json                 # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
└── README.md
```

## 🎯 Component Breakdown

### Components (`src/components/`)
- **Navbar.tsx** - Sticky navigation with React Router links
- **ProjectCard.tsx** - Reusable card component for projects

### Pages (`src/pages/`)
- **Home.tsx** - Landing page with hero & about section
- **Projects.tsx** - Gallery of projects using ProjectCard component
- **Contact.tsx** - Contact information with email, WhatsApp, location

## 🔄 Routing Configuration

The `routes.ts` file defines all routes:
```typescript
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("src/pages/Home.tsx"),              // / (home)
  route("projects", "src/pages/Projects.tsx"), // /projects
  route("contact", "src/pages/Contact.tsx"),   // /contact
] satisfies RouteConfig;
```

## 🏗️ Architecture Benefits

✅ **Separation of Concerns** - Components separate from pages
✅ **Reusability** - Components like ProjectCard can be used multiple times
✅ **Maintainability** - Easy to find and modify specific features
✅ **Scalability** - Simple to add new pages or components
✅ **Clean Code** - Following React best practices

## 🚀 Running the App

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run typecheck # TypeScript type checking
```

## 📝 Adding New Features

### To add a new page:
1. Create file in `src/pages/NewPage.tsx`
2. Add route in `routes.ts`:
   ```typescript
   route("new-path", "src/pages/NewPage.tsx")
   ```
3. Add navigation link in `Navbar.tsx`

### To add a reusable component:
1. Create file in `src/components/NewComponent.tsx`
2. Export as default function
3. Import and use in pages

## 🎨 Styling

- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach with `md:` and `lg:` breakpoints
- **Theme Colors** - Blue (#3b82f6) as primary color

## 📱 Features Implemented

- ✨ Responsive Navbar with smooth transitions
- 🎨 Hero section with profile image
- 📸 Projects gallery with image cards
- 📞 Contact information (Email, WhatsApp, Location)
- 🎯 Full routing between pages
- ♿ Semantic HTML with ARIA labels
- 🌐 SEO-optimized meta tags
