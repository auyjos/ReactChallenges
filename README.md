# React Challenges Project

A React application built with Vite, TypeScript, Tailwind CSS, and React Router for practicing React development through various coding challenges.

**Author:** Jose Auyon

## 🚀 Features

- **Multiple React Challenges**: Practice different React concepts from beginner to advanced
- **Modern Tech Stack**: Built with Vite, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-friendly interface with beautiful UI
- **Educational Focus**: Each challenge includes learning objectives and key concepts
- **Navigation**: Easy routing between different challenges using React Router

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📚 Available Challenges

### Easy Level
- **Challenge 1: Counter App** - Basic state management with useState

### Medium Level
- **Challenge 2: Todo List** - Forms, array operations, and filtering

### Hard Level
- **Challenge 3: Weather App** - API integration, async operations, and error handling

## 🎯 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ReactChallenges
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.tsx      # Main layout with navigation
├── pages/              # Main pages
│   ├── Home.tsx        # Landing page with challenge overview
│   ├── ChallengeList.tsx # List of all challenges
│   └── challenges/     # Individual challenge pages
│       ├── Challenge1.tsx
│       ├── Challenge2.tsx
│       └── Challenge3.tsx
├── App.tsx             # Main app component with routing
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## 🎓 Learning Objectives

Each challenge is designed to teach specific React concepts:

- **State Management**: Using useState and useEffect hooks
- **Event Handling**: Managing user interactions
- **Form Management**: Controlled components and validation
- **Conditional Rendering**: Dynamic UI based on state
- **Array Operations**: Working with lists and data
- **API Integration**: Fetching and handling external data
- **Error Handling**: Proper error states and user feedback

## 🤝 Contributing

Feel free to add more challenges or improve existing ones! Follow the established patterns:

1. Create a new challenge component in `src/pages/challenges/`
2. Add the route to `App.tsx`
3. Update the navigation in `Layout.tsx`
4. Include educational comments and clear requirements

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
  },
})
```
