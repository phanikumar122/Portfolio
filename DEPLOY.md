# 🚀 Deploying to Netlify via GitHub (Beginner-Friendly Guide)

This guide will show you how to upload your portfolio to **GitHub** and host it live on **Netlify** for free.

Netlify's Git integration will automatically build and publish your website every time you push code to GitHub!

---

## 🛠️ Step 1: Understanding What to Push to GitHub

When publishing code, you should **only** push the source code files. Temporary files, package cache folders, and build files should **never** be uploaded. 

### 🚫 Files to Exclude (Do NOT push to GitHub)
1. **`node_modules/`** — This folder contains downloaded packages and is extremely large. It will be re-downloaded automatically on Netlify.
2. **`.next/`** — This is Next.js's temporary build cache directory.
3. **`.vercel/`** — Temporary local deployment folders.
4. **`.env.local`** (or any `.env` files) — Files containing private API keys or passwords.

### 🛡️ How this is handled: The `.gitignore` file
Your project has a special file called `.gitignore` in the root folder. It tells Git to **automatically ignore** all the folders listed above. You do not need to delete these files manually from your computer; Git will simply skip them when uploading.

> 💡 **Beginner Tip:** If you accidentally pushed `node_modules` or `.next` to GitHub before, you can delete them from tracking by running:
> ```bash
> git rm -r --cached node_modules
> git rm -r --cached .next
> git commit -m "Remove ignored folders from tracking"
> ```

---

## 📦 Step 2: Push Your Code to GitHub

If your project is not yet on GitHub, follow these steps:

1. **Log in to GitHub**: Go to [github.com](https://github.com/) and log in (or create a free account).
2. **Create a New Repository**:
   * Click the **"+"** icon in the top-right corner and select **"New repository"**.
   * Name your repository (e.g., `my-portfolio`).
   * Keep it **Public** (or Private if you prefer).
   * Do **NOT** check "Add a README file", "Add .gitignore", or "Choose a license" (since your project already has them).
   * Click **"Create repository"**.
3. **Upload Your Code via Terminal**:
   Open a terminal in your project root directory (`c:\Users\Phani\OneDrive\Documents\Win-Savepoint\Portfolio`) and run these commands:

   ```bash
   # Initialize Git in your project folder (if not already done)
   git init

   # Add all files to staging (Git will automatically ignore node_modules, .next, etc.)
   git add .

   # Create your first savepoint (commit)
   git commit -m "Initial commit: portfolio webpage setup"

   # Rename branch to main
   git branch -M main

   # Link your local folder to your online GitHub repository
   # (Replace the URL below with your actual GitHub repository URL)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

   # Push your code online
   git push -u origin main
   ```

---

## 🌐 Step 3: Connect to Netlify for Free Hosting

Now that your code is safely stored on GitHub, Netlify will host it for free.

1. **Create a Netlify Account**:
   * Go to [netlify.com](https://www.netlify.com/) and click **"Sign Up"**.
   * Sign up using your **GitHub** account (this links your accounts automatically).
2. **Import Your Project**:
   * On your Netlify dashboard, click the **"Add new site"** button.
   * Select **"Import an existing project"**.
   * Under **"Connect to Git provider"**, click **"GitHub"**. (Authorize Netlify if prompted).
   * Search for your repository name (e.g. `my-portfolio`) and click it.
3. **Build Settings (Automatic)**:
   Netlify automatically detects Next.js and configures the settings for you:
   * **Base directory**: Leave this **blank** (empty), as your project files are in the root folder of the repository.
   * **Build command**: `npm run build`
   * **Publish directory**: `.next` (or the default recommended by the Netlify Next.js runtime)
   * **Functions directory**: Leave this **blank** (empty), as Netlify automatically configures Serverless Functions for Next.js.
4. **Deploy**:
   * Click **"Deploy [your-project-name]"**.
   * Netlify will now install the required packages and build your site. This takes about 1-2 minutes.
   * Once complete, the status badge will change to **"Published"**, and Netlify will provide a free link (e.g. `https://your-site-name.netlify.app`).

---

## 🔄 Step 4: Making Updates in the Future

Once connected, updating your website is incredibly simple:
1. Make changes to your code locally.
2. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update projects section"
   git push
   ```
3. Netlify will automatically detect this push, rebuild your website, and update the live page in seconds!
