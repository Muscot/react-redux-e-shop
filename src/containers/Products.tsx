import { connect } from 'react-redux'
import { addCart, removeCart } from '../actions/carts'
import { fetchProducts } from '../actions/products'
import ProductsList from '../components/ProductsList'
import { IState } from '../reducers'
import { getProducts } from '../selectors/products'

const mapStateToProps = (state: IState) => ({
  products: getProducts(state)
})

const mapDispatchToProps = {
  onRemoveCart: removeCart,
  onAddCart: addCart,
  fetchProducts
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ProductsList)