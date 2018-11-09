import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react'
import IProduct from '../models/Product';

const styles:any = (theme:any) => ({
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        height: 200,
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: "contain"
    },   
    desc: {
        flexGrow : 1
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },    
    amount: {
    }   
  });

interface IProps {
  item: IProduct,
  onAddCart: (product: IProduct) => void,
  classes: any
}
interface IState { }

class ProductItem extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this._onAddCart = this._onAddCart.bind(this)
  }
  
   public render() {
    const { item, classes } = this.props
 
    return (
        <Grid item={true} xs={12} sm={6} md={4}>
            <Card className={classes.content}>
                <CardContent className={classes.media} title={item.title}>
                    <img src={item.imageUrl} className={classes.image}/>
                </CardContent>
                <CardContent className={classes.desc}>
                <Typography gutterBottom={true} variant="h6" component="h2">
                    {item.title}
                </Typography>
                <Typography className={classes.desc} gutterBottom={true} component="p">
                    {item.description}
                </Typography> 
                </CardContent>

                <CardActions className={classes.footer}>
                <Typography variant="subtitle1" color="textSecondary">
                    {item.formatAmount} {item.currency}
                </Typography>
                <Button size="small" color="primary" onClick={this._onAddCart}>
                    Add to cart
                </Button>
            </CardActions>

            </Card>
        </Grid>
    )
  }

  private _onAddCart(e : any) {
    this.props.onAddCart(this.props.item);
  }

}

export default withStyles(styles, { withTheme: true })(ProductItem);