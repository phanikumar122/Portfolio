# Portfolio Data Integration Guide

This guide explains how to replace the placeholder "Earthy Neutral" data with your real professional information and links.

## 📂 The Data Source
All the website's content (names, links, projects, etc.) is centralized in a single file:
**[src/data/portfolio.ts](file:///c:/Users/phani/OneDrive/Documents/Projects/Portfolio/src/data/portfolio.ts)**

---

## 🛠️ How to Update Your Data

### 1. Basic Information
Open `src/data/portfolio.ts` and update the top-level fields:
```typescript
export const portfolioData = {
  name: "Your Name",
  role: "Your Professional Role",
  tagline: "Your Mission Statement",
  description: "A more detailed about-me paragraph.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  resumeUrl: "/your-resume.pdf", // Place your PDF in the /public folder
  ...
};
```

### 2. Updating Skills
Skills are grouped by category. You can add, remove, or rename these as needed:
```typescript
  skills: [
    {
      category: "Your Category Name",
      items: ["Skill 1", "Skill 2", "Skill 3"],
    },
    ...
  ],
```

### 3. Adding Your Projects
Each project has a title, description, and links. 
> [!TIP]
> To use your own images, place them in `public/projects/` and update the `image` path.
```typescript
  projects: [
    {
      id: 1,
      title: "Real Project Title",
      description: "Explain what you built and why.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/...",
      demo: "https://project-demo.com",
      image: "/projects/your-image.jpg",
    },
    ...
  ],
```

---

## 🚀 Deployment Next Steps

Once you've updated your data:
1. **Verify**: Run `npm run dev` to see your changes locally.
2. **Build**: Run `npm run build` to ensure everything is production-ready.
3. **Deploy**: Follow the instructions in [DEPLOY.md](file:///c:/Users/phani/OneDrive/Documents/Projects/Portfolio/DEPLOY.md) to put your site online.

---

> [!IMPORTANT]
> Make sure to keep the object structure (brackets, commas) consistent to avoid TypeScript errors. If the page doesn't reload after a change, restart your development server.
