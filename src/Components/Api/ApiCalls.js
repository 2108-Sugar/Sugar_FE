const fetchApi = () => {
  return fetch("https://lendsugar.com/api/v1/users/1/communities/1/requests")
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
}

export {fetchApi}