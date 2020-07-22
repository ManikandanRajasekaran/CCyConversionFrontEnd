import { SAVE } from "./action";

const initialState = {
    custname: "",
    custemail: "",
    sendermobno: "",
    benemobile: "",
    rate: "",
    tocountrycode: "",
    toccycode: "",
    countrycode: "",
    ccycode: "",
    toAmount: ""
};


const CustomerFormReducer = (state = initialState, action) => {

    console.log("mani inside reducer toAmount", action.toAmount);
    switch (action.type) {

        case SAVE:
            return {
                ...state, custname: action.custname, custemail: action.custemail, sendermobno: action.sendermobno,
                benemobile: action.benemobile,
                rate: action.rate, tocountrycode: action.tocountrycode, toccycode: action.toccycode,
                countrycode: action.countrycode, ccycode: action.ccycode, toAmount: action.toAmount
            }
        default:
            return { ...state };
    }
};

export default CustomerFormReducer