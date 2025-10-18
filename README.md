# Personal Portfolio - Mykhailo (Misha) Behei

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, projects, and skills in software engineering and WebRTC technologies.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **TypeScript**: Fully typed for better developer experience and code quality
- **Component Testing**: Comprehensive test coverage with Vitest
- **Modern Tooling**: Vite for fast builds, ESLint + Prettier for code quality
- **Smooth Navigation**: Scroll-to-section navigation with mobile menu
- **Professional Sections**: Hero, About, Projects, Skills, Contact, and Footer

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Vitest + React Testing Library
- ESLint + Prettier
- CSS3

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/behei-vonage/personal-portfolio.git

# Navigate to project directory
cd personal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at the URL provided by Vite (typically port 5173).

## 🧪 Development

### Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting errors
npm run format           # Format code with Prettier
npm run type-check       # Run TypeScript type checking
npm test                 # Run tests
npm run test:coverage    # Run tests with coverage
```

### Code Quality

The project enforces code quality through:

- **TypeScript**: Strict type checking
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Consistent code formatting
- **Vitest**: Unit and component testing

See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed development guidelines.

## 📝 Testing

All components have comprehensive test coverage:

- 7 test files
- 50 tests total
- 100% pass rate

Run tests with:

```bash
npm test              # Watch mode
npm test -- --run     # Run once
npm run test:ui       # Interactive UI
```

See [TEST_SUMMARY.md](./TEST_SUMMARY.md) for detailed test information.

## 🎨 Customization

To customize the portfolio with your own information:

1. Update personal info in `src/components/Hero/Hero.tsx`
2. Modify about section in `src/components/About/About.tsx`
3. Add your projects in `src/components/Projects/Projects.tsx`
4. Update skills in `src/components/Skills/Skills.tsx`
5. Change contact details in `src/components/Contact/Contact.tsx`
6. Replace headshot image at `src/assets/headshot.jpeg`

## 📄 Project Structure

```
src/
├── components/          # React components (each in own folder)
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Projects/
│   └── Skills/
├── assets/             # Static assets
├── test/               # Test configuration
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

## 🚢 Deployment

Build the project:

```bash
npm run build
```

The `dist/` folder contains the production-ready files. Deploy to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static host**: Upload `dist/` contents

## 📚 Documentation

- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development guidelines and conventions
- [TEST_SUMMARY.md](./TEST_SUMMARY.md) - Testing documentation

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📧 Contact

- **Email**: misha.behey@gmail.com
- **GitHub**: [@behei-vonage](https://github.com/behei-vonage)
- **Location**: West Bend, Wisconsin

## 📄 License

ISC

---

Built with ❤️ using React and TypeScript
