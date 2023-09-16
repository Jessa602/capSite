const BASE_URL = `https://fakestoreapi.com`;
const PRODUCTS_URL = `${BASE_URL}/products`;
const CART_URL = `${BASE_URL}/carts`;
const USERS_URL = `${BASE_URL}/users`;
const LOGIN_URL = `${BASE_URL}/auth/login`;

///All Products
export const getProducts = async () => {
  const response = await fetch(PRODUCTS_URL);
  const products = await response.json();
  return products;
};

///Single Product
export const getProduct = async (id) => {
  const response = await fetch(`${PRODUCTS_URL}/${id}`);
  const product = await response.json();
  return product;
};

///Sort results descending
export const sortProductsDesc = async (sort) => {
  const response = await fetch(`${PRODUCTS_URL}?sort=desc/${sort}`);
  const products = await response.json();
  return products;
};

///Sort results ascending
export const sortProductsAsc = async (sort) => {
  const response = await fetch(`${PRODUCTS_URL}?sort=asc/${sort}`);
  const products = await response.json();
  return products;
};

///All categories
export const getCategories = async () => {
  const response = await fetch(`${PRODUCTS_URL}/categories`);
  const categories = await response.json();
  return categories;
};

///Single category
export const getCategory = async (category) => {
  const response = await fetch(`${PRODUCTS_URL}/category/${category}`);
  const products = await response.json();
  return products;
};

///All carts
export const getCarts = async () => {
  const response = await fetch(CART_URL);
  const carts = await response.json();
  return carts;
};

///Single cart
export const getCart = async (id) => {
  const response = await fetch(`${CART_URL}/${id}`);
  const cart = await response.json();
  return cart;
};

///Sort carts descending
export const sortCartsDesc = async (sort) => {
  const response = await fetch(`${CART_URL}?sort=desc/${sort}`);
  const carts = await response.json();
  return carts;
};

///Sort carts ascending
export const sortCartsAsc = async (sort) => {
  const response = await fetch(`${CART_URL}?sort=asc/${sort}`);
  const carts = await response.json();
  return carts;
};

///Get carts by date range
export const getCartsByDate = async (date) => {
  const response = await fetch(`${CART_URL}?startdate=${date}`);
  const carts = await response.json();
  return carts;
};

///Get user Cart
export const getUserCart = async (id) => {
  const response = await fetch(`${CART_URL}/user/${id}`);
  const cart = await response.json();
  return cart;
};

///Add to cart
export const addToCart = async (id, product) => {
  const response = await fetch(`${CART_URL}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const cart = await response.json();
  return cart;
};

///Update cart
export const updateCart = async (id, product) => {
  const response = await fetch(`${CART_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const cart = await response.json();
  return cart;
};

///Delete cart
export const deleteCart = async (id) => {
  const response = await fetch(`${CART_URL}/${id}`, {
    method: "DELETE",
  });
  const cart = await response.json();
  return cart;
};

///All users
export const getUsers = async () => {
  const response = await fetch(USERS_URL);
  const users = await response.json();
  return users;
};

///Single user
export const getUser = async (id) => {
  const response = await fetch(`${USERS_URL}/${id}`);
  const user = await response.json();
  return user;
};

///New user
export const createUser = async (user) => {
  const response = await fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const newUser = await response.json();
  return newUser;
};

///Update user
export const updateUser = async (id, user) => {
  const response = await fetch(`${USERS_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const updatedUser = await response.json();
  return updatedUser;
};

///Delete user
export const deleteUser = async (id) => {
  const response = await fetch(`${USERS_URL}/${id}`, {
    method: "DELETE",
  });
  const deletedUser = await response.json();
  return deletedUser;
};

///Login
export const login = async (user) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const loggedInUser = await response.json();
  return loggedInUser;
};

///Logout
export const logout = async (user) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const loggedOutUser = await response.json();
  return loggedOutUser;
};

export default {
  getProducts,
  getProduct,
  sortProductsDesc,
  sortProductsAsc,
  getCategories,
  getCategory,
  getCarts,
  getCart,
  sortCartsDesc,
  sortCartsAsc,
  getCartsByDate,
  getUserCart,
  addToCart,
  updateCart,
  deleteCart,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  logout,
};
