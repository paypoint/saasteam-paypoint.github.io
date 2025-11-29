# 1. Version Control & Web Foundations

A Hands-On Walkthrough for Beginners

Today you'll learn the most essential habits of a frontend developer:

- how to use Git cleanly

- how to commit using proper standards

- how to structure your branches

- how to write basic HTML

- how to style with fundamental CSS

Follow each section step-by-step and implement side-by-side.

---

# 1. Version Control with Git

## 1.1 What is Git?

Git is a **version control system** that allows multiple developers to work on the same codebase without breaking things.

It helps you:

- track every change

- go back to previous versions

- create separate branches for features

- collaborate safely

---

## 1.2 Install Git

Check if Git is installed:

```bash
git --version
```

If not installed, download from:

https://git-scm.com/downloads

## 1.3 Configure Git (One-time setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 1.4 Create a New GitHub Repository

**Step 1:**

Go to GitHub → click New Repository

**Step 2:**

Give repo a name, e.g.:

```
frontend-bootcamp-day1
```

**Step 3:**

Choose "Public" → Create repository.

## 1.5 Clone Your Repository Locally

```bash
git clone https://github.com/<your-username>/frontend-bootcamp-day1.git
```

Move into the folder:

```bash
cd frontend-bootcamp-day1
```

## 1.6 Branching Best Practices

Every feature or fix must have its own branch.

**Recommended Naming Rules:**

| Purpose  | Branch Format                                 | Example                               |
| -------- | --------------------------------------------- | ------------------------------------- |
| Feature  | feature/&lt;name&gt;                          | feature/navbar, feature/notifications |
| Fix      | fix/&lt;ticket&gt; or fix/&lt;description&gt; | fix/10, fix/caching                   |
| Hotfix   | hotfix/&lt;issue&gt;                          | hotfix/login-crash                    |
| Refactor | refactor/&lt;area&gt;                         | refactor/header                       |

Create a branch:

```bash
git checkout -b feature/intro-page
```

## 1.7 Commit Standards with Commitizen

Commitizen forces you to write professional, structured commit messages.

Install Commitizen globally:

```bash
npm install -g commitizen
```

Initialize Commitizen in your project:

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

Make a commit:

```bash
git add .
git cz
```

You'll see a guided prompt:

- Choose type: feat, fix, docs, style, refactor, etc.
- Write a description.
- Commit is auto-generated.

**Example generated commit:**

```
feat: add main heading and navigation bar
```

## 1.8 Push Your Work

```bash
git push origin feature/intro-page
```

Create a Pull Request on GitHub → Ask for review → Merge.

---

# 2. HTML Foundations

Now let's build your first webpage.

Create a file:

```
index.html
```

## 2.1 Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 1 - HTML Basics</title>
  </head>
  <body>
    <h1>Welcome to Frontend Bootcamp</h1>
    <p>This is your first HTML page.</p>
  </body>
</html>
```

**Key Tags Explained:**

- `<!DOCTYPE html>` → Tells browser this is HTML5
- `<html>` → Root of the page
- `<head>` → Metadata, scripts, styles
- `<body>` → Visible content

## 2.2 Common HTML Elements

**Headings:**

```html
<h1>Main Title</h1>
<h2>Sub title</h2>
```

**Paragraphs:**

```html
<p>Hello, this is a paragraph.</p>
```

**Links:**

```html
<a href="https://google.com">Go to Google</a>
```

**Images:**

```html
<img src="logo.png" alt="Brand Logo" />
```

**Lists:**

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

## 2.3 Forms (very important for beginners)

```html
<form>
  <label>Name:</label>
  <input type="text" />

  <label>Email:</label>
  <input type="email" />

  <button type="submit">Submit</button>
</form>
```

---

# 3. CSS Fundamentals

Create a file:

```
styles.css
```

Connect it inside index.html:

```html
<link rel="stylesheet" href="styles.css" />
```

## 3.1 The Box Model (critical concept)

Every element has:

- content
- padding
- border
- margin

**Example:**

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 20px;
}
```

<img src={require('@site/static/img/box-model.png').default} alt="Box Model Diagram" width="600" />

## 3.2 Selectors

**Element selector:**

```css
p {
  color: blue;
}
```

**Class selector:**

```css
.title {
  font-size: 24px;
}
```

**ID selector:**

```css
#main-box {
  background: yellow;
}
```

## 3.3 Styling Common Elements

```css
h1 {
  color: #333;
  font-family: Arial, sans-serif;
}

button {
  padding: 10px 20px;
  background: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
```

## 3.4 Simple Page Styling Example

```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

header {
  background: black;
  color: white;
  padding: 20px;
}

main {
  padding: 20px;
}
```

---

# 4. Mini Project – Build Your First Page

**Goal:**

Create a simple landing page with:

- header
- navigation bar
- hero section
- a form
- footer

**Folder Structure:**

```
index.html
styles.css
```

