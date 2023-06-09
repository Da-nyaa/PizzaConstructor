/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import { getOrders } from "../../service/service";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import localData from "../data/Mockup";

const Basket = () => {
    const location = useLocation();
    const { search } = location;
    const [orders, setOrders] = useState([])
    const { register, handleSubmit,  } = useForm();

    const submit = async (data) => {
        data.phone = `380${data.phone}`
        getData({phone: data.phone})
    }

     const onSubmit = data => {
        submit(data);
    }

    const getData = async (query = {}) => {
        const res = await getOrders(query)
        const {order}  = await res.json();
        if(order.length){
            setOrders(order)
        }

        // setOrders(localData)
    }

    useEffect(() => {
        let query = {}
        if(search) query = {phone: `${search.split('=')[1]}`};
        getData(query)
    }, [])

    return(
        <div className="" style={{marginTop:"30px"}}>
            <h4>Ваша корзина:</h4>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='col-10 col-sm-3 d-flex align-items-center' style={{gap: "15px"}}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">380</span>
                        </div>
                        <input type="number " className="form-control" placeholder="Телефон" aria-label="phone" aria-describedby="basic-addon1" {...register("phone", {required: true})} />
                    </div>
                    <input className="btn btn-secondary  mb-3" type="submit" value={"Пошук"} />
                </div>
            </form>


                {orders.length ? 
                <div className="d-flex flex-wrap justify-content-center" style={{gap: "15px"}}>
                    {orders.map((item, index) => {
                        return (
                            <div key={index} className="d-flex flex-column col-12 col-sm-2 bg-secondary bg-gradient p-2 rounded text-light" style={{opacity:'0.9'}}>
                                <h6>Замовник: +{item.phone}</h6>
                                <h6>Ціна: {item.price}.00</h6>                                
                                <h6>Розмір: {item.size}</h6>
                                <h6>Тісто: {item.dough}</h6>
                                {item.sauce[0] ? <h6>Соус: {item.sauce.join(', ')}</h6> : null}
                               {item.meat[0] ? <h6>М'ясо: {item.meat.join(', ')}</h6> : null}
                                {item.cheese[0] ? <h6>Сир: {item.cheese.join(', ')}</h6> : null}
                               {item.fruits[0] ? <h6>Фрукти: {item.fruits.join(', ')}</h6> : null}
                               {item.vegetables[0] ? <h6>Овочі: {item.vegetables.join(', ')}</h6> : null}


                            </div>
                        )
                    })}
                </div> : null}
        </div>
    )
}

export default Basket;