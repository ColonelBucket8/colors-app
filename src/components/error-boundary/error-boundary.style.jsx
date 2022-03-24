import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "60vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "inline-block",
    backgroundImage: (props) => `url(${props.imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "40vw",
    height: "40vh",
  },
  imageText: {
    fontSize: "28px",
    color: "#2f8e89",
  },
});

export default useStyles;
