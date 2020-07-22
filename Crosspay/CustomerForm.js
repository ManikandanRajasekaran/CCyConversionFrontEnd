import React from "react";
import Grid from "@material-ui/core/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useStyles } from "./StyledComponent";
import axios from "axios";
import { errorMessage } from "./ErrorUtils";
import { saveData } from "./action";
import { connect } from "react-redux";
import {AppBar,Toolbar,Typography,FormControl,Button,IconButton,Stepper,Step,StepLabel,CssBaseline,Paper,InputLabel,Select,MenuItem} from '@material-ui/core';
import {Menu} from '@material-ui/icons'
const steps = ["Customer Details", "Summary Page"];

var toAmount = "";
function CustomerForm(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute"  className={classes.appBar}>
                <Toolbar>
                    <IconButton color='inherit' edge='start' aria-label= 'menu'>
                        <Menu/>
                    </IconButton>
                    <Typography variant="h4">
                        Cross Pay - Currency Conversion
          </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper1}>
                    <Typography component="h1" variant="h4" align="center">
                        Transaction Details
          </Typography>
                    <Stepper activeStep={1} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <ValidatorForm onSubmit={props.handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    margin="normal"
                                    fullWidth
                                    id="custname"
                                    label="Customer Name"
                                    name="custname"
                                    autoFocus
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    value={props.custname}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    margin="normal"
                                    fullWidth
                                    id="custemail"
                                    label="Customer Email"
                                    name="custemail"
                                    value={props.custemail}
                                    onChange={props.handleChange}
                                    type="Email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    margin="normal"
                                    fullWidth
                                    id="sendermobno"
                                    label="Customer Mobile Number"
                                    name="sendermobno"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    value={props.sendermobno}
                                    onChange={props.handleChange}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    margin="normal"
                                    fullWidth
                                    id="benemobile"
                                    label="Beneficiary Mobile Number"
                                    name="benemobile"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    value={props.benemobile}
                                    onChange={props.handleChange}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label">
                                        From Country
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="countrycode"
                                        name="countrycode"
                                        value={props.countrycode}
                                        onChange={props.handleChange}
                                        defaultValue={"UK"}
                                    >
                                        <MenuItem value="BH">Bahrain</MenuItem>
                                        <MenuItem value="IN">India</MenuItem>
                                        <MenuItem value="KW">Kuwait</MenuItem>
                                        <MenuItem value="OM">Oman</MenuItem>
                                        <MenuItem value="PK">Pakistan</MenuItem>
                                        <MenuItem value="QA">Qatar</MenuItem>
                                        <MenuItem value="SA">Saudi Arabia</MenuItem>
                                        <MenuItem value="AE">United Arab Emirates</MenuItem>
                                        <MenuItem value="US">United States</MenuItem>
                                        <MenuItem value="UK">United Kingdom</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label">
                                        From Currency
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="ccycode"
                                        name="ccycode"
                                        value={props.ccycode}
                                        onChange={props.handleChange}
                                        defaultValue={"GBP"}
                                        disabled={true}
                                    >
                                        <MenuItem value="BHD">BHD</MenuItem>
                                        <MenuItem value="INR">INR</MenuItem>
                                        <MenuItem value="KWD">KWD</MenuItem>
                                        <MenuItem value="OMR">OMR</MenuItem>
                                        <MenuItem value="PKR">PKR</MenuItem>
                                        <MenuItem value="QAR">QAR</MenuItem>
                                        <MenuItem value="SAR">SAR</MenuItem>
                                        <MenuItem value="AED">AED</MenuItem>
                                        <MenuItem value="USD">USD</MenuItem>
                                        <MenuItem value="GBP">GBP</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label">
                                        To Country
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="tocountrycode"
                                        name="tocountrycode"
                                        value={props.tocountrycode}
                                        onChange={props.handleChange}
                                        defaultValue={"IN"}
                                    >
                                        <MenuItem value="BH">Bahrain</MenuItem>
                                        <MenuItem value="IN">India</MenuItem>
                                        <MenuItem value="KW">Kuwait</MenuItem>
                                        <MenuItem value="OM">Oman</MenuItem>
                                        <MenuItem value="PK">Pakistan</MenuItem>
                                        <MenuItem value="QA">Qatar</MenuItem>
                                        <MenuItem value="SA">Saudi Arabia</MenuItem>
                                        <MenuItem value="AE">United Arab Emirates</MenuItem>
                                        <MenuItem value="US">United States</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label">
                                        To Currency
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="toccycode"
                                        name="toccycode"
                                        value={props.toccycode}
                                        onChange={props.handleChange}
                                        defaultValue={"INR"}
                                        disabled={true}
                                    >
                                        <MenuItem value="BHD">BHD</MenuItem>
                                        <MenuItem value="INR">INR</MenuItem>
                                        <MenuItem value="KWD">KWD</MenuItem>
                                        <MenuItem value="OMR">OMR</MenuItem>
                                        <MenuItem value="PKR">PKR</MenuItem>
                                        <MenuItem value="QAR">QAR</MenuItem>
                                        <MenuItem value="SAR">SAR</MenuItem>
                                        <MenuItem value="AED">AED</MenuItem>
                                        <MenuItem value="USD">USD</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    margin="normal"
                                    fullWidth
                                    id="rate"
                                    label="Rate For Conversion"
                                    name="rate"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    value={props.rate}
                                    onChange={props.handleChange}
                                    //onBlur={props.checkMobileNo}
                                    type="number"
                                />
                            </Grid>

                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Next Page
            </Button>
                    </ValidatorForm>
                </Paper>
            </main>
        </React.Fragment>
    );
}

class Customer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { countrycode: "", custname: "", benemobile: "", sendermobno: "", ccycode: "", rate: "", toccycode: "", tocountrycode: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    state = {
        appState: 0,
        custname: "",
        benemobile: "",
        custemail: "",
        sendermobno: "",
        countrycode: "",
        ccycode: "",
        rate: "",
        tocountrycode: "",
        toccycode: "",
        toAmount: ""

    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === "countrycode") {

            if (e.target.value === "AE") {
                this.setState({ ccycode: "AED" });
            } else if (e.target.value === "IN") {
                this.setState({ ccycode: "INR" });
            } else if (e.target.value === "PK") {
                this.setState({ ccycode: "PKR" });
            } else if (e.target.value === "US") {
                this.setState({ ccycode: "USD" });
            } else if (e.target.value === "BH") {
                this.setState({ ccycode: "BHD" });
            } else if (e.target.value === "KW") {
                this.setState({ ccycode: "KWD" });
            } else if (e.target.value === "OM") {
                this.setState({ ccycode: "OMR" });
            } else if (e.target.value === "QA") {
                this.setState({ ccycode: "QAR" });
            } else if (e.target.value === "SA") {
                this.setState({ ccycode: "SAR" });
            } else if (e.target.value === "UK") {
                this.setState({ ccycode: "GBP" });
            }
        }
        if (e.target.name === "tocountrycode") {

            if (e.target.value === "AE") {
                this.setState({ toccycode: "AED" });
            } else if (e.target.value === "IN") {
                this.setState({ toccycode: "INR" });
            } else if (e.target.value === "PK") {
                this.setState({ toccycode: "PKR" });
            } else if (e.target.value === "US") {
                this.setState({ toccycode: "USD" });
            } else if (e.target.value === "BH") {
                this.setState({ toccycode: "BHD" });
            } else if (e.target.value === "KW") {
                this.setState({ toccycode: "KWD" });
            } else if (e.target.value === "OM") {
                this.setState({ toccycode: "OMR" });
            } else if (e.target.value === "QA") {
                this.setState({ toccycode: "QAR" });
            } else if (e.target.value === "SA") {
                this.setState({ toccycode: "SAR" });
            }
        }
    };

    handleSubmit = e => {
        axios.post(`http://localhost:8080/convert/`, {
            fromCurrency: this.state.ccycode,
            fromAmount: this.state.rate,
            toCurrency: this.state.toccycode
        }).then(response => {
            toAmount = response.data.toAmount;
            this.setState({ toAmount: toAmount });
            if (response.data !== null && response.data !== "") {
                //this.setState{(toAmount:`response.data.toAmount`)}
                this.props.saveData(this.state, this.props);
            } else {
                errorMessage("Mapping doesn't exist");
            }
        });
    };
    componentDidMount() {
        this.setState({ countrycode: "UK" });
        this.setState({ ccycode: "GBP" });
        this.setState({ tocountrycode: "IN" });
        this.setState({ toccycode: "INR" });
    }

    render() {
        return (
            <>
                <CustomerForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    ccycode={this.state.ccycode}
                    countrycode={this.countrycode}
                    checkMobileNo={this.checkMobileNo}
                />
            </>
        );
    }
}


export default connect(null, { saveData })(Customer);