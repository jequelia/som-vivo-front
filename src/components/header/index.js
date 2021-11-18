import { AppBar,Toolbar,Typography} from '@material-ui/core';



function Header() {

    return (
        <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Som Vivo
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  