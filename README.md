# Ellty Frontend Assignment - Component Replication

This is a pixel-perfect replication of a component from Figma design, built with Next.js, React, and Tailwind CSS.

## 🌐 Live Demo

**[View Live Demo](https://ellty-frontend-assignment-gray.vercel.app/)**

## 🎯 Project Overview

This project replicates a "Home Card" component with interactive checkboxes and a button, matching the design specifications from the provided Figma file.

### Features Implemented:
- ✅ Pixel-perfect design matching Figma specifications
- ✅ Interactive checkbox list with hover states
- ✅ Styled button with hover and active states
- ✅ Responsive component with proper spacing and shadows
- ✅ Clean, reusable component architecture
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ellty-round-1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the component.

## 📦 Project Structure

```
ellty-round-1/
├── app/
│   ├── components/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── ListItem.tsx        # Checkbox list item component
│   │   └── HomeCard.tsx        # Main card component
│   ├── page.tsx                # Main page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── public/                     # Static assets
└── package.json
```

## 🎨 Component Specifications

### HomeCard Component
- **Dimensions**: 370px × 326px (hug content)
- **Border radius**: 6px
- **Border**: 1px solid #EEEEEE
- **Shadow**: 0px 8px 15px 0px rgba(20, 20, 20, 0.12)
- **Background**: #FFFFFF

### Button Component
- **Dimensions**: 340px × 40px
- **Background**: #FFCE22
- **Border radius**: 4px
- **Padding**: 10px 20px
- **Hover state**: Lighter yellow (#FFD84D)
- **Active state**: Darker yellow (#E6B800)

### List Item Component
- **Dimensions**: 370px × 42px
- **Padding**: 8px 22px 8px 15px
- **Checkbox size**: 20px × 20px
- **Checkbox color (checked)**: #4A90E2
- **Hover state**: Light gray background (#F9F9F9)

## 🛠️ Technologies Used

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Package Manager**: npm

## 📱 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

3. Deploy:
```bash
npm run deploy
```

## ✅ Features Checklist

- [x] Pixel-perfect design replication
- [x] Interactive checkboxes with state management
- [x] Button with hover and active states
- [x] Proper spacing and alignment
- [x] Shadow effects matching design
- [x] Clean, organized code structure
- [x] TypeScript implementation
- [x] Responsive design
- [x] Accessible components

## 🔍 Design Source

Original Figma Design: [Frontend Assignment](https://www.figma.com/design/dwBFtlKY933OJWWSrGPs5q/Frontend?node-id=0-1)

## 📧 Contact

For any questions or clarifications, please contact: anika@ellty.com

---

**Built with ❤️ for Ellty Frontend Assignment**
