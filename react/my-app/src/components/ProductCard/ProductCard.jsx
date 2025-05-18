import Button from "react-bootstrap/Button";
function ProductCard(props) {
  const thisNew ="dfskhsdlf"
  console.log(props);
  // props.products.name = "this is test"

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <h1>{props.products.name}</h1>
      <p>{props.products.description}</p>
      <p>{props.products.price}</p>
    </>
  );
}

export default ProductCard;
