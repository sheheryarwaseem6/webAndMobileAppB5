import ProductCard from "../ProductCard/ProductCard";

function HomeScreen() {
    const products =[
        {
            id:1,
            name: "Product 1",
            price: 100,
            description: "This is the first product",
        },
        {
            id:2,
            name: "Product 2",
            price: 200,
            description: "This is the second product",
        },
        {
            id:3,
            name: "Product 3",
            price: 300,
            description: "This is the third product",
        },
        {
            id:4,
            name: "Product 4",
            price: 400,
            description: "This is the fourth product",
        },
        {
            id:5,
            name: "Product 5",
            price: 500,
            description: "This is the fifth product",
        },
        {
            id:6,
            name: "Product 6",
            price: 600,
            description: "This is the sixth product",
        },
        {
            id:7,
            name: "Product 7",
            price: 700,
            description: "This is the seventh product",
        },
    ]
  return (
    <>
        {products.map(product=> <ProductCard products={product}/>)}
        {/* <ProductCard products={products[0]}/>
        <ProductCard products={products[1]}/>
        <ProductCard products={products[2]}/>
        <ProductCard products={products[3]}/>
        <ProductCard products={products[4]}/>
        <ProductCard products={products[5]}/>
        <ProductCard products={products[6]}/> */}
    </>
  );
}

export default HomeScreen;
