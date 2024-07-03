# Vue E-commerce Application

## Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Architecture](#architecture)
- [Additional Information](#additional-information)

## Overview

This is A Vue.js application for an e-commerce platform where users can browse products, view details, add items to cart.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lmons/vue-ecommerce-app.git
   cd vue-mini-ecommerce
   
2. **Install dependencies:**

    ```bash
    npm install

3. **Start the development server:**

    ```bash
    npm run serve

Open your browser:

Visit http://localhost:8080 to view the application.

## Features
- **Browse and view a list of products**
- **Add products to the shopping cart**
- **View details of individual products**
- **Search products by name**
- **Filter products by category or price range**
- **Responsive design for mobile and desktop**
- **Calculate total price in the shopping cart**

## Architecture

- **The application architecture includes:**

**Components:** Vue js components for UI elements like product list, product details, filters, and shopping cart.

**State Management with Pinia:** This project utilizes Pinia for state management in Vue.js. Pinia provides a modern and lightweight alternative to Vuex.

**Routing:** Uses Vue Router for client-side routing  between product list, product details, and cart pages.

**Styling:** Bootstrap 5 for responsive design and basic styling, with additional custom CSS for specific components.

## Additional Information
Deployment: you can see live demo from this link https://lmons.github.io/vue-mini-ecommerce/