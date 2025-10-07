# Securing the Cloud Resources - Course Website

A static course website built with [11ty](https://www.11ty.dev/) and deployed on GitHub Pages.

## Local Development

### Prerequisites
- Node.js (v20 or higher)
- npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

### Build

To build the static site:
```bash
npm run build
```

The output will be in the `_site` directory.

## Project Structure

```
.
├── src/
│   ├── _data/
│   │   └── course.yaml       # Course catalog data
│   ├── _includes/
│   │   └── layout.njk        # Base layout template
│   ├── css/
│   │   └── style.css         # Styles
│   └── index.njk             # Homepage template
├── .eleventy.js              # 11ty configuration
└── package.json
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### GitHub Pages Setup

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select:
   - Source: **GitHub Actions**
3. Push to the `main` branch to trigger deployment

## Updating Course Content

Edit the `course-catalog.yaml` file in the root directory, then run:

```bash
cp course-catalog.yaml src/_data/course.yaml
npm run build
```

Commit and push the changes to deploy.

## License

ISC
