import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
    cityName : string | "city"
    temp : number | "0"
}


const  Main:React.FC<Props> = (props) => {
  const classes = useStyles();
 

  return (
   
      <Grid container direction="column" justify="space-evenly"  className={classes.root} >
        <Typography variant="h4" align="center" >
          {props.cityName ? props.cityName : "City name"}
        </Typography>
        <Typography variant="h2" align="center">
            {props.temp ? props.temp : "0"}
            {props.temp && (<sup>&deg;C</sup>)}
        </Typography>
      </Grid>
  );
}

export default Main