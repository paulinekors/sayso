import React from 'react';
import Spinner from '../img/Spinner.gif';
import '../styles/components/_full-page-spinner.scss';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';

function PageLoader() {
  // const { status } = props;

  // if (status !=== 'pending') return null;

  return (
    <div className="loader-container">
      <div className="loader">
        <img src={Spinner}></img>
      </div>
    </div>
  );
}

// PageLoader.propTypes = {
//   status: PropTypes.string.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     status: state.listmessages.status,
//   };
// }

export default PageLoader;

//export default connect(mapStateToProps)(PageLoader);
