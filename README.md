# Healthcare Services Management App

This is a simple React application for managing healthcare services. Users can add, update, and delete healthcare services, each having a name, description, and price. The app is styled using TailwindCSS.

## Features

- **Service List**: Displays a list of healthcare services.
- **Add New Service**: Allows users to add new services.
- **Update Service**: Edit existing services.
- **Delete Service**: Remove services from the list.
- **Form Validation**: Ensures all fields are filled before submitting.

## Technologies Used

- React (Frontend)
- TailwindCSS (Styling)

---

## Installation and Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/healthcare-services-app.git

-->Navigate into the project directory:

cd healthcare-services-app

-->Install the dependencies:

npm install

-->Start the application:

npm start

###to initiate the TailwindCSS : 

-->npm install -D tailwindcss
-->npx tailwindcss init

------------------------------------------------

-->IN THE tailwind.config.js edit the following 

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
  
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  
  theme: {
  
    extend: {},
    
  },
  
  plugins: [],
}

------------------------------------------------

-->Add these in the index.css

@tailwind base;
@tailwind components;
@tailwind utilities;











