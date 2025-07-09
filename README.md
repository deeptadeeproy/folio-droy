# Deeptadeep Roy - Portfolio Website

A stunning, modern portfolio website built with React, featuring liquid glass design, smooth animations, and beautiful UI/UX. This portfolio showcases Deeptadeep Roy's skills as a full-stack software developer.

## ✨ Features

- **Liquid Glass Design**: Beautiful glass morphism effects throughout the website
- **Smooth Animations**: Powered by Framer Motion and Anime.js for engaging user experience
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI Components**: Built with shadcn/ui components for consistent design
- **Typewriter Effect**: Dynamic text animations in the hero section
- **Interactive Elements**: Hover effects, parallax scrolling, and smooth transitions
- **Contact Form**: Functional contact form with validation and submission feedback
- **Dark Theme**: Elegant dark theme with gradient accents
- **Performance Optimized**: Fast loading times and smooth scrolling

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Animations**: Framer Motion, Anime.js
- **UI Components**: shadcn/ui, Lucide React Icons
- **Typewriter**: React Type Animation
- **Scroll Effects**: React Intersection Observer, React Scroll
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd folio-droy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
folio-droy/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About section
│   │   ├── Skills.jsx    # Skills section
│   │   ├── Projects.jsx  # Projects section
│   │   ├── Experience.jsx # Experience section
│   │   ├── Contact.jsx   # Contact section
│   │   └── Navigation.jsx # Navigation component
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Liquid Glass Effect
- Backdrop blur effects
- Semi-transparent backgrounds
- Subtle borders and shadows
- Gradient overlays

### Animations
- Scroll-triggered animations
- Hover effects and micro-interactions
- Parallax scrolling
- Typewriter text effects
- Floating elements

### Color Scheme
- Dark theme with purple and blue gradients
- Consistent color palette throughout
- Accessible contrast ratios
- Smooth color transitions

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Colors
Modify the color scheme by updating the CSS custom properties in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other color variables */
}
```

### Content
Update the content in each component file:
- Personal information in `Hero.jsx`
- About section in `About.jsx`
- Skills and technologies in `Skills.jsx`
- Projects in `Projects.jsx`
- Experience in `Experience.jsx`
- Contact information in `Contact.jsx`

### Animations
Customize animations by modifying:
- Framer Motion variants in components
- Anime.js configurations in `App.jsx`
- CSS animations in `index.css`

## 📄 Sections

### Hero Section
- Animated introduction
- Typewriter effect
- Call-to-action buttons
- Social media links
- Scroll indicator

### About Section
- Personal introduction
- Statistics and achievements
- Skills overview
- Core values

### Skills Section
- Technical skills with progress bars
- Technology stack
- Soft skills
- Certifications

### Projects Section
- Featured projects showcase
- Project filtering by category
- Interactive project cards
- Technology tags

### Experience Section
- Work experience timeline
- Education details
- Certifications
- Professional achievements

### Contact Section
- Contact form with validation
- Contact information
- Social media links
- Availability status

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings

### Other Platforms
The project can be deployed to any static hosting platform that supports React applications.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Deeptadeep Roy
- Email: deeptadeep@example.com
- LinkedIn: [linkedin.com/in/deeptadeep](https://linkedin.com/in/deeptadeep)
- GitHub: [github.com/deeptadeep](https://github.com/deeptadeep)

---

Built with ❤️ by Deeptadeep Roy 