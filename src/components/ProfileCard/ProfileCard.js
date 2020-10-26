import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function ProfileCard(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        <img src={props.photo} alt="..." className={imageClasses} />
      </GridItem>
      <h4 className={classes.cardTitle}>
        {props.name}
        <br />
        <small className={classes.smallTitle}>{props.subheader}</small>
      </h4>
      <CardBody>
        <p className={classes.description}>{props.description}</p>
      </CardBody>
      <CardFooter className={classes.justifyCenter}>
        {props.facebook === null ? null : (
          <Button
            justIcon
            color="transparent"
            className={classes.margin5}
            href={props.facebook}
            target="_blank"
          >
            <i className={classes.socials + " fab fa-facebook"} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

ProfileCard.defaultProps = {
  photo: "",
  facebook: null
};

ProfileCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  description: PropTypes.string.isRequired,
  facebook: PropTypes.string
};
