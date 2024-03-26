const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};
const searchProducts = (products, search) => {
  if (!search) return products;
  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  return filterProducts;
};
const categProducts = (products, categ) => {
  if (!categ) return products;
  const categFilter = products.filter((item) => item.category === categ);
  return categFilter;
};
const creatQuery = (query, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = query;
    return rest;
  }
  if (newQuery.categ === "all") {
    const { categ, ...rest } = query;
    return rest;
  }
  return { ...query, ...newQuery };
};
const getInitialsQuery = (serachParams) => {
  const refQuery = {};
  const srch = serachParams.get("search");
  const ctg = serachParams.get("categ");
  if (srch) refQuery.search = srch;
  if (ctg) refQuery.categ = ctg;
  return refQuery;
};
const sumProducts = (prd) => {
  const itemCunter = prd.reduce(
    (cunter, qunt) => cunter + qunt.quntity,
    0
  );
  const itemTotal = prd.reduce(
    (cunter, total) => cunter + total.price * total.quntity,
    0
  );
  return {itemCunter , itemTotal}
};
const quntityProduct = (state , id) => {
  const index = state.selectedItems.findIndex(item => item.id === id);
  if(index === -1){
    return 0
  }
  else{
    return state.selectedItems[index].quntity;
  }
}
export {
  shortenText,
  searchProducts,
  categProducts,
  creatQuery,
  getInitialsQuery,
  sumProducts,
  quntityProduct
};
