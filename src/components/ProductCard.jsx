import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center', margin: '10px' }}>
            <div style={{ width: '100%', height: '150px', backgroundColor: '#eee', marginBottom: '10px' }}>450 x 300</div>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;