import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import image from '../../assets/blur.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${image})`,
    backgroundSize : "cover"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    position: "absolute",
    top : "7rem",
  },
  inputInput: {
    position : "absolute",
    top : ""
    }
}));

interface Props {
  setCity : (event: React.ChangeEvent<HTMLInputElement>)=> void
  search : () =>void
}



const Header:React.FC<Props> = (props)=>{
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
              {/* <Avatar alt="test" className={classes.large}/> */}
              <input type="text" onChange={props.setCity}/>

            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
          </Typography>
          <IconButton aria-label="search" color="inherit" onClick={props.search}>
            <SearchIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}
export default Header