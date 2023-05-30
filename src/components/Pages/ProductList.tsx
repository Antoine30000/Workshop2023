import { mockData } from "../mockdata/data"

export const ProductList = () => {
    return (
        <div>
        {mockData.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    )
}