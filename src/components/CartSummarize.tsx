import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import ICartSummerize from 'src/models/CartSummarize';

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
    justifyContent: 'flex-end',
    padding: '15px'
  },
  button: {
    marginLeft: 'auto'
  },
  amount: {
    marginLeft: 'auto'
  }

  });

  interface IProps {
    summerize: ICartSummerize,
    classes: any
  }

const CartSummarize: React.SFC<IProps> = (props) => {

    const { classes, summerize } = props;

    return (
      <Grid item={true} xs={12}>
          <div className={classes.container}>
            <Typography component="h5" variant="h5">
                Total
            </Typography>            
            <Typography className={classes.amount} variant="h5" component="h2">
                  {summerize.formatAmount} {summerize.currency}
            </Typography>
          </div>
          <div className={classes.footer}>
              <Button size="small" color="primary">
                  Check Out
              </Button>
          </div>
      </Grid>
    );
  };

  export default withStyles(styles)(CartSummarize);