import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

function SearchInput() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = await result.json();
      setProducts(data.products);
    }
    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchResults products={products} />
    </div>
  );
}

export default SearchInput;
