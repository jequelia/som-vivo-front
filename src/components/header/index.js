import { AppBar,Toolbar,Typography} from '@material-ui/core';

import {Head} from './style'

function Header() {

    return (
        <Head  position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Som Vivo
          </Typography>
        </Toolbar>
      </Head>
    );
  }
  
  export default Header;
  