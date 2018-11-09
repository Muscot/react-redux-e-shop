import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react'
import ICartSummerize from 'src/models/CartSummarize';
import Cart from '../models/Cart'
import IProduct from '../models/Product';
import CartItem from './CartItem'
import CartSummarize from './CartSummarize';


const styles = (theme:any) => ({
    root: {
      flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        flexGrow: 1
    },
    media: {
        height: 140
    },
    button: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
  });

interface IProps {
  carts: Cart[],
  summerize: ICartSummerize,
  onAddCart: (product: IProduct) => void,
  onRemoveCart: (product: IProduct) => void,
  onRemoveProductFromCart:  (product: IProduct) => void,
  classes: any
}

const CartsList:  React.SFC<IProps> = (props) => {

    const { carts, summerize, onAddCart, onRemoveCart, onRemoveProductFromCart, classes } = props

    return (
       <div className={classes.root}>
        <Grid container={true} spacing={24}>   
          {
            carts.map(cart => (
              <CartItem key={cart.product.id} {...{onAddCart, onRemoveCart, onRemoveProductFromCart}} item={cart}/>
          ))}
          <CartSummarize summerize={summerize} />
        </Grid>
      </div>
    )
  }

export default withStyles(styles, { withTheme: true })(CartsList);