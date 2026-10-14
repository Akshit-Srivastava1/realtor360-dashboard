# Realtor360 — Real Estate Dashboard

Realtor360 is a modern real estate dashboard built with React, TypeScript, and Vite. It provides a centralized interface for monitoring property listings, leads, deals, revenue, sales performance, and upcoming activities.

## Features

- **Dashboard Overview:** Active listings, active leads, total closed deals, and total revenue.
- **Deals by Lead Source:** Doughnut chart showing lead-source distribution.
- **Deals by Stage:** Stacked bar chart showing deal stages across developments.
- **Sales Performance:** Horizontal bar chart comparing sales across developments.
- **Deals Pipeline:** Summary of deals grouped by development.
- **Active Listings:** Property details, prices, units, views, and availability status.
- **Leads Contacts:** Contact information and quick-call interface.
- **Reminders:** Follow-up tasks and important activities.
- **Calendar and Schedule:** Monthly calendar with scheduled activities.
- **Search and Filters:** Search properties and filter listings by status.
- **Responsive Layout:** Dashboard styling designed for different screen sizes.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- ESLint

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project.

### Installation

Clone the repository:

```bash
git clone https://github.com/Akshit-Srivastava1/realtor360-dashboard.git
```

Navigate to the project directory:

```bash
cd realtor360-dashboard
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```text
realtor360-dashboard/
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── assets/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

*Note: The structure above is representative. Your actual folders and files may differ.*

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production application |
| `npm run lint` | Runs ESLint checks |
| `npm run preview` | Previews the production build |

## Deployment

The project can be deployed using platforms such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

For Vercel, import the GitHub repository and configure:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Notes

This project was developed as a real estate dashboard UI inspired by the Realtor360 design reference.

The dashboard currently presents sample property, lead, sales, and revenue data. Features requiring a backend or external integrations should be connected separately if needed.

## License

This project is intended for demonstration and portfolio purposes. Add a license file if you plan to distribute it under a specific open-source license.
