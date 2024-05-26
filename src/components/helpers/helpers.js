const searchProduct = (product, search) => {
  if (!search) return product;

  const searchedProduct = product.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  return searchedProduct;
};

const filterProduct = (product, category) => {
  if (!category) return product;

  const filteredProduct = product.filter((item) => item.category === category);
  return filteredProduct;
};

const createQuery = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...everything } = currentQuery;
    return everything;
  }

  if (newQuery.search === "") {
    const { search, ...everything } = currentQuery;
    return everything;
  }

  return {
    ...currentQuery,
    ...newQuery,
  };
};

const getQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};

const sumProducts = (product) => {
  const itemsCounter = product.reduce((acc, cur) => acc + cur.quantity, 0);

  const totalPrice = product
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return {
    itemsCounter,
    totalPrice,
  };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  searchProduct,
  filterProduct,
  createQuery,
  getQuery,
  sumProducts,
  productQuantity,
};
