export const baseURL = "http://localhost:8080/api/v2/"
export const productListUrl = baseURL+"products/"
export const productTypeUrl = baseURL+"product_types/"
export const engagementListUrl = baseURL+"engagements/"
const testTypeUrl = baseURL+"test_types/"
const userUrl = baseURL+"users/"

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
        response.engagements=engagement["results"]
        return response
    }))
    })
    .then(res => setRowData(res))
}

export function FetchEngagementData(setRowData, active){
    var currentToken = localStorage.getItem("token")
    var currentUrl = engagementListUrl
    if(active){
      currentUrl+="?=active=true"
    }
    return fetch(currentUrl ,{
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
            const typepromise = await FetchProductByProductId(response["product"])
            const type = await typepromise.json()
            response["product"] = type["name"]
            response["prod_type"] = type["prod_type"]
            return response
        }))
    })
    .then(async(res) => {
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

function FetchProductByProductId(id){
  var currentToken = localStorage.getItem("token")
    return fetch(productListUrl+id+"/", {
        method: 'get',
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': "Token "+currentToken,
        })
      });
}

function FetchEngagementByProductId(id){
    const url = engagementListUrl+"?product="+id
    var currentToken = localStorage.getItem("token")
    return fetch(url, {
        method: 'get',
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': "Token "+currentToken,
        })
      });
}

export function FetchProductTypes(){
  var currentToken = localStorage.getItem("token")
  return fetch(productTypeUrl, {
    headers: new Headers({
      'Accept':'application/json',
      'Authorization': "Token "+currentToken,
    })
  })
}

export function FetchUsers(){
  var currentToken = localStorage.getItem("token")
  return fetch(userUrl, {
    headers: new Headers({
      'Accept':'application/json',
      'Authorization': "Token "+currentToken,
    })
  })
}

export function CreateNewProduct(product){
  var currentToken = localStorage.getItem("token")
  const requestOptions = {
    method: 'POST',
    headers: new Headers({
      'Content-Type':'application/json',
      'Authorization': "Token "+currentToken,
    }),
    body: JSON.stringify(product)
  }
  return fetch(productListUrl, requestOptions);
}

export function CreateNewProductType(productType){
  var currentToken = localStorage.getItem("token")
  const requestOptions = {
    method: 'POST',
    headers: new Headers({
      'Content-Type':'application/json',
      'Authorization': "Token "+currentToken,
    }),
    body: JSON.stringify(productType)
  }
  return fetch(productTypeUrl, requestOptions);
}

export function FetchTestTypes(){
  var currentToken = localStorage.getItem("token")
  return fetch(testTypeUrl, {
      headers: new Headers({
        'Accept':'application/json',
        'Authorization': "Token "+currentToken,
      })
    })
}
