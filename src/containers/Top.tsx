import { connect } from 'react-redux'
import TopBar from '../components/TopBar'
import { IState } from '../reducers'
import { getCartSummerize } from '../selectors/carts'

const mapStateToProps = (state: IState) => ({
  summerize: getCartSummerize(state)
})

const mapDispatchToProps = {
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TopBar)