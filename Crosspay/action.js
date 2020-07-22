export const SAVE = "SAVE";


export const saveData = (state, props) => dispatch => {

  dispatch({
    type: SAVE,
    custname: state.custname,
    custemail: state.custemail,
    sendermobno: state.sendermobno,
    benemobile: state.benemobile,
    rate: state.rate,
    tocountrycode: state.tocountrycode,
    toccycode: state.toccycode,
    countrycode: state.countrycode,
    ccycode: state.ccycode,
    toAmount: state.toAmount
  });

  props.history.push("/custtransaction");
};