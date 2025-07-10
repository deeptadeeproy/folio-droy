# Deeptadeep Roy - Portfolio Website

A stunning, modern portfolio website built with React, featuring liquid glass design, smooth animations, and beautiful UI/UX. This portfolio showcases Deeptadeep Roy's skills as a full-stack software developer with a focus on clean, minimalist design and exceptional user experience.

## ✨ Features

- **Liquid Glass Design**: Beautiful glass morphism effects throughout the website
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI Components**: Built with shadcn/ui components for consistent design
- **Typewriter Effect**: Dynamic text animations in the hero section
- **Interactive Elements**: Enhanced hover effects, smooth transitions, and clickable contact items
- **Clean Navigation**: Minimalist navigation design with smooth scrolling
- **Contact Integration**: Fully clickable contact items with proper hover effects
- **Dark Theme**: Elegant dark theme with gradient accents
- **Performance Optimized**: Fast loading times and smooth scrolling
- **Accessibility**: Proper focus management and keyboard navigation

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Animations**: Framer Motion
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
│   ├── assets/
│   │   ├── icons/        # Technology icons
│   │   ├── logos/        # Company logos
│   │   └── resume/       # Resume files
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── shared/       # Shared components
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About section
│   │   ├── Skills.jsx    # Skills section
│   │   ├── Projects.jsx  # Projects section
│   │   ├── Experience.jsx # Experience section
│   │   ├── Contact.jsx   # Contact section
│   │   └── Navigation.jsx # Navigation component
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── utils/
│   │   └── useIntersectionObserver.js # Custom hooks
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
- Enhanced hover effects and micro-interactions
- Smooth color transitions
- Typewriter text effects
- Floating elements

### Color Scheme
- Dark theme with purple, blue, and green gradients
- Consistent color palette throughout
- Accessible contrast ratios
- Smooth color transitions

### Navigation Design
- Clean, minimalist navigation
- Centered desktop layout
- Right-aligned mobile menu
- Smooth scrolling between sections
- No visual artifacts on interaction

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
- CSS animations in `index.css`
- Intersection observer configurations

## 📄 Sections

### Hero Section
- Animated introduction with typewriter effect
- Call-to-action buttons
- Social media links with hover effects
- Smooth scroll indicator

### About Section
- Personal introduction
- Statistics and achievements
- Skills overview with animated progress
- Core values presentation

### Skills Section
- Technical skills organized by category
- Technology stack with icons
- Interactive skill cards
- Comprehensive technology showcase

### Projects Section
- Featured projects showcase
- Category-based filtering
- Interactive project cards
- Technology tags and descriptions

### Experience Section
- Work experience timeline
- Education details
- Professional achievements
- Interactive company links

### Contact Section
- Fully clickable contact items
- Enhanced hover effects with color-coded interactions
- Social media integration
- Calendar and timezone display
- Real-time clock functionality

## 🎯 Key Features

### Enhanced Contact Interactions
- **Email**: Clickable with light blue hover effects
- **Phone**: Clickable with green hover effects
- **Location**: Clickable with purple hover effects and Google Maps integration
- **Social Links**: Interactive with hover animations

### Improved User Experience
- **Focus Management**: Clean focus states without visual artifacts
- **Smooth Interactions**: Enhanced hover effects and transitions
- **Accessibility**: Proper keyboard navigation and screen reader support
- **Performance**: Optimized animations and loading times

### Navigation Enhancements
- **Clean Design**: Minimalist navigation without logo clutter
- **Responsive Layout**: Centered on desktop, right-aligned on mobile
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Optimization**: Touch-friendly mobile menu

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

## 📞 Contact

- **Email**: deeptadeeproy@yahoo.in
- **Phone**: +91 90738-40430
- **Location**: Kolkata, India
- **GitHub**: [deeptadeeproy](https://github.com/deeptadeeproy)
- **LinkedIn**: [deeptadeeproy](https://in.linkedin.com/in/deeptadeeproy)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion 