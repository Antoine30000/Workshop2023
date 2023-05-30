import { Header } from "../Header";

export const ProductPage = () => {

  
  const navigate = useNavigate();

   const handleNopeClick = () => {
    
   };

   
   const handleYesClick = () => {
    
   };



    return ( <div>
        <Header />
  
        <h1>Nom du produit</h1>
        <p>Description du produit</p>
        <button>Echanger</button>
        <div className="flex">
          <button onClick={handleNopeClick}></button>
          <button onClick={handleYesClick}></button>
        </div>
      </div>
    );
}