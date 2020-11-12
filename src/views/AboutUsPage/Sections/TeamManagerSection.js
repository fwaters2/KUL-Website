import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import eric from "assets/img/faces/Eric.jpg";
import joe from "assets/img/faces/Joe.jpg";
import john from "assets/img/faces/John.jpg";
import julia from "assets/img/faces/Julia.jpg";
import lucas from "assets/img/faces/Lucas.jpg";
import mike from "assets/img/faces/Mike.jpg";
import tim from "assets/img/faces/Tim.jpg";
import ProfileCard from "components/ProfileCard/ProfileCard";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  const managerData = [
    {
      name: "Eric Lai",
      photo: eric,
      subheader: "Killa Bees",
      description:
        "Eric has been playing competetive ultimate since 2016 after he was introduce to the sport by a high school friend. He is looking forward to more Ultimate in Kaohsiung and hopes to share his knowledge with new players!",
      facebook: "https://www.facebook.com/eric.lai.378",
    },
    // {
    //   name: "Hannah Gilbert",
    //   photo: hannah,
    //   subheader: "Discos",
    //   description:
    //     "Another first time manager, Hannah is looking to forward to leading a fun team that learns to be effective on the field and enjoys playing together!",
    //   facebook: "https://www.facebook.com/hannah.gilbert.370",
    // },
    {
      name: "Joe Maher",
      photo: joe,
      subheader: "Mighty Hucks",
      description:
        "Stepping in for Tim Zabinski (founder of Mighty Hucks), first time manager, Joe is bringing his leadership expertise from the his success at organizing American Football here in Kaohsiung!",
      facebook: "https://www.facebook.com/joe.maher.543",
    },
    {
      name: "John Kearle",
      photo: john,
      subheader: "Discl3xia",
      description:
        "John has been playing just shy of a year and is looking forward to captaining his first team to learn new things and have fun!",
      facebook: "https://www.facebook.com/john.c.kearle",
    },
    {
      name: "Julia Wei",
      photo: julia,
      subheader: "Deez Nuts",
      description:
        "First time manager Julia has already made a big splash on the KUL scene with the bold choice of 'Deez Nuts' for her team name/jersey design. Her team will not have to be worried about being boring this season!",
      facebook: "https://www.facebook.com/julia.wei.566",
    },
    {
      name: "Lucas Snarski",
      photo: lucas,
      subheader: "Port",
      description:
        "Another first time manager, Lucas has become a BIG (and also VERY TALL) part of the ultimate scene since he came to town just over a year ago. Port will never have to worry about shade!",
      facebook: "https://www.facebook.com/lucas.snarski",
    },
    {
      name: "Mike Smith",
      photo: mike,
      subheader: "Disc Jockeys",
      description:
        "Leading the ONLY returning team from last year, Mike will be hoping to bring his Disc Jockeys a gold medal to go along with all their Gold Records!",
      facebook: "https://www.facebook.com/profile.php?id=585346130",
    },
    // {
    //   name: "Tim Zabinski",
    //   photo: tim,
    //   subheader: "Mighty Hucks",
    //   description:
    //     "Tim has been in every season of KUL since it began in 2016 which was the same year that he played his first ever tournament. He is most excited for some Huckin good cheers this season and aspires to get everyone feeling especially involved and included on the Mighty Hucks",
    //   facebook: "https://www.facebook.com/tim.zabinski",
    // },
  ];
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Fall 2020 Team Managers</h2>
      <div>
        <GridContainer>
          {managerData.map((manager) => (
            <GridItem xs={12} sm={6} md={4} key={manager.name}>
              <ProfileCard
                name={manager.name}
                photo={manager.photo}
                subheader={manager.subheader}
                description={manager.description}
                facebook={manager.facebook}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
