#  Product Dashboard (React + Vitest)

A simple **Product Dashboard** built with React that dynamically displays products, applies conditional styling, and allows users to remove items from the list.

---

##  Features

*  Display a list of products dynamically
*  Conditional styling for out-of-stock products
*  Remove products from the dashboard
*  Unit tested using Vitest and Testing Library

---

## Tech Stack

*  React
*  Vite
*  Vitest
*  @testing-library/react
*  jsdom

---

##  Project Structure

```
src/
│── App.jsx
│── components/
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│── __tests__/
│   ├── indexTest.test.jsx
```

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wanja-juma/lab-product-dashboard-vite.git
cd lab-product-dashboard-vite
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Install testing dependencies (if missing)

```bash
npm install jsdom --save-dev
```

---

### 4. Run the development server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173/
```

---

### 5. Run tests

```bash
npm run test
```

For CI / grading (JUnit output):

```bash
npm run test -- --reporter=junit --outputFile=./junit.xml
```

---

##  Test Coverage

The application is tested to ensure:

*  The dashboard title renders correctly
*  All products are displayed initially
*  Out-of-stock products have conditional styling
*  Products can be removed dynamically

---

##  Key Concepts Practiced

* React component structure
* Props and state management
* Conditional rendering
* Event handling
* DOM testing with Testing Library

---

##  Notes

* Ensure product names match test expectations exactly:

  * Laptop
  * Phone
  * Tablet

* The class `outOfStockClass` must be applied to out-of-stock products for tests to pass.

---

##  Example UI

```
Product Dashboard

[Laptop]   In Stock     [Remove]
[Phone]    Out of Stock  [Remove]
[Tablet]   In Stock      [Remove]
```

---

## 👨 Author

Developed as part of a React lab exercise.

Ruth Juma

---
