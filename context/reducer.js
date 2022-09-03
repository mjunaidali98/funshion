export const initalState = {
    screen: "login"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SCREEN": return { ...state, screen: action.payload };
        default: return { ...state };
    }
}