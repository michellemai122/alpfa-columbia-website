# alpfa-columbia-website

Website for the ALPFA Columbia chapter, built with React + TypeScript (Vite) and React Router.
The design is ported from the chapter's Canva prototype.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run lint
```

## Where things live

| Path | What |
| --- | --- |
| `src/pages/` | One component per page: Home, About, Programs, Convention, Events, Team, Sponsors |
| `src/components/` | Shared pieces: Navbar, Footer, Logo, Photo, Carousel, Faq, Icon |
| `src/data/` | Content you will edit most: team roster, events, FAQ, stats, and links (`site.ts`) |
| `src/styles/global.css` | Colors, fonts, and all page styles |
| `public/images/` | Photos and logos (see `public/images/README.md` for file names) |

## Updating content

- **Team:** edit `src/data/team.ts`. Add `linkedin`, `major`, `classYear` to show them on the hover card.
- **Events:** edit `src/data/events.ts` (past events, calendar entries, next upcoming event).
- **Links** (Linktree, newsletter, socials, sponsorship package): edit `src/data/site.ts`.
- **Photos:** drop files into `public/images/` with the names listed there. Missing photos show a navy placeholder.
