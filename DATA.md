# 📝 How to Add Your Information (Beginner's Guide)

Welcome! You don't need to be a coder to update this portfolio. follow these simple steps to make it yours.

## 📍 Step 1: Find the Data File
Everything you see on the website is stored in one file. 
1. Open the folder named `src`
2. Open the folder named `data`
3. Open the file named **`portfolio.ts`**

---

## ✍️ Step 2: Update Your Details
When you open `portfolio.ts`, you will see words inside quote marks like `"Phani Kumar"`. **Only change the words inside the quotes.**

### 👤 Your Basics
Find these lines at the top and change them:
- `name`: Put your name here.
- `role`: Put your job title (e.g., "Graphic Designer").
- `email`: Put your email address.
- `github`: Paste your GitHub link.
- `linkedin`: Paste your LinkedIn link.

### 💼 Your Projects
Scroll down to the `projects` section. It looks like this:
```typescript
{
  id: 1,
  title: "Change This Title",
  description: "Change this description to explain your project.",
  tech: ["Tool 1", "Tool 2"],
  github: "Link to your code",
  demo: "Link to your live website",
}
```
> **⚠️ Important:** Make sure there is a comma `,` at the end of each line as shown above!

---

## 🖼️ Step 3: Adding Images
If you want to use your own photos for projects:
1. Go to the `public` folder.
2. Go to the `projects` folder.
3. Drop your image file there (e.g., `my-project.jpg`).
4. In `portfolio.ts`, change the image line to: `image: "/projects/my-project.jpg"`.

---

## 💡 Top Tips for Beginners
- **Keep the Quotes**: Always keep the `" "` marks around your text.
- **Keep the Commas**: Always keep the `,` at the end of lines.
- **The "Red Squiggly"**: If you see a red underline in your code editor, it means a comma or quote is missing. Check the line above!
- **Refresh**: Save the file (Ctrl + S), and the website should update automatically in your browser.

## 🚀 Ready to Go Live?
Once you are happy with your data, follow the [Deployment Guide (DEPLOY.md)](file:///c:/Users/phani/OneDrive/Documents/Projects/Portfolio/DEPLOY.md) to put it on the internet for free!
