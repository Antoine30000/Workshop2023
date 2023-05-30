import { useNavigate } from "react-router-dom"
import { mockData } from "../mockdata/data"

export const ProductList = () => {
    
    const navigate = useNavigate();

    const handleItemClick = (productId:number) => {
        navigate(`/product/${productId}`);
    }
    return (
        <div className="product-grid">
        {mockData.map((product) => (
          <div key={product.id} className="product-item" onClick = {() => handleItemClick(product.id)}>
            {/* <img src={product.image} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    )
}