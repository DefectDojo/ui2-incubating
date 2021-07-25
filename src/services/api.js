export const baseURL = "http://localhost:8080/api/v2"
export const productListUrl = baseURL+"/products/"

export function FetchProductsData(setRowData){
    var currentToken = localStorage.getItem("token")
    return fetch(productListUrl ,{
      method: 'get',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization': "Token "+currentToken,
      })
    })
    .then(res => res.json())
    .then(res => setRowData(res["results"]))
  }