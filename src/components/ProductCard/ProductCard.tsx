import { Product } from "../../interfaces/product";
import CartIcon from '../../assets/icons/shopping-cart-fill.svg'

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <div aria-label="product-info">
                <h2>{product.name}</h2>
            </div>
            <div aria-label="cart-actions">
                <p>{product.price}</p>
                <div aria-label="cart-actions">
                    <div>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    <button><img src={CartIcon} /></button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;