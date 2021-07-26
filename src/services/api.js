export const baseURL = "http://localhost:8080/api/v2/"
export const productListUrl = baseURL+"products/"
export const productTypeUrl = baseURL+"product_types/"
export const engagementListUrl = baseURL+"engagements/"

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
    .then(res => res["results"])
    .then(async(res) => {
        return await Promise.all(res.map(async(response) => {
            const typepromise = await FetchProductTypeNameById(response["prod_type"])
            const type = await typepromise.json()
            response["prod_type"] = type["name"]
            return response
        }))
    })
    .then(async(res) => {
      return await Promise.all(res.map(async(response) => {
        const typepromise = await FetchEngagementByProductId(response["id"])
        const engagement = await typepromise.json()
        console.log(engagement)
        response.engagements=engagement["results"]
        return response
    }))
    })
    .then(res => setRowData(res))
}

export function FetchEngagementData(setRowData){
    var currentToken = localStorage.getItem("token")
    return fetch(engagementListUrl ,{
      method: 'get',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization': "Token "+currentToken,
      })
    })
    .then(res => res.json())
    .then(res => res["results"])
    .then(async(res) => {
      console.log(res)
        return await Promise.all(res.map(async(response) => {
            const typepromise = await FetchProductTypeNameById(response["prod_type"])
            const type = await typepromise.json()
            response["prod_type"] = type["name"]
            return response
        }))
    })
    .then(res => { 
      res.map(response => {
        response["period"] = [response["target_start"], response["target_end"]]
        return response
      })
      return res;
    })
    .then(res => setRowData(res))
  }

function FetchProductTypeNameById(id){
    var currentToken = localStorage.getItem("token")
    return fetch(productTypeUrl+id+"/", {
        method: 'get',
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': "Token "+currentToken,
        })
      });
}

function FetchEngagementByProductId(id){
    const url = engagementUrl+"?product="+id
    var currentToken = localStorage.getItem("token")
    return fetch(url, {
        method: 'get',
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': "Token "+currentToken,
        })
      });
}
