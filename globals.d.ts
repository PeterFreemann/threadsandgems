// Allow side-effect imports of plain CSS (e.g. `import "./globals.css"`).
// Next.js only ships ambient types for `*.module.css`, which makes the
// editor's TS server flag global stylesheet imports even though the build
// handles them fine.
declare module "*.css";
