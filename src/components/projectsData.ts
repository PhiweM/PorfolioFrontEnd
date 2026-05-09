import productStoreImg from './../assets/projects/productStore.png';
import afriverseImg from './../assets/projects/Afriverse.png';

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
