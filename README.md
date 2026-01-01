# Meeka Engineering Website

This is the official website codebase for Meeka Engineering. It is a multi-page static website built using HTML5 and Tailwind CSS.

## Project Structure

The project consists of individual HTML files for each page located in the root directory:
- `index.html` - Home page
- `about.html` - About Us
- `service.html` - Overview of services
- `civil-structural.html`, `mechanical-piping.html`, etc. - Specific service pages

## Tech Stack

- **HTML5**: Semantic markup for page structure.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Used for interactive elements (navigation, etc.).

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/JaiminBrahmbhatt/meekaeng.git](https://github.com/JaiminBrahmbhatt/meekaeng.git)

```

2. Navigate to the project folder:
```bash
cd meekaeng

```


3. Install dependencies:
```bash
npm install

```



### Development

To start the Tailwind CSS build process (watching for changes):

```bash
npm run dev

```

*(Note: Check package.json for the exact script name if 'dev' does not work)*

## Deployment

This is a static site. To deploy:

1. **Vercel/Netlify:** Connect this repository. The build command usually `npm run build` (if configured) or leave empty for simple static hosting.
2. **GitHub Pages:** Go to Settings -> Pages and select the `main` branch as the source.

## Contributing

1. Always work on the `dev` branch for changes.
2. Create a new branch from `dev`, make changes, and create a Pull Request (PR).
3. Once approved, merge into `dev`.
