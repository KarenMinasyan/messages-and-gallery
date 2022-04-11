export const api = 'http://localhost:3000'

export const request = (path, method = 'GET', body) => {
	 return fetch(`${api}/${path}`, {
		method,
		 headers : {
			 'Content-Type': 'application/json',
			 'Accept': 'application/json'
		 },
		body: body ? JSON.stringify(body) : null
	})
		 .then(res => res.json())
}
