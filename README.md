# React + Vite Template

This repository provides a minimal setup to get React working with Vite, along with Hot Module Replacement (HMR) and some basic ESLint rules for clean and consistent code.

## Features

- **Fast Development**: Powered by Vite, ensuring lightning-fast builds and HMR for a smooth development experience.
- **React Integration**: Seamless React setup with minimal configuration.
- **ESLint Support**: Pre-configured ESLint rules to help maintain code quality.
- **Choice of Plugins**:
  - `@vitejs/plugin-react`: Uses Babel for Fast Refresh.
  - `@vitejs/plugin-react-swc`: Uses SWC for Fast Refresh, offering even faster builds.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create a production-ready build:
```bash
npm run build
# or
yarn build
```
The build output will be located in the `dist` directory.

### Previewing the Build

To preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Available Scripts

- `npm run dev` / `yarn dev`: Start the development server.
- `npm run build` / `yarn build`: Build the app for production.
- `npm run preview` / `yarn preview`: Preview the production build.

## ESLint Setup

The project comes with a basic ESLint setup to maintain code quality. Run the following command to lint your files:
```bash
npm run lint
# or
yarn lint
```

## Plugin Options

You can choose between the following plugins for React integration:

1. **Babel**: Default option using `@vitejs/plugin-react`.
   ```bash
   npm install @vitejs/plugin-react
   # or
   yarn add @vitejs/plugin-react
   ```

2. **SWC**: Alternative option using `@vitejs/plugin-react-swc` for faster builds.
   ```bash
   npm install @vitejs/plugin-react-swc
   # or
   yarn add @vitejs/plugin-react-swc
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the existing style guide.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉
