import { useState } from "react";
import { Product } from "../../interfaces/product";
import ProductCard from "../ProductCard/ProductCard";

function ProductWrapper() {
    const [products, setProducts] = useState<Product[]>([
        {
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            image: '/images/coffees/Expresso.svg'
        },
        {
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            image: '/images/coffees/Expresso.svg'
        },
        {
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            image: '/images/coffees/Expresso.svg'
        },
        {
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            image: '/images/coffees/Expresso.svg'
        },
        {
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            image: '/images/coffees/Expresso.svg'
        },
    ]);


    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-base-subtittle text-3xl">Nossos Lanches</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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