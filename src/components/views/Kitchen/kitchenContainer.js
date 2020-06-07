import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getAll, getLoadingState, orderStatusUpdate, fetchFromAPI } from '../../../redux/kitchenRedux';

const mapStateToProps = (state) => ({
  orders: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchFromAPI()),
  updateStarted: (order, status) => dispatch(orderStatusUpdate(order, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);