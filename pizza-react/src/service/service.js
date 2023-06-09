const url = 'http://localhost:8080'


const createOrder = async (data) => {
    data.phone = `380${data.phone}`
  return await fetch(`${url}/create-order`, { 
        method: "POST", 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
    })
}

const getOrders = async (data) => {
  return await fetch(`${url}/get-order${data.phone ? `?phone=${data.phone}` : ""}`)
}

export {createOrder, getOrders};