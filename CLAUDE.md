# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for the ProHunters 2025 event "Under the Jingle Bells" - a closed event showcasing labor market research results and awarding top employers in Kazakhstan. The event is scheduled for December 9th at Le Dome restaurant in Almaty.

Built using HTML5 Boilerplate with Webpack bundling, the site presents event details including:
- Event schedule and program
- Speaker profiles with photos
- Venue information
- Award categories (High-tech and Non-High-tech employers)

## Build and Development Commands

### Development Server
```bash
npm start
```
Starts webpack-dev-server with live reload on webpack.config.dev.js configuration. Opens browser automatically.

### Production Build
```bash
npm run build
```
Creates optimized production bundle in `dist/` directory using webpack.config.prod.js. Includes:
- HTML processing via HtmlWebpackPlugin
- Asset copying (images, CSS, icons, robots.txt, 404.html, manifest)
- JavaScript bundling with webpack

### Testing
No test suite currently implemented. Running `npm test` will fail with error message.

## Project Structure

### Source Files
- `index.html` - Main HTML entry point
- `js/app.js` - JavaScript entry point (currently empty)
- `css/style.css` - Main stylesheet
- `img/` - Contains speaker photos and event branding (logo.png, speaker portraits)
- `raw/PROHUNTERS_EVENT.md` - Source content in Markdown format with event details

### Configuration
- `webpack.common.js` - Base webpack config with entry/output settings
- `webpack.config.dev.js` - Development configuration with webpack-dev-server
- `webpack.config.prod.js` - Production build with HtmlWebpackPlugin and CopyPlugin for asset management

### Build Output
Production builds output to `dist/` directory with the following structure:
- `/js/app.js` - Bundled JavaScript
- `/css/` - Copied stylesheets
- `/img/` - Copied images
- `/js/vendor/` - Vendor scripts
- Static assets (favicon.ico, robots.txt, site.webmanifest, etc.)

## Architecture Notes

This is a simple static website project using webpack as a build tool rather than a complex application framework. The webpack configuration is split into common, development, and production configs using webpack-merge.

The content source (`raw/PROHUNTERS_EVENT.md`) contains the event information in Markdown format with relative image references, suggesting this content may need to be converted to HTML or the HTML page needs to be updated to match this content structure.

Currently `js/app.js` is empty, indicating the site may be primarily HTML/CSS without significant JavaScript interactivity, or the JavaScript implementation is pending.