import productStoreImg from './../assets/projects/productStore.png';
import afriverseImg from './../assets/projects/Afriverse.png';
import habitTrackerImg from './../assets/projects/habitTracker.png';
import bookTrackerImg from './../assets/projects/booktracker.png';

export interface KeyFeature {
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  status: 'production' | 'open-source' | 'in-development';
  year: string;
  role: string;
  techStack: string[];
  projectLink: string;
  gitHubLink: string;
  metrics: Metric[];
  overview: string;
  problem: string;
  architecture: string;
  keyFeatures: KeyFeature[];
  challenges: string;
  technicalHighlights: string[];
  futureImprovements: string[];
}

export const projects: Project[] = [
  {
    slug: 'afriverse',
    image: afriverseImg,
    title: 'Afriverse',
    tagline: 'A digital archive for African literature — built for discovery, contribution, and community.',
    description:
      'A full-stack digital archive of African literature built with React, TypeScript, and Supabase. Features community contributions, author discovery filtered by region/genre/language, Wikipedia-enriched bios, OpenLibrary book covers, admin moderation, reading lists, and bookmarks — all backed by a live PostgreSQL database with row-level security.',
    status: 'production',
    year: '2024',
    role: 'Full-Stack Developer',
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'React Router'],
    projectLink: 'https://afriverse-dfbg.vercel.app/',
    gitHubLink: 'https://github.com/PhiweM/afriverse',
    metrics: [
      { label: 'Tech Layers', value: '7 technologies' },
      { label: 'Database', value: 'PostgreSQL + RLS' },
      { label: 'Auth', value: 'Supabase Auth' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    overview:
      'AfriVerse is a full-stack digital archive that aggregates African literary data from across the web — pulling author bios from Wikipedia, book covers from OpenLibrary and Google Books, and interviews from YouTube — into one structured, searchable platform. Readers can discover authors by region, genre, language, and era. Researchers get enriched profiles with cited sources. Contributors can submit missing authors, books, essays, and quotes through a moderation queue — making the archive community-maintained and always growing.',
    problem:
      'African literature has no central home on the internet. Author bios live on Wikipedia, book covers on OpenLibrary, interviews scattered across YouTube, essays across dozens of publications — none of it connected. Mainstream platforms like Goodreads apply algorithmic curation that systematically buries authors writing in indigenous languages, from underrepresented regions, or within niche genres. AfriVerse was built to aggregate all of it into one purpose-built archive, enriched with real data and open to community contribution.',
    architecture:
      'The frontend is a Vite + React 18 SPA with React Router v7 for client-side navigation and lazy-loaded routes. A custom useQuery hook provides an in-memory pub/sub data cache with key-based invalidation — avoiding redundant Supabase calls across page navigations. Supabase serves as the entire backend: PostgreSQL with row-level security for access control, Supabase Auth for session management, and the PostgREST API for all database queries. A service layer maps snake_case DB rows to camelCase app types, keeping the data model clean across the stack. Four external APIs — Wikipedia, OpenLibrary, Google Books, and YouTube — are integrated client-side for live data enrichment. Transactional email (signup confirmation, password reset) is handled via Resend SMTP with branded HTML templates configured in Supabase Auth. The app is deployed on Vercel with automatic CI/CD from GitHub.',
    keyFeatures: [
      {
        title: 'Multi-Source Data Aggregation',
        description:
          'Author profiles are enriched in real time from the Wikipedia REST API — pulling bios, photos, and image credits. Book covers use a 4-tier cascade: static DB value → OpenLibrary ISBN lookup (with 1×1 GIF detection) → Google Books fallback → deterministic CSS-generated cover. Interview thumbnails are pulled directly from YouTube. No manual asset management required.',
      },
      {
        title: 'Community Contribution & Moderation System',
        description:
          'Any registered user can submit new authors, books, essays, interviews, quotes, or corrections through a multi-entry batch form. All submissions enter a moderation queue. Admins review, approve, or reject from a dedicated interface — with quote approvals automatically inserting enriched records into the quotes table, including Wikipedia-sourced author images.',
      },
      {
        title: 'Author Profile Claiming & Verification',
        description:
          'Authors can search for their own profile and submit a claim through a structured verification flow. Once approved by an admin, the profile is marked verified with a visible badge — giving real authors ownership of their presence on the platform.',
      },
      {
        title: 'Multi-Dimensional Author Discovery',
        description:
          'Authors are filterable across six dimensions simultaneously: geographic region, country, literary genre, language, decade, and curated preset tabs (Nobel Laureates, Emerging Voices, Verified Authors). All filter state is reflected in URL params, making filtered views shareable and bookmarkable.',
      },
      {
        title: 'Literary Awards Tracking',
        description:
          'The platform indexes major African literary prizes with full winner records, shortlists, and notable historical winners — giving researchers a structured view of the literary canon and prize history that does not exist anywhere else in one place.',
      },
      {
        title: 'Row-Level Security & Role System',
        description:
          'All data access is enforced at the PostgreSQL layer via Supabase RLS policies — not just the UI. Three roles (reader, contributor, admin) govern what each user can read, write, and moderate. A SECURITY DEFINER function prevents RLS recursion on the profiles table itself.',
      },
      {
        title: 'SEO & Structured Data',
        description:
          'Every public page includes dynamic meta tags managed via useEffect DOM manipulation. Author profile pages emit JSON-LD Person and Book schemas for Google rich results — making the archive genuinely indexable and useful to search engines, not just human visitors.',
      },
      {
        title: 'Branded Transactional Email',
        description:
          'Signup confirmation and password reset emails are sent via Resend SMTP with fully branded HTML templates — inline-styled, gold CTA buttons, AfriVerse wordmark — replacing Supabase\'s generic defaults with a production-quality email experience.',
      },
    ],
    challenges:
      'The trickiest part was designing the PostgreSQL schema for many-to-many relationships between authors, books, genres, regions, and languages — while ensuring that all RLS policies were additive rather than conflicting. Another challenge was Wikipedia\'s API returning inconsistent data structures depending on the author; the enrichment layer required defensive parsing and graceful fallbacks. Supabase Auth session hydration on page refresh also required careful handling with React Router to avoid flashing unauthenticated states.',
    technicalHighlights: [
      'Row-level security policies enforcing access control at the database layer',
      'Wikipedia REST API integration with defensive parsing and fallback UI',
      'OpenLibrary cover image resolution via ISBN lookup',
      'Optimistic UI updates for reading list toggles',
      'React Router nested routing for author/book detail pages',
      'Lazy-loaded images with native browser loading attributes',
      'Mobile-first responsive layout throughout',
    ],
    futureImprovements: [
      'Full-text search across author bios and book descriptions using PostgreSQL tsvector',
      'Server-side cursor pagination replacing client-side visibleCount for scale',
      'Public reading list sharing with unique shareable URLs',
      'Contributor leaderboard recognizing top community submitters',
      'Structured public API for consumption by researchers and educators',
      'Auto-badge awarding logic — tables and schema already in place',
      'Email digest for new additions in followed genres or regions',
      'Server-side rendering or static generation for core pages to improve SEO and cold load performance',
    ],
  },
  
  {
    slug: 'book-tracker',
    image: bookTrackerImg,
    title: 'BookTracker',
    tagline: 'A personal reading library with auth, rich metadata, and visual reading insights.',
    description:
      'A full-stack book tracking app built with Next.js 15, Prisma, and SQLite. Features credential-based auth, a sortable/filterable book table, per-book metadata (genre, rating, pages, format, tags), and a collapsible analytics panel with books-per-year, top genres, and most-read authors charts.',
    status: 'in-development',
    year: '2025',
    role: 'Full-Stack Developer',
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Prisma', 'SQLite', 'Tailwind CSS', 'Zustand', 'TanStack Table'],
    projectLink: 'https://book-author-tracker.vercel.app/',
    gitHubLink: 'https://github.com/PhiweM/book-author-tracker',
    metrics: [
      { label: 'Stack', value: 'Next.js full-stack' },
      { label: 'Database', value: 'SQLite via Prisma' },
      { label: 'Auth', value: 'Credential-based' },
      { label: 'UI', value: 'TanStack Table' },
    ],
    overview:
      'BookTracker is a personal reading library app that lets users catalogue every book they have read, are reading, want to read, or have on their wishlist. Each book stores rich metadata — genre, rating, pages, publish year, ISBN, read format, notes, and tags. A stats bar shows live counts by status, unique authors, total pages read, and average rating. A collapsible Reading Insights panel renders bar charts for books read per year, top genres, and most-read authors — giving a long-range view of reading habits at a glance.',
    problem:
      'Goodreads and similar apps are cluttered with social features, ads, and algorithmic recommendations that bury the simple act of tracking what you have read. The goal was a clean, fast, personal library — no social layer, no noise — with just enough analytics to stay motivated and reflect on reading patterns over time.',
    architecture:
      'The frontend and backend are colocated in a Next.js 15 App Router project. API routes under /api/books and /api/auth handle all data mutations server-side, authenticated via an HTTP-only session cookie set on login. Prisma with the better-sqlite3 adapter manages the local SQLite database, keeping the stack dependency-free and instantly portable. Client state is minimal — books are fetched once on mount and updated optimistically on add, edit, and delete. The book table is powered by TanStack Table for column sorting and filtering. Global UI state (dialogs, toasts) is handled with Zustand and Radix UI primitives.',
    keyFeatures: [
      {
        title: 'Rich Book Metadata',
        description:
          'Each book record supports title, author, ISBN, cover URL, publish year, page count, genre, publisher, language, read status, year read, star rating, notes, tags, category, read format (physical/ebook/audio), and reread count — covering the full lifecycle of a book in a personal library.',
      },
      {
        title: 'Sortable & Filterable Book Table',
        description:
          'The library view is a TanStack Table with column-level sorting and filtering. Users can sort by title, author, rating, or year read, and filter to any subset of their library in real time.',
      },
      {
        title: 'Reading Stats Bar',
        description:
          'A persistent stats bar above the table shows live counts for Read, Reading, Want to Read, Wishlist, total unique Authors, total Pages Read (across finished books), and average star rating — updated instantly on any change.',
      },
      {
        title: 'Reading Insights Panel',
        description:
          'A collapsible analytics section renders three inline bar charts: books read per year (up to 8 years of history), top genres by book count, and most-read authors — with a year-over-year trend percentage for the current year.',
      },
      {
        title: 'Credential Auth with HTTP-Only Cookies',
        description:
          'Register and login flows hash passwords server-side and issue an HTTP-only session cookie. A Next.js middleware layer protects all app routes, redirecting unauthenticated requests to /login.',
      },
      {
        title: 'Inline Add & Edit Dialogs',
        description:
          'Books are added via an AddMenu that opens a full metadata form in a Radix UI Dialog. Any book can be edited in place through an EditBookDialog — changes are PATCHed to the API and reflected immediately in the table without a page reload.',
      },
    ],
    challenges:
      'The main challenge was keeping Prisma working with the better-sqlite3 driver adapter in a Next.js App Router environment, where the Prisma client must be instantiated as a singleton to avoid exhausting SQLite connections across hot-reloads in development. Auth also required careful middleware ordering to ensure the session cookie check runs before any RSC data fetching, preventing unauthenticated flashes.',
    technicalHighlights: [
      'Next.js 15 App Router with colocated API routes for books and auth',
      'Prisma ORM with better-sqlite3 driver adapter — no external database required',
      'HTTP-only session cookie auth with middleware-level route protection',
      'TanStack Table for client-side column sorting and filtering',
      'Zustand for global dialog and toast state',
      'Radix UI Dialog, DropdownMenu, Select, and Popover for accessible UI primitives',
      'Inline bar charts rendered with pure CSS flex/width calculations — no chart library',
    ],
    futureImprovements: [
      'Open Library / Google Books API integration to auto-fill metadata from ISBN',
      'Cover image display in the table and on a book detail page',
      'Reading goal — set a yearly book target and track progress',
      'CSV import/export for migrating data from Goodreads',
      'Deploy to Vercel with a persistent database (Turso or Neon)',
    ],
  },

  {
    slug: 'daily-habit-tracker',
    image: habitTrackerImg,
    title: 'Daily Habit Tracker',
    tagline: 'A cross-device habit tracker with real-time sync — inspired by the simplicity of a paper monthly grid.',
    description:
      'A personal habit tracking app built with React, Vite, and Firebase. Features a paper-grid–inspired monthly view, real-time cross-device sync via Firestore, Google sign-in, drag-and-drop habit reordering, daily journal entries, analytics with streak tracking, and a daily Christian quote widget.',
    status: 'production',
    year: '2025',
    role: 'Front-End Developer',
    techStack: ['React', 'Vite', 'Firebase', 'Firestore', 'Tailwind CSS', 'Google Auth'],
    projectLink: 'https://daily-habit-tracker-flame.vercel.app/',
    gitHubLink: 'https://github.com/PhiweM/DailyHabitTracker',
    metrics: [
      { label: 'Views', value: 'Day / Week / Month' },
      { label: 'Sync', value: 'Real-time Firestore' },
      { label: 'Auth', value: 'Google Sign-In' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    overview:
      'Daily Habit Tracker is a personal productivity app modeled on the feel of a paper monthly grid — clean, minimal, and focused. Users sign in with Google and their data syncs in real time across all their devices via Firebase Firestore. The app offers four views: a daily check-in with journal notes, a weekly overview, a full monthly grid with completion rates, and an analytics dashboard with streak tracking and a 365-day heatmap.',
    problem:
      'Most habit tracking apps are either too complex or too gamified — filling the screen with badges, streaks, and notifications that distract from the actual goal of building habits. The goal here was to build something closer to a paper grid: simple enough that checking off a habit takes one tap, with just enough data to stay motivated. Cross-device sync was a core requirement — the app needed to feel seamless whether opened on a phone on the go or a desktop at home.',
    architecture:
      'The frontend is a Vite + React 18 SPA with a tab-based navigation pattern and no external routing library. All application state flows through a single custom hook (useStore) that wraps Firebase Firestore — using onSnapshot for real-time sync, setDoc with merge for habit array changes, and updateDoc with dot-notation keys for individual completion toggles. Note fields are debounced 800ms before writing to avoid excessive Firestore writes. Firebase Auth handles Google sign-in with onAuthStateChanged managing the session lifecycle. All Firebase config values are read from Vite environment variables (import.meta.env.VITE_*) and set as Vercel environment variables in production — no secrets in source code.',
    keyFeatures: [
      {
        title: 'Real-Time Cross-Device Sync',
        description:
          'All habit data — completions, notes, habit order — is stored in Firestore and synced live via onSnapshot listeners. Open the app on two devices simultaneously and changes appear on both within milliseconds.',
      },
      {
        title: 'Monthly Grid View',
        description:
          'A fixed-layout table displays every day of the month as columns and habits as rows, matching the layout of a paper habit grid. Cells show a ✓ mark on completion, weekend shading, today highlighting, and a monthly completion rate per habit.',
      },
      {
        title: 'Day View with Journal',
        description:
          'Each day has a check-in view with a progress bar, per-habit note fields, and a daily free-form journal textarea. Notes are saved automatically with an 800ms debounce to avoid unnecessary Firestore writes.',
      },
      {
        title: 'Drag-and-Drop Habit Reordering',
        description:
          'Habits can be reordered via drag-and-drop using the HTML5 Drag API. The row renderer is a plain function (not a nested React component) to prevent unmounting during drag, which would reset drag state mid-gesture.',
      },
      {
        title: 'Analytics Dashboard',
        description:
          'An analytics tab shows a 365-day completion heatmap, current and best streaks, 7/30/90-day rolling averages, and per-habit completion rates — giving a long-range view of habit consistency.',
      },
      {
        title: 'Google Auth & Firestore Security',
        description:
          'Sign-in is handled via signInWithPopup with Google. Firestore security rules restrict all reads and writes to the authenticated user\'s own document, enforced at the database layer: allow read, write: if request.auth.uid == userId.',
      },
    ],
    challenges:
      'The trickiest issue was keeping drag-and-drop stable while React re-renders the habits list. Defining the row renderer as a plain function inside the parent component (rather than a separate React component) was critical — a nested component would be treated as a new type on every parent render, causing React to unmount and remount rows during drag, which interrupted the browser\'s drag session. A secondary challenge was moving Firebase config out of source code after GitHub\'s secret scanner flagged a committed API key — solved by migrating all values to Vite environment variables and Vercel\'s environment variable dashboard.',
    technicalHighlights: [
      'Firestore onSnapshot listener for real-time cross-device habit sync',
      'Dot-notation updateDoc writes for individual completion toggles without overwriting other data',
      '800ms debounced note syncing to minimize Firestore write operations',
      'HTML5 Drag API for habit reordering with plain function renderer to prevent remount during drag',
      'Firebase Auth with Google sign-in and onAuthStateChanged session management',
      'All Firebase config injected via Vite env vars — no secrets in source code',
      'Fixed-layout table with minWidth + overflow-x for mobile/desktop scrolling',
    ],
    futureImprovements: [
      'Habit scheduling — mark habits as weekday-only or specific days of the week',
      'Push notifications or reminders via Firebase Cloud Messaging',
      'Shareable progress cards — export a month summary as an image',
      'Habit categories and grouping for users tracking many habits',
      'Offline support using Firestore\'s built-in offline persistence',
    ],
  },

  {
    slug: 'product-store',
    image: productStoreImg,
    title: 'Product Store',
    tagline: 'A production-deployed MERN inventory management application with a clean REST API.',
    description:
      'A full-stack MERN application for product inventory management. Supports creating, reading, updating, and deleting products via a RESTful API backed by MongoDB Atlas. The UI provides real-time state updates and is deployed to Render for continuous availability.',
    status: 'production',
    year: '2024',
    role: 'Full-Stack Developer',
    techStack: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    projectLink: 'https://mern-store-app-ofp3.onrender.com',
    gitHubLink: 'https://github.com/PhiweM/mern-store-app',
    metrics: [
      { label: 'Stack', value: 'MERN (full)' },
      { label: 'API', value: 'RESTful, 4 endpoints' },
      { label: 'Database', value: 'MongoDB Atlas' },
      { label: 'Deployment', value: 'Render (full-stack)' },
    ],
    overview:
      'Product Store is a full-stack inventory management application demonstrating end-to-end MERN development. It covers the full data lifecycle — from a MongoDB Atlas database through an Express/Node REST API to a React + TypeScript frontend. The app supports the complete CRUD surface for products and is deployed as a single full-stack service on Render.',
    problem:
      'The goal was to build a production-deployed MERN application that goes beyond tutorials — using TypeScript throughout, deploying both frontend and backend to a real hosting environment, and implementing clean API design patterns. The project validates full-stack competency across the JavaScript ecosystem from database to UI.',
    architecture:
      'The backend is an Express.js server running on Node.js, connected to MongoDB Atlas via Mongoose. It exposes a RESTful API at /api/products. The React + TypeScript frontend is served as a static build from the same Express server in production, avoiding CORS complexity. The entire stack is deployed on Render with a single web service — the Express server both serves the React SPA and handles API routes.',
    keyFeatures: [
      {
        title: 'RESTful CRUD API',
        description:
          'Four clean REST endpoints (GET all, POST, PUT :id, DELETE :id) with consistent JSON responses and appropriate HTTP status codes. Error handling middleware returns structured error objects.',
      },
      {
        title: 'Mongoose Data Modeling',
        description:
          'Products are modeled with Mongoose schemas including validation rules — required fields, string trimming, and number constraints — preventing malformed data from reaching the database.',
      },
      {
        title: 'React State Synchronization',
        description:
          'After every mutation (create, update, delete), the UI immediately reflects the change by re-fetching from the API, keeping client state in sync with the server without stale data.',
      },
      {
        title: 'Full-Stack Single Deployment',
        description:
          'In production, Express serves the Vite-built React SPA as static files while also running the API — a single Render service handles both responsibilities, simplifying infrastructure.',
      },
    ],
    challenges:
      'The most interesting challenge was configuring the production build so that Express serves the React SPA correctly for any URL (client-side routing catch-all), while still directing /api/* routes to the API layer. CORS also required careful configuration to differentiate development (Vite dev server on a different port) from production (same origin).',
    technicalHighlights: [
      'Express middleware stack: JSON body parsing, CORS, static file serving, and catch-all SPA route',
      'Mongoose schema validation preventing invalid product data',
      'TypeScript throughout both client and server codebases',
      'Environment-variable driven configuration (MONGO_URI, PORT, NODE_ENV)',
      'Vite build output integrated into Express static serving for production',
      'Full-stack deployment on Render with automatic deploys on git push',
    ],
    futureImprovements: [
      'JWT authentication and per-user product ownership',
      'Pagination and search/filter on the product list',
      'Image upload via Cloudinary or S3',
      'Unit tests for API routes using Vitest + Supertest',
      'Real-time inventory updates using WebSockets',
    ],
  },
];
