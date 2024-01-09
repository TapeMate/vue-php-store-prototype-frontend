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

BUG: item Remove removes all items with the same item id
-> solution stack items with same id in same product just edit order amount
-> make order amount changeable

- Data in SQL import with Adress data
- delete dummy data
- not in signup form
- login success message
- on cart if no user is logged in, display login instead
- hide Delivery details if no user is logged in
- make delivery adress changeable
- make amount on cart items changeable depending on stock amount

- refactor code
- check data in frontend realy all i need or to much
- components a little bit more

- new feature:
  -> if product out of stock add to wish list
  -> new bar at top with hearth icon
  -> directly store into db

BACKEND:

- store local cart into order database
- create order database
- create api for order data transfer
- refactor code
- sanatize code
