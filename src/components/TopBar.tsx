import { Badge, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ShoppingBasketOutlined } from '@material-ui/icons';
import * as React from 'react'
import ICartSummerize from 'src/models/CartSummarize';
import CartDrawer from './CartDrawer';

const styles = (theme:any) => ({
    root: {
      flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        flexGrow: 1
    },
    appBar: {
      zIndex: 2000
    },
    media: {
        height: 140
    },
    button: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },    
  });

interface IProps {
  classes: any,
  summerize: ICartSummerize
}
interface IState {
  open : boolean
 }

class TopBar extends React.PureComponent<IProps, IState> {
  
  constructor(props: IProps) {
    super(props)
    this.toogleCart = this.toogleCart.bind(this);
    this.state = { open: false };  
  }

  public render() {
     const { classes, summerize } = this.props;

     return (
        <div className={classes.root}>
          <AppBar className={classes.appBar} position="fixed" color="default">
            <Toolbar>
              <Typography className={classes.grow} variant="h6" color="inherit">
                React / Redux E-Shop Demo
              </Typography>
              <IconButton className={classes.menuButton} color="inherit"  onClick={this.toogleCart}>
                <Badge badgeContent={summerize.numberOfItems} color="secondary">
                  <ShoppingBasketOutlined />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <CartDrawer open={this.state.open}/>
        </div>
      );
  }

  private toogleCart()
  {
    this.setState({ open: !this.state.open });
  }

}

export default withStyles(styles, { withTheme: true })(TopBar);