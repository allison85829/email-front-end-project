

export const getEmail = () => dispatch => {
  console.log('fetching');

  fetch('http://5c5a21f9af3ff700140de477.mockapi.io/api/email')
    .then(res => res.json())
    .then(allEmail =>
      dispatch({
        type: 'GET_ALL_EMAIL',
        payload: allEmail
      })
    );
};

export const getEmailDetail = (id) => dispatch => {
  console.log('fetching');

  fetch('http://5c5a21f9af3ff700140de477.mockapi.io/api/email' + id)
    .then(res => res.json())
    .then(email =>
      dispatch({
        type: 'GET_ONE_EMAIL',
        payload: email
      })
    );
};

