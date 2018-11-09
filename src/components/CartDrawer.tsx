import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Carts from '../containers/Carts'

const drawerWidth = 350;

const styles = (theme:any) => ({
    root: {
        display: 'flex',
        marginTop: 80
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
      toolbar: theme.mixins.toolbar,
  });

interface IProps {
  open: boolean,
  classes: any
}

const CartDrawer: React.SFC<IProps> = (props) => {

  const { classes, open } = props;

  return (
    <div className={classes.root}>
    <Drawer open={open}
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <Carts />
    </Drawer>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(CartDrawer);