import React from "react";
import Grid from "@material-ui/core/Grid";
import {Typography,makeStyles,CssBaseline,Paper,Stepper,Step,StepLabel} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  alignText: {
    marginTop: 20
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    marginTop: 20
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper1: {
    position: "absolute",
    width: 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 40, 3, 3)
  },
  paper2: {
    width: 100,
    height: 100
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    top:"50%",
    left: "40%"
  }
}));



var custname = "";
var custemail = "";
var sendermobno = "";
var benemobile = "";
var rate = "";
var tocountrycode = "";
var toccycode = "";
var countrycode = "";
var ccycode = "";
var toAmount = "";
const steps = ["Customer Details", "Transaction Page"];
function CustTxn(props) {

  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Transaction Details
          </Typography>
          <Stepper activeStep={2} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <ValidatorForm >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="custname"
                    label="Customer Name"
                    name="custname"
                    value={custname}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="custemail"
                    label="Customer Email"
                    name="custemail"
                    value={custemail}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="sendermobno"
                    label="Customer Mobile Number"
                    name="sendermobno"
                    value={sendermobno}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="benemobile"
                    label="Beneficiary Mobile Number"
                    name="benemobile"
                    value={benemobile}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="countrycode"
                    label="From Country Code"
                    name="countrycode"
                    value={countrycode}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="ccycode"
                    label="From Currency Code"
                    name="ccycode"
                    value={ccycode}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="tocountrycode"
                    label="To Country Code"
                    name="tocountrycode"
                    value={tocountrycode}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="toccycode"
                    label="To Currency Code"
                    name="toccycode"
                    value={toccycode}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="rate"
                    label="Rate For Conversion"
                    name="rate"
                    value={rate}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    margin="normal"
                    fullWidth
                    id="toAmount"
                    label="Converted Rate"
                    name="toAmount"
                    value={toAmount}
                    disabled={true}
                  />
                </Grid>
                <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/"
                            className={classes.submit}
                            
                        >
                            Home Page
            </Button>
              </Grid>
            </ValidatorForm>
          </React.Fragment>
        </Paper>
      </main>

    </React.Fragment>
  );
}
class CustomerTxn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { custname: "" };
    this.state = { custemail: "" };
    this.state = { benemobile: "" };
    this.state = { sendermobno: "" };
    this.state = { rate: "" };
    this.state = { tocountrycode: "" };
    this.state = { toccycode: "" };
    this.state = { countrycode: "" };
    this.state = { ccycode: "" };
    this.state = { toAmount: ""};

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  state = {
    custname: "",
    custemail: "",
    benemobile: "",
    sendermobno: "",
    rate: "",
    tocountrycode: "",
    toccycode: "",
    countrycode: "",
    ccycode: "",
    toAmount: ""
  }
  componentDidMount() {
    custname = this.props.custname;
    custemail = this.props.custemail;
    sendermobno = this.props.sendermobno;
    benemobile = this.props.benemobile;
    rate = this.props.rate;
    if (this.props.tocountrycode === "AE") {
      tocountrycode = "United Arab Emirates";
    } else if (this.props.tocountrycode === "IN") {
      tocountrycode = "India";
    } else if (this.props.tocountrycode === "PK") {
      tocountrycode = "Pakistan";
    } else if (this.props.tocountrycode === "US") {
      tocountrycode = "United States";
    } else if (this.props.tocountrycode === "BH") {
      tocountrycode = "Bahrain";
    } else if (this.props.tocountrycode === "KW") {
      tocountrycode = "Kuwait";
    } else if (this.props.tocountrycode === "OM") {
      tocountrycode = "Oman";
    } else if (this.props.tocountrycode === "QA") {
      tocountrycode = "Qatar";
    } else if (this.props.tocountrycode === "SA") {
      tocountrycode = "Saudi Arabia";
    }

    if (this.props.countrycode === "AE") {
      countrycode = "United Arab Emirates";
    } else if (this.props.countrycode === "IN") {
      countrycode = "India";
    } else if (this.props.countrycode === "PK") {
      countrycode = "Pakistan";
    } else if (this.props.countrycode === "US") {
      countrycode = "United States";
    } else if (this.props.countrycode === "BH") {
      countrycode = "Bahrain";
    } else if (this.props.countrycode === "KW") {
      countrycode = "Kuwait";
    } else if (this.props.countrycode === "OM") {
      countrycode = "Oman";
    } else if (this.props.countrycode === "QA") {
      countrycode = "Qatar";
    } else if (this.props.countrycode === "SA") {
      countrycode = "Saudi Arabia";
    }else if (this.props.countrycode === "UK") {
      countrycode = "United Kingdom";
    }

    toccycode = this.props.toccycode;
    ccycode = this.props.ccycode;
    toAmount = this.props.toAmount;
    console.log("Value inside toAmount in Customer Transaction**** "+toAmount);
    this.setState({ custname: custname });
    this.setState({ custemail: custemail });
    this.setState({ sendermobno: sendermobno });
    this.setState({ benemobile: benemobile });
    this.setState({ rate: rate });
    this.setState({ tocountrycode: tocountrycode });
    this.setState({ toccycode: toccycode });
    this.setState({ countrycode: countrycode });
    this.setState({ ccycode: ccycode });
    this.setState({ toAmount: toAmount });
    

  }
  render() {
    return (
      <>
        <CustTxn
          {...this.state}
          custname={this.state.custname}
          custemail={this.state.custemail}
          benemobile={this.state.benemobile}
          sendermobno={this.state.sendermobno}
          rate={this.state.rate}
          tocountrycode={this.state.tocountrycode}
          toccycode={this.state.toccycode}
          countrycode={this.state.countrycode}
          ccycode={this.state.ccycode}
          toAmount = {this.state.toAmount}
        />
      </>
    );
  }
}



const mapStateToProps = state => ({
  custname: state.txndata.custname,
  custemail: state.txndata.custemail,
  sendermobno: state.txndata.sendermobno,
  benemobile: state.txndata.benemobile,
  rate: state.txndata.rate,
  tocountrycode: state.txndata.tocountrycode,
  toccycode: state.txndata.toccycode,
  countrycode: state.txndata.countrycode,
  ccycode: state.txndata.ccycode,
  toAmount: state.txndata.toAmount
});

export default connect(mapStateToProps)(CustomerTxn);