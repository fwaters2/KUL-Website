import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "assets/jss/material-kit-react/components/iconHeader.js";

const useStyles = makeStyles(styles);
export default function IconHeader(props) {
  const classes = useStyles();
  const iconWrapper = classNames(classes.imgRaised, classes.imgRoundedCircle, {
    [classes.iconContainer]: true,
    [classes.primary]: true
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.primary]: true
  });
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <div className={classes.profile}>
          <div className={iconWrapper}>
            <props.icon className={iconClasses} />
          </div>
          <div className={classes.name}>
            <h3 className={classes.title}>{props.title}</h3>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
}

IconHeader.defaultProps = {
  iconColor: "primary"
};

IconHeader.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,

  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};
