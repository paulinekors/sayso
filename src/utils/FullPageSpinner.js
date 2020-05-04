import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../img/Spinner.gif';
import PropTypes from 'prop-types';
import '../styles/components/_full-page-spinner.scss';

function PageLoader(props) {
  const { loading } = props;

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader">
        <img src={Spinner}></img>
      </div>
    </div>
  );
}

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.listmessages.loading,
  };
}

export default connect(mapStateToProps)(PageLoader);
