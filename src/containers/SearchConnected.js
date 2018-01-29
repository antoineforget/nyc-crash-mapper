import { connect } from 'react-redux';

import {
  fetchLocationGeocode,
  clearLocationGeocode,
  filterByLocation,
} from '../actions';

import Search from '../components/Search';

const mapStateToProps = ({ geocoding }) => {
  const { error, isFetching, searchTerm, result } = geocoding;
  return {
    error,
    isFetching,
    result,
    searchTerm,
  };
};

export default connect(mapStateToProps, {
  fetchLocationGeocode,
  clearLocationGeocode,
  filterByLocation,
})(Search);