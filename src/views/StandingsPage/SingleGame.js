import React from "react";
import { Button, Grid, Typography, Box } from "@material-ui/core";

export default function SingleGame(props) {
  const { data } = props;

  return (
    <Box
      fullWidth
      onClick={() => console.log("button to be removed from being clicked")}
      variant="contained"
      color="primary"
      style={{
        minHeight: "90px",
        textTransform: "none",
        padding: "1em",
        borderRadius: "16px",
        border: "2px black solid",
        background: `linear-gradient(155deg, ${data.homeTeamData.colorPrimary}99  50%, ${data.awayTeamData.colorPrimary}99 50%)`
      }}
    >
      <Grid container style={{ height: "-webkit-fill-available" }}>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item>
              <Typography
                align="left"
                style={{
                  color: "black",
                  fontWeight: "bolder"
                }}
              >
                {data.homeTeamData.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                align="left"
                style={{
                  color: "black",
                  fontWeight: "bolder"
                }}
              >
                {data.homeScore}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ alignSelf: "flex-end" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align="right"
                style={{ color: "black", fontWeight: "bolder" }}
              >
                {data.awayScore}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="right"
                style={{ color: "black", fontWeight: "bolder" }}
              >
                {data.awayTeamData.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
