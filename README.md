# Vehicle JSON Parser & Search Web Application

### 🌐[Deployed link](https://json-table-search.vercel.app/)

This project is a web app that parses vehicle data from a JSON file and shows it in a searchable, paginated table. It has a responsive UI with advanced search features, allowing users to filter vehicles by name, model, type, manufacturer, etc.

## Features

- Users can search vehicles by name, model, type, or manufacturer, supporting both simple queries (e.g., `Sedan`) and advanced key-value queries (e.g., `model:2020 manufacturer:ford`).
- Displays data in a responsive, paginated table with sortable columns for easy navigation of large datasets.
- Global state management is handled using Redux, with efficient search and pagination logic.
- Built with Ant Design v5 for a modern UI, utilizing CSS-in-JS for automatic styling without manual CSS imports.
- Developed using Next.js (v14+), leveraging server-side rendering and dynamic imports for optimized performance.

## Technologies Used
- **Next.js**: React framework used for server-side rendering, static site generation, and routing.
- **React**: Core library for building the UI, using hooks like useEffect and useState for component logic.
- **Ant Design**: UI library providing components like Table, Layout, and Tooltip with built-in CSS-in-JS styling.
- **TailwindCSS**:  Utility-first CSS framework used for quickly styling components with pre-defined classes.
- **Redux Toolkit**: Manages global state for vehicle data, search, and pagination.
- **TypeScript**: Provides strong typing to improve code maintainability and ensures type safety for vehicle data.

## How to Run the Project

### Prerequisites:
- **Node.js** and **npm** or **yarn** installed.

### Step-by-step instructions:

1. Clone the repository:
   ```bash
   git clone https://github.com/olivemonk/json-table-search
   cd vehicle-json-parser
   ```
2. Install dependencies:
    ```bash
   npm install
   ```
3. Run the development server:
    ```bash
   npm run dev
   ```
Open your browser and navigate to http://localhost:3000 to view the application.