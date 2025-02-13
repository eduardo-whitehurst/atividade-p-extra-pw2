import { useState } from "react";
import { Product } from "../../interfaces/product";
import ProductCard from "../ProductCard/ProductCard";

function ProductWrapper() {
    const [products, setProducts] = useState<Product[]>([
        {
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            image: '../../assets/images/expresso.svg'
        }
    ]);

    

    return ( 
        <section>
            <h2>Nossos Lanches</h2>
            <div>
                {
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }
            </div>
        </section>
     );
}

export default ProductWrapper;