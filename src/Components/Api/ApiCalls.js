const fetchApi = () => {
  return fetch("http://lendsugar.com/api/v1/users/1/communities/1/requests")
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
}

const addNewRequest = (request) => {
  let unparsedResponse;
  return fetch("http://lendsugar.com/api/v1/users/1/communities/1/requests", {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      unparsedResponse = response;
      return response.json();
    })
    .then(parsedResponse => {
      if (!unparsedResponse.ok) {
        throw new Error(`${unparsedResponse.status} ${parsedResponse.error}`);
      }
      return parsedResponse;
    });
}

const postRequest = (request, requestId) => {
  let unparsedResponse;
  return fetch(`http://lendsugar.com/api/v1/users/1/communities/1/requests/${requestId}`, {
    method: 'PATCH',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      unparsedResponse = response;
      return response.json();
    })
    .then(parsedResponse => {
      if (!unparsedResponse.ok) {
        throw new Error(`${unparsedResponse.status} ${parsedResponse.error}`);
      }
      return parsedResponse;
    });
}

const removeRequest = (requestId) => {
  let unparsedResponse;
  return fetch(`http://lendsugar.com/api/v1/users/1/communities/1/requests/${requestId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      unparsedResponse = response;
      return response.json();
    })
    .then(parsedResponse => {
      if (!unparsedResponse.ok) {
        throw new Error(`${unparsedResponse.status} ${parsedResponse.error}`);
      }
      return parsedResponse;
    });
}

export {fetchApi, addNewRequest, postRequest, removeRequest}