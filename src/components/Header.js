import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Sayso</h1>
      </div>
      <div className="create-message">
        <Link to={`/new`}>
          <Fab>
            <AddIcon fontSize="large"/>
          </Fab>
        </Link>
      </div>
    </header>
  );
}

export default Header;
