import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0.5,
    },
     icon1 : {
        color :"blue",
        fontSize : "2rem"
    },
    icon2 : {
        color : "blue",
        fontSize : "2rem"
    },
    icon3 : {
        color : "red"
    }
  }),
);

const  Footer = ()=> {
  const classes = useStyles();

  return (
      <Grid container className={classes.root} justify="space-around">
          <Grid container item xs={3} direction="column" justify="space-between" alignItems="center">
            <BeachAccessOutlinedIcon className={classes.icon1}/>
          </Grid>
          <Grid  container item xs={3} direction="column" justify="space-between" alignItems="center">
             <OpacityOutlinedIcon className={classes.icon2}/>
          </Grid>
          <Grid  container item xs={3} direction="column" justify="space-between" alignItems="center">
              test
          </Grid>
      </Grid>
  );
}
export default Footer