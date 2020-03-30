import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/material-kit-react.js";
import imageStyles from "assets/jss/material-kit-react/imagesStyles";

const headerIcon = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  iconContainer: {
    background:
      "radial-gradient(closest-side, white 69%, gainsboro 70% 80%, white 80% 90%, lightgrey 100%)",
    width: "160px",
    height: "160px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate3d(0, -50%, 0)"
  },
  icon: {
    width: "70px",
    height: "70px"
  },
  profile: {
    textAlign: "center"
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imageStyles,
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title,

  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default headerIcon;
