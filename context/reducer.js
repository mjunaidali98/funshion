export const initalState = {
    screen: "login",
    timeLeft: null,
    popularProducts: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SCREEN": return { ...state, screen: action.payload };
        case "SET_DISCOUNT_END_DATE": return { ...state, timeLeft: action.payload };
        case "SET_POPULAR": {
            return { ...state, popularProducts: action.payload };
        }
        default: return { ...state };
    }
}