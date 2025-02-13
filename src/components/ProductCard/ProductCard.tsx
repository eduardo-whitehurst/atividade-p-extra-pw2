import { Product } from "../../interfaces/product";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex flex-col items-center justify-between p-4 gap-6 border border-gray-200 rounded-tl-lg rounded-tr-[2rem] rounded-br-lg rounded-bl-[2rem] bg-base-card">
            <img src={product.image} alt={product.name} />
            <div aria-label="product-info" className=" flex flex-col items-center text-center">
                <h2 className="text-base-subtittle">{product.name}</h2>
                <p className="text-base-label text-sm">{product.description}</p>
            </div>
            <div aria-label="cart-actions" className="flex flex-row items-center justify-between gap-2">
                <p className="text-base-text text-xl">R$ {product.price}</p>
                <div aria-label="cart-actions" className="flex flex-row items-center justify-between gap-2 h-6">
                    <div className="flex items-center justify-around border border-gray-200 rounded-lg w-16 h-8 bg-base-button">
                        <button>-</button>
                            <p>1</p>
                        <button>+</button>
                    </div>
                    <button className="border border-gray-200 rounded-lg p-1 bg-purple-dark"><img src='/icons/shopping-cart-fill.svg' className="w-6 h-6"/></button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;