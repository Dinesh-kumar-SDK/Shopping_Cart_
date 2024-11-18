import PropTypes from 'prop-types';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            {cartItems.length === 0 ? (
                <p></p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} style={{ marginBottom: '10px' }}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button style={{ marginLeft: '10px' }} onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired, // Array of cart item objects
    removeFromCart: PropTypes.func.isRequired,
};

export default Cart;