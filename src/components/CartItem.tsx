// import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AddCircleOutline, DeleteForeverOutlined, RemoveCircleOutline } from '@material-ui/icons';
import * as React from 'react';
import Cart from '../models/Cart';
import IProduct from '../models/Product';

const styles:any = (theme: any) => ({
    container: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'top',
      padding: '15px 15px 0px 15px'
    },
    title: {
      paddingLeft: '20px'
    },
    image: {
      height: '100%',
      width: '100%',
      objectFit: 'contain'
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px'
    },
    button: {
      minWidth: '25px',
      textAlign: 'center'   
    },
    amount: {
      marginLeft: 'auto'
    }
  });

  interface IProps {
    item: Cart,
    onAddCart: (product: IProduct) => void,
    onRemoveCart: (product: IProduct) => void,
    onRemoveProductFromCart: (product: IProduct) => void,
    classes: any
  }
  interface IState { }


class CartItem extends React.PureComponent<IProps, IState> {

    constructor(props: any) {
        super(props);
        // this._onAddCart = this._onAddCart.bind(this)
        this._onRemoveCart = this._onRemoveCart.bind(this)
        this._onRemoveProductFromCart = this._onRemoveProductFromCart.bind(this)
    }
  
    public render() {
      const { classes, item } = this.props;

      return (
        <Grid item={true} xs={12}>

            <div className={classes.container}>

                <div style={{ width: '20%'}}>
                    <img src={item.product.imageUrl} className = {classes.image}/>
                </div>

                <Typography className={classes.title} component="h6" variant="h6">
                  {item.product.title}
                </Typography>

            </div>

            <div className={classes.footer}>          
                <IconButton className={classes.button} aria-label="-1" onClick={this._onRemoveCart}>
                  <RemoveCircleOutline/>
                </IconButton>
                <Typography className={classes.button} variant="subtitle1" color="textSecondary">
                    {item.quantity}
                </Typography>              
                <IconButton  className={classes.button} aria-label="+1"  onClick={this.onAddCart}>
                    <AddCircleOutline/>
                </IconButton>
                <IconButton  className={classes.button} aria-label="Remove" onClick={this._onRemoveProductFromCart} >
                  <DeleteForeverOutlined/>
                </IconButton>
                <Typography  className={classes.amount} variant="subtitle1" color="textSecondary">
                  {item.formatAmount} {item.currency}
                </Typography>
            </div>

            <Divider />

        </Grid>
      );
    }

    private onAddCart = (e : any) => {
      this.props.onAddCart(this.props.item.product);
    }

    private _onRemoveCart(e : any) {
      this.props.onRemoveCart(this.props.item.product);
    }

    private _onRemoveProductFromCart(e : any) {
      this.props.onRemoveProductFromCart(this.props.item.product);
    }

  };

  export default withStyles(styles)(CartItem);