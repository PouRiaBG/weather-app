import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
    alignItems: 'baseline',
    justifyContent : 'space-between',
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
    searchInput : {
      border : 'none',
      outline : "none",
      borderRadius : "3px"
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

          
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          > */}
              {/* <Avatar alt="test" className={classes.large}/> */}
            <MenuIcon />
          <input type="text" onChange={props.setCity} className={classes.searchInput} placeholder="search..."/>
          {/* </IconButton> */}
          <IconButton aria-label="search" color="inherit" onClick={props.search}>
            <SearchIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}
export default Header