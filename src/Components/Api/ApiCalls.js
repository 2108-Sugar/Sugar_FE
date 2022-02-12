const fetchApi = () => {
  return fetch("http://lendsugar.com/api/v1/users/1/communities/1/requests", {
    referrerPolicy: "unsafe_url" 
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
}

export {fetchApi}