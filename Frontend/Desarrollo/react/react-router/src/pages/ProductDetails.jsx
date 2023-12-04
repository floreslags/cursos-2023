import { useParams,useNavigate } from "react-router-dom";

export const ProductDetails = ({products}) => {
    // console.log(useParams());

    const handleGoBack = ()=>{
        navigate(-1);
    }

    const navigate = useNavigate();
    const {id} = useParams();

    const product = products.find(product => product.id.toString() === id);


  return (
    <div>
        <section>
            <h2>Product Details</h2>
            <h3>{product.name}</h3>
            <h4>{product.id}</h4>
            <h4>${product.price}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </section>
    </div>
  )
}
