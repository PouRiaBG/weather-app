import React, { Props } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import PublicIcon from '@material-ui/icons/Public';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0.5,
    },
     icon1 : {
        color :"green",
        fontSize : "2rem"
    },
    icon2 : {
        color : "blue",
        fontSize : "2rem"
    },
    icon3 : {
        color : "red",
        fontSize : "2rem"
    }
  }),
);
interface PropsWeather {
  country : string;
  humidity : string ;
  cloud : string ;
}
const  Footer:React.FC<PropsWeather> = (props)=> {
  const classes = useStyles();

  return (
      <Grid container className={classes.root} justify="space-around">
          <Grid container item xs={3} direction="column" justify="space-evenly" alignItems="center">
            <PublicIcon className={classes.icon1}/>
            {props.country ? props.country : "none"}
            {props.country && (<sup>Country</sup>)}
          </Grid>
          <Grid  container item xs={3} direction="column" justify="space-evenly" alignItems="center">
             <OpacityOutlinedIcon className={classes.icon2}/>
             {props.humidity ? `${props.humidity}%` : "0%"}
             {props.humidity && (<sup>humidity</sup>)}
          </Grid>
          
          <Grid  container item xs={3} direction="column" justify="space-evenly" alignItems="center">
              <CloudQueueIcon className={classes.icon3}/>
              {props.cloud ? props.cloud : "0"}
              {props.cloud && (<sup>meter/sec</sup>)}
          </Grid>
      </Grid>
  );
}
export default Footer