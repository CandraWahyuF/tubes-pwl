import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.success.main,
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>konten</Container>;
};

export default Leftbar;
