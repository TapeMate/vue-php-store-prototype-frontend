# vue-php-store-prototype-frontend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Backlog

FRONTEND:

- refactor code
- check data in frontend realy all i need or to much
- separate components a little bit more
- outsource success login messag to own component and make own scss partial

- new feature:
  -> directly store into db

TYPO:

- cart / card check

BACKEND:

- store local cart into database
- store wishlist into database
- send order to database
- update stock amount after order
- create orders table
- create order details table
- create wishlist table
- create shoppingcart table
- create apis
- refactor code
- sanatize code

PLANNING:

1. Single Database Approach

2. Database Tables
   Users Table: Continue with your current users table, which includes user authentication data.

Products Table: This table stores product information.

Shopping Cart Table: This can be a temporary storage for user's current cart items.
Fields might include: CartID, UserID, ProductID, Quantity, DateAdded.

Wishlist Table: Similar to the shopping cart but for storing user's wishlisted items.
Fields might include: WishlistID, UserID, ProductID, DateAdded.

Orders Table: To store completed orders.
Fields might include: OrderID, UserID, OrderDate, TotalAmount, ShippingAddress, etc.

Order Details Table: To store details about each product in an order (since an order can contain multiple products).

Fields might include: OrderDetailID, OrderID, ProductID, Quantity, Price.

3. Relationships
   Users to Orders: One-to-Many (a user can have multiple orders).
   Users to Shopping Cart: One-to-One
   Users to Wishlist: One-to-One
   Orders to Order Details: One-to-Many (an order can contain multiple products).
   Products to Shopping Cart, Wishlist, Order Details: Many-to-Many (products can appear in many carts, wishlists, or orders).

4. build order

- create wishlistService.js
-
