import { Header } from "../Header";

export const ProductPage = () => {

  const handleClick = () => {}


    return ( <div>
        <Header />
  
        <h1>Nom du produit</h1>
        <p>Description du produit</p>
        <button onClick={handleClick}>Echanger</button>
      </div>
    );
}