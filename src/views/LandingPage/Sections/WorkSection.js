import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Firebase from "../../../utils/Firebase";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    Firebase.firestore()
      .collection("messageMe")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        alert(
          "Thank you for submitting a message! We'll contact you as soon as possible."
        );
        setName("");
        setEmail("");
        setMessage("");
        return null;
      });
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Message Us</h2>
          <h4 className={classes.description}>
            Any questions we could help with? Please feel free to message us and
            we will get back to you as soon as possible!
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: name,
                    onChange: (e) => setName(e.target.value),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary" onClick={handleSubmit}>
                    Send Message
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
