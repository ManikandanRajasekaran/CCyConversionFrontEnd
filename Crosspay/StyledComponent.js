import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper1: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
	padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  paper2: {
	marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
	padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    },
	marginLeft: theme.spacing(65),
	width: 500
  },
  avatarLogin: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  avatarSelect: {
    margin: theme.spacing(1),
    backgroundColor: "green"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  footerAlign: {
    position: "fixed",
    bottom: 0,
    width: "100%"
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
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    margin: 0
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  appBar: {
    position: "relative"
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  appBar: {
    position: 'relative',
}
}));
