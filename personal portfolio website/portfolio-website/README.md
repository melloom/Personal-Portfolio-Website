# Melvin Peralta - Professional Portfolio

A clean, stylish personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Modern and clean design
- Dark/light theme toggle with local storage
- Animated text typing effect
- Responsive layout for all devices
- Smooth scroll functionality
- Interactive UI elements with hover effects
- Mobile-friendly navigation
- No framework dependencies

## Project Structure

```
portfolio-website
├── index.html          # Main page of the portfolio website
├── css
│   └── style.css      # Styles for the website
├── js
│   └── script.js      # JavaScript for interactivity
├── assets
│   ├── images         # Folder for images used in the portfolio
│   └── resume
│       ├── personal-resume.pdf  # Personal resume in PDF format
│       └── tech-resume.pdf      # Tech resume in PDF format
└── README.md          # Documentation for the project
```

## CSS Architecture Note

This project now uses standard CSS instead of Tailwind CSS directives. The `globals.css` file has been updated with equivalent standard CSS classes to replace Tailwind utilities.

### Key changes:

1. Removed `@tailwind` directives
2. Added CSS variables for colors and theming
3. Created standard CSS classes for common utilities
4. Implemented dark mode with CSS variables

## Components That May Need Updates

Some components may need CSS class updates if they heavily relied on Tailwind's utility classes. If you notice styling issues, you may need to:

1. Replace Tailwind utility classes with the standard CSS classes defined in `globals.css`
2. Add custom CSS for component-specific styling

## Getting Started

To view the portfolio website, follow these steps:

1. **Clone the repository** or download the project files to your local machine.
2. Open the `index.html` file in your web browser. You can do this by double-clicking the file or right-clicking and selecting "Open with" followed by your preferred web browser.
3. Ensure that all assets are correctly linked and available in their respective folders.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgments

This project is a simple demonstration of web development using basic technologies. Feel free to modify and expand upon it as needed!