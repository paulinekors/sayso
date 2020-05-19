import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function NewMessage() {
  const [isExpanded, setExpanded] = useState(false);
  const [messageId, setMessageId] = useState(null);

  function expand() {
    setExpanded(true);
  }

  const { register, errors, handleSubmit, setError, clearError } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:3000/messages', requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setMessageId(messageId);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // const validateTitle = async (value) => {
  //   await sleep(1000);
  //   if (value !== 'tentententen') {
  //     setError('title', 'validate');
  //   } else {
  //     clearError('title');
  //   }
  // };

  return (
    <div>
      <form className="add-message" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          readOnly
          name="new"
          onClick={expand}
          placeholder="Add a new message"
          rows={isExpanded ? 3 : 0}
        />

        {isExpanded && <label htmlFor="title">Title</label>}
        {isExpanded && (
          <input
            name="title"
            placeholder="..."
            rows={isExpanded ? 4 : 0}
            ref={register({
              required: 'This field is required',
              maxLength: {
                value: 120,
                message: 'Max length is 120 characters',
              },
              minLength: {
                value: 10,
                message: 'Min length is 10 characters',
              },
              // validate: validateTitle,
            })}
          />
        )}
        {errors.title && (
          <p className="error-message">{errors.title.message}</p>
        )}

        {isExpanded && <label htmlFor="body">Body</label>}
        {isExpanded && (
          <input
            name="body"
            placeholder="..."
            rows={isExpanded ? 4 : 0}
            ref={register({
              required: 'This field is required',
              maxLength: {
                value: 400,
                message: 'Max length is 400 characters',
              },
              minLength: {
                value: 10,
                message: 'Min length is 10 characters',
              },
            })}
          />
        )}
        {errors.body && (
          <p className="error-message">{errors.body.message}</p>
        )}

        {isExpanded && <label htmlFor="firstName">First name</label>}
        {isExpanded && (
          <input
            name="firstName"
            placeholder="..."
            ref={register({
              required: 'This field is required',
              maxLength: {
                value: 40,
                message: 'Max length is 40 characters',
              },
              minLength: {
                value: 2,
                message: 'Min length is 2 characters',
              },
            })}
          />
        )}
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}

        {isExpanded && <label htmlFor="lastName">Last name</label>}
        {isExpanded && (
          <input
            name="lastName"
            placeholder="..."
            ref={register({
              required: 'This field is required',
              maxLength: {
                value: 40,
                message: 'Max length is 40 characters',
              },
              minLength: {
                value: 2,
                message: 'Min length is 2 characters',
              },
            })}
          />
        )}
        {errors.lastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}

        {isExpanded && <label htmlFor="email">Email</label>}
        {isExpanded && (
          <input
            name="email"
            placeholder="..."
            rows={isExpanded ? 5 : 0}
            type="text"
            ref={register({
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address',
              },
            })}
          />
        )}
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <Zoom
          type="submit"
          in={isExpanded}
          disabled={
            !!errors.title ||
            !!errors.body ||
            !!errors.firstName ||
            !!errors.lastName ||
            !!errors.email
          }
        >
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NewMessage;
