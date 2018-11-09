import * as React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Top from 'src/containers/Top';
import Products from '../containers/Products'

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  }
});

function HomePage(props: any) {
  
  const { classes } = props;

  return (<div className={classes.root}>
      <Top />
      <Products />
  </div>)
}
 
export default withStyles(styles)(HomePage);
