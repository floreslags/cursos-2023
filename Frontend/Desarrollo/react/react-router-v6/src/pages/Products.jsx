import { Link } from "react-router-dom"

export const Products = ({products}) => {

  return (
    <div>
        <section>
            <h2>Products</h2>
            <ul>
                {products.map((product)=>
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>)}
            </ul>
        </section>
    </div>
  )
}
