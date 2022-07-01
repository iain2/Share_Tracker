const baseURL = 'http://localhost:9000/api/stocks/'

export const getPortfolio = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postPortfolio = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deletePortfolio = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updatePortfolio = (booking) => {
    console.log(booking)
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify({ checkedIn: true }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())

}