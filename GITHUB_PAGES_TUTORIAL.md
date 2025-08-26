# GitHub Pages Deployment Tutorial

This tutorial will guide you through deploying your Quartz blog to GitHub Pages.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Your Quartz blog ready (which you already have!)

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. **Important**: Name your repository `rohitdat.github.io` (replace `rohitdat` with your actual GitHub username)
   - This special naming convention tells GitHub to serve this as your main GitHub Pages site
   - If you use a different name, your site will be at `username.github.io/repository-name`
4. Make sure the repository is **Public** (GitHub Pages requires this for free accounts)
5. Do **NOT** initialize with README, .gitignore, or license (since we already have content)
6. Click "Create repository"

## Step 2: Prepare Your Local Repository

Since you cloned from another repository, you need to remove the old remote and add your new one:

```bash
# Remove the old remote origin
git remote remove origin

# Add your new GitHub repository as origin
git remote add origin https://github.com/dat-rohit/rohitdat.github.io.git
```

## Step 3: Configure Quartz for GitHub Pages

1. Open `quartz.config.ts` in your editor
2. Update the `baseUrl` to match your GitHub Pages URL:
   ```typescript
   baseUrl: "rohitdat.github.io"
   ```
   (Replace `rohitdat` with your GitHub username)

## Step 4: Set Up GitHub Actions for Automatic Deployment

Create a GitHub Actions workflow file:

1. Create the directories: `.github/workflows/`
2. Create a file called `deploy.yml` in that directory with this content:

```yaml
name: Deploy Quartz site to Pages

on:
  push:
    branches: ["master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm install
      
      - name: Build Quartz
        run: npx quartz build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 5: Enable GitHub Pages

1. Go to your GitHub repository page
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

## Step 6: Push Your Code

```bash
# Add all your files
git add .

# Commit your changes
git commit -m "Initial commit: Rohit's personal blog with Quartz"

# Push to GitHub (this will trigger the deployment)
git push -u origin master
```

## Step 7: Wait for Deployment

1. Go to the "Actions" tab in your GitHub repository
2. You'll see your workflow running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be live at `https://rohitdat.github.io`

## Step 8: Verify Your Site

1. Visit `https://rohitdat.github.io` (replace with your username)
2. You should see your personalized blog
3. Test the dark mode toggle button in the header
4. Make sure all links and navigation work correctly

## Future Updates

To update your blog:

1. Make changes to your content or configuration locally
2. Test locally with `npx quartz build --serve`
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Update blog content"
   git push
   ```
4. GitHub Actions will automatically rebuild and deploy your site

## Custom Domain (Optional)

If you want to use a custom domain like `rohitdat.com`:

1. In your repository settings, go to Pages
2. Add your custom domain in the "Custom domain" field
3. Create a `CNAME` file in your repository root with your domain name
4. Configure your DNS provider to point to `rohitdat.github.io`

## Troubleshooting

**Site not updating?**
- Check the Actions tab for any failed builds
- Make sure you're pushing to the correct branch (master)

**404 errors?**
- Verify your repository name is exactly `username.github.io`
- Check that GitHub Pages is enabled and source is set to "GitHub Actions"

**Build failures?**
- Check that your `quartz.config.ts` is valid
- Ensure all markdown files have proper frontmatter

**Dark mode button not working?**
- Clear your browser cache
- Check browser console for JavaScript errors

## Tips

- Always test your changes locally before pushing
- Use descriptive commit messages
- Keep your repository public for free GitHub Pages hosting
- Consider setting up branch protection rules for the master branch

Your blog is now live and automatically deployed! Every time you push changes to master, GitHub Actions will rebuild and deploy your site automatically.