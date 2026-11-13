# CampusMarket

A frontend-only campus marketplace where college students can browse, buy, and list pre-owned or new campus essentials.

CampusMarket is built with **HTML5, CSS3, and Vanilla JavaScript**. It does not require a backend, database, or API. Product data is provided locally, while user changes are saved in the browser using `localStorage`.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How Data Is Stored](#how-data-is-stored)
- [Application Pages](#application-pages)
- [Limitations](#limitations)
- [Future Enhancements](#future-enhancements)
- [Academic Project Details](#academic-project-details)

---

## Project Overview

Students often need affordable textbooks, electronics, stationery, clothing, sports equipment, and other college essentials. At the same time, they may have unused items they would like to sell.

CampusMarket brings these activities together in one simple marketplace. Users can browse sample listings, search and filter products, save favourites, manage a shopping cart, and create their own product listings.

This version is a **client-side demonstration project**. It simulates marketplace workflows but does not process real orders or payments.

## Objectives

1. Build an easy-to-use marketplace interface for a college community.
2. Display products with images, descriptions, prices, categories, and seller details.
3. Provide product search, category filtering, and price sorting.
4. Implement shopping cart and wishlist features.
5. Allow users to create, edit, and delete their own listings.
6. Persist selected user data between browser sessions.
7. Practice frontend development, DOM manipulation, events, and browser storage.

## Features

### Product browsing
- View predefined sample products.
- Browse products by category.
- Search by product name, category, or description.
- Sort products by price.
- Open a product details page.

### Shopping cart
- Add products to the cart.
- Increase or decrease item quantities.
- Remove products.
- Calculate the cart subtotal and total.
- Run a simulated checkout.

### Wishlist
- Add products to favourites.
- Remove products from the wishlist.
- Keep wishlist selections after refreshing the page.

### Seller listings
- Add a product with its name, category, price, condition, description, image URL, seller name, and campus location.
- View personal listings.
- Edit or delete listings.

### Student profile
- Save a demo name, email address, and college name locally.

### Responsive interface
- Layout adapts to desktop, tablet, and mobile screen sizes.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and forms |
| CSS3 | Styling, layout, and responsive design |
| Vanilla JavaScript | UI interactions and application logic |
| JavaScript objects / arrays | Predefined product data |
| `localStorage` | Persisting cart, wishlist, profile, and user listings |
| Google Fonts | Optional typography loaded by the stylesheet |
| Unsplash image URLs | Sample product photography |

> No API calls or backend services are used by the application logic. Sample images and the optional Google Font are loaded from external static URLs, so those assets require an internet connection. To make the project fully offline, download the assets and reference local files instead.

## Project Structure

```text
CampusMarket/
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── storage.js
│   └── app.js
│
├── pages/
│   ├── products.html
│   ├── product-details.html
│   ├── wishlist.html
│   ├── cart.html
│   ├── sell-product.html
│   ├── my-listings.html
│   └── profile.html
│
└── assets/
    └── images/
```

### Important JavaScript files

- `js/data.js` — contains the predefined sample product catalogue.
- `js/storage.js` — provides helpers for reading and writing browser `localStorage`.
- `js/app.js` — renders the interface and handles product, cart, wishlist, listing, and profile interactions.

## Getting Started

### Requirements

- A modern web browser (Chrome, Firefox, Edge, or Safari).
- A code editor such as Visual Studio Code.
- Optional: the Live Server extension for Visual Studio Code.

### Run locally

1. Download and extract the CampusMarket project folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html`.
4. Right-click the file and choose **Open with Live Server**, or open `index.html` directly in a browser.
5. Explore the product catalogue and try the cart, wishlist, and seller listing features.

No package installation or build command is required.

## How Data Is Stored

CampusMarket uses two kinds of client-side data:

### 1. Predefined product data

Sample products are stored in `js/data.js` as a JavaScript array of objects. You can edit this file to add, remove, or change sample products.

### 2. Browser localStorage

The application saves user changes in the browser. The current storage keys are:

| Key | Stored information |
|---|---|
| `cm_user_products` | Products created by the user |
| `cm_cart` | Cart product IDs and quantities |
| `cm_wishlist` | Favourite product IDs |
| `cm_profile` | Demo profile information |

Data is local to the browser and device. Clearing browser site data may remove it. Different users or devices do not share the same data.

## Application Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero section, popular products, and category browsing |
| Products | `pages/products.html` | Full catalogue, search, filters, and sorting |
| Product Details | `pages/product-details.html` | Product description and seller information |
| Wishlist | `pages/wishlist.html` | Saved favourite products |
| Cart | `pages/cart.html` | Cart management and price summary |
| Sell Product | `pages/sell-product.html` | Add or edit a listing |
| My Listings | `pages/my-listings.html` | Manage user-created listings |
| Profile | `pages/profile.html` | Edit demo student profile |

## Limitations

This project is intended for learning and demonstration. It does **not** provide production marketplace services.

- There is no backend or shared database.
- There is no secure account registration or authentication.
- Demo profile information is not verified.
- Listings are visible only in the browser where they were created.
- There is no real-time messaging between buyers and sellers.
- Checkout is simulated; no payment is collected and no real order is placed.
- Seller identities and product information are sample data.
- Browser `localStorage` is not suitable for storing passwords, payment details, or sensitive personal information.

## Future Enhancements

Possible improvements include:

- Add more sample products and categories.
- Add product image upload with browser-side preview.
- Add product condition and campus-location filters.
- Add pagination or infinite scrolling.
- Add a product review and rating interface using demo data.
- Add an order history page for simulated purchases.
- Add a confirmation modal before deleting a listing.
- Improve accessibility and keyboard navigation.
- Replace local storage with a backend and database if a multi-user production version is needed.

## Academic Project Details

| Item | Description |
|---|---|
| Project Name | CampusMarket |
| Project Type | Campus E-commerce Marketplace |
| Target Users | College students |
| Difficulty | Intermediate |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Not used |
| API | Not used by application logic |
| Client-side Storage | Browser `localStorage` |
| Platform | Web browser |

## Disclaimer

CampusMarket is an educational demonstration project. Product listings, student details, ratings, views, and marketplace statistics are sample content. The application is not affiliated with any actual college or marketplace and should not be used to conduct real financial transactions.

---

**Built as a frontend development college project using HTML, CSS, and JavaScript.**
