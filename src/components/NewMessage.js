import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function NewMessage() {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="add-message">
        <textarea readOnly
          name="new"
          onClick={expand}
          placeholder="Add a new message"
          rows={isExpanded ? 3 : 0}
        />
        {isExpanded && <textarea
          name="title"
          onClick={expand}
          placeholder="Title:"
          rows={isExpanded ? 2 : 0}
        />}
        {isExpanded && <textarea
          name="name"
          onClick={expand}
          placeholder="Message:"
          rows={isExpanded ? 5 : 0}
        />}
        {isExpanded && <textarea
          name="content"
          onClick={expand}
          placeholder="First name:"
          rows={isExpanded ? 1 : 0}
        />}
        {isExpanded && <textarea
          name="content"
          onClick={expand}
          placeholder="Last name:"
          rows={isExpanded ? 1 : 0}
        />}
        {isExpanded && <textarea
          name="content"
          onClick={expand}
          placeholder="Email:"
          rows={isExpanded ? 1 : 0}
        />}
        <Zoom in={isExpanded}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NewMessage;
