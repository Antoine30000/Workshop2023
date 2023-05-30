import { Header } from "../Header"
import { ProductList } from "./ProductList"

export const Homepage  = () => {
    return (
        <div className="">
            <Header />
            <h1>Bienvenue sur notre site e-commerce !</h1>
            <p>Découvrez notre large sélection de produits.</p>
            <ProductList />
        </div>
    )
}