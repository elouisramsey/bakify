const baseUrl = process.env.BASE_URL

export const getData = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const data = await res.json()
  return data
}

export const postData = async (url, post, token) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(post)
  })
  const data = await res.json()
  return data
}

export const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(post)
  })
  const data = await res.json()
  return data
}
