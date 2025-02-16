const initialState = { cart: {} };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: (state.cart[action.payload.id] || 0) + 1
                }
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: Math.max((state.cart[action.payload.id] || 0) - 1, 0)
                }
            };
        default:
            return state;
    }
};

export default cartReducer;
