import { connect } from 'react-redux'
import { addCart, removeCart, removeProductFromCart } from '../actions/carts'
import CartsList from '../components/CartsList'
import { IState } from '../reducers'
import { getCarts, getCartSummerize } from '../selectors/carts'

const mapStateToProps = (state: IState) => ({
  carts: getCarts(state),
  summerize: getCartSummerize(state)
})

const mapDispatchToProps = {
  onRemoveProductFromCart: removeProductFromCart,
  onRemoveCart: removeCart,
  onAddCart: addCart,
}



export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CartsList)