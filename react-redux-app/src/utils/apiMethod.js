export const apiGet = url => {
  return fetch(url)
    .then (response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
}

export const apiPost = (url, body) => {
  return fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: 'POST',
      body: body,
    })
    .then (response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
}