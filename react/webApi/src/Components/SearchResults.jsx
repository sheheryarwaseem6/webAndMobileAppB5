function SearchResults({products}) {
    return (
        <div>
            {products.map((product, i)=>{
                return(
                    <h1>{product.title}</h1>
                )
            })}
        </div>
    )
}

export default SearchResults;
