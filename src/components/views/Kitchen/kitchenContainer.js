import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getAll, getLoadingState, updateStatus, fetchFromAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  orders: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchFromAPI()),
  updateStarted: (order, status) => dispatch(updateStatus(order, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);