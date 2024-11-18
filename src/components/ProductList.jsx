import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired, // Array of product objects
    addToCart: PropTypes.func.isRequired,
};

export default ProductList;