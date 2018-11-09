import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react'
import Product from '../models/Product'
import IProduct from '../models/Product';
import ProductItem from './ProductItem'

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
  products: Product[],
  onAddCart: (product: IProduct) => void,
  fetchProducts: () => void
  classes: any
}
interface IState { }

class AddCartForm extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }
  
  public componentDidMount() {
    this.props.fetchProducts();
  }

   public render() {
    const { onAddCart, products, classes } = this.props

    return (
       <div className={classes.root}>
       <Grid container={true} spacing={24}>   
        {
          products.map(product => (
            <ProductItem key={product.id} onAddCart={onAddCart} item={product}/>
          ))
        }
        </Grid>
        </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AddCartForm);