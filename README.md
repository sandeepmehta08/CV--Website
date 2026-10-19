# portfolio

Next.js 14 (App Router) + Tailwind + TypeScript. All text lives in `data/content.ts`.

## Run locally

```powershell
npm install
npm run dev
```

Open the `Local:` URL the terminal prints (usually http://localhost:3000).
Keep the terminal open while you browse.

## Edit content

Open `data/content.ts`. Change text, links, dates there. Wrap words in `**double asterisks**` to make them bold. You don't need to touch any component.

## Add a project

In `data/content.ts`, add an object to the `projects` array:

```ts
{
  title: "My Project",
  url: "https://github.com/you/repo",
  thumbnail: "/projects/my-project.png",
  bullets: ["Built **X** that does Y."],
  tags: ["Python", "Docker"],
}
```

Drop `my-project.png` into `public/projects/`.

## Images

Missing images fall back to `public/placeholder.svg`. Replace these files:

- `public/profile.jpg` (square, 400x400+)
- `public/og.png` (1200x630, link preview)
- `public/logos/`: airbus.png, guidewire.png, freelance.png, nvidia.png, invisible-notes.png, aden.png, gssoc.png, srm.png
- `public/projects/`: foresight.png, chaosline.png, bellwether.png, conduit.png, k8s-self-healing.png, anchorpoint.png, job-processor.png, recallai.png, encore.png, stockup.png

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com, click Add New > Project, import the repo.
3. Leave defaults (Next.js is auto-detected). Click Deploy.
4. After deploy, set `site.url` in `data/content.ts` to your real URL and push again.
