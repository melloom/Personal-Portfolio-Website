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
