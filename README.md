# Mohammad Adi — Portfolio

My personal developer portfolio, built as a single-page React app with a game-engine / IDE inspired UI (sidebar navigation, "inspector" panels, console-log style experience cards). Live sections for Experience, Projects, Skills, Education, and Contact.

**Live site:** [portfolio-ecru-zeta-59.vercel.app](https://portfolio-ecru-zeta-59.vercel.app/)

## Tech Stack

- [React 19](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Lucide React](https://lucide.dev/) — icon set
- Plain CSS (component-scoped styles inside `portfolio.jsx`)
- [ESLint](https://eslint.org/) — linting

## Sections

- **Summary** — intro / hero panel
- **Experience** — Zidio Development, E-Train, and EBTS Organization internships
- **Projects** — IntellMeet, Custom Google Gemini Gems Vault, FIFA World Cup Database, Sport Store E-Commerce, Animal Matching Game
- **Skills** — languages, frameworks, web, tools, soft skills
- **Education** — degree and schooling timeline
- **Contact** — GitHub, LinkedIn, email

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
git clone https://github.com/Adi432144/my-portfolio.git
cd my-portfolio
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally with hot module reloading (default: `http://localhost:5173`).

### Build

```bash
npm run build
```

Outputs a production-ready static build to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.jsx          # root component, renders Portfolio
│   ├── App.css
│   ├── portfolio.jsx    # main portfolio page (all sections/content)
│   ├── index.css
│   └── main.jsx          # React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/), which auto-detects the Vite framework preset:

- **Build command:** `vite build`
- **Output directory:** `dist`
- **Install command:** `npm install`

Any push to the `main` branch triggers an automatic redeploy.

## Contact

- GitHub: [github.com/Adi432144](https://github.com/Adi432144)
- LinkedIn: [linkedin.com/in/mohammad-adi-748109306](https://linkedin.com/in/mohammad-adi-748109306)
- Email: mdadiprivate31@gmail.com

## License

This project is personal portfolio source code. Feel free to reference the structure, but please don't republish the content or design as your own.
