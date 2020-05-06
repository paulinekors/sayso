import React from 'react';

function DetailView(props) {
  const { error, status, message } = props;
  const isLoading = status === 'pending';
  const isResolved = status === 'resolved';
  const isRejected = status === 'rejected';

  return <div>Detail</div>;
}

export default DetailView;
