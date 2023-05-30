import { Header } from "../Header";

export const ProductPage = () => {
    return ( <div>
        <Header />
  
        <h1>Nom du produit</h1>
        <p>Description du produit</p>
        <p>Prix : $XX</p>
  
  
        <button>Ajouter au panier</button>
      </div>
    );
}