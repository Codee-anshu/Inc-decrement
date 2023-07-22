const initialstate=0
const changeTheNumber = (state=initialstate, action) => {
    switch (action.type) {
        case "INCREAMENT": return state + 5;
        case "DECREAMENT": return state - 5;
        default: return state;
    }
}

export default changeTheNumber;