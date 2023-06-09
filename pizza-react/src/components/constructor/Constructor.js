import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createOrder } from '../../service/service';
import { useNavigate } from 'react-router-dom';


export const Constructor = () => {
    const { register, handleSubmit,  } = useForm();
    const [totalPrice, setTotalPrice] = useState(0);
    const [size, setSize] = useState(false);
    const [dough, setDough] = useState(false);
    const navigate = useNavigate();

    const submit = async (data) => {
        await createOrder(data)
        .then(val => {
            navigate(`/backet?phone=${data.phone}`)
        })
        .catch(e => {
            console.log('Error:', e);
        })
    }

     const onSubmit = data => {
        data.price = totalPrice
        submit(data);
    }

    const sumTotalPrice = (e) => {
        if(e.target.attributes.type.value === 'radio'){
            if(e.target.attributes.name.value === 'size'){
                if(!size){
                    setTotalPrice(prev =>prev + +e.target.attributes.price.value);
                    setSize(true);
                }
            }else{
                if(!dough){
                    setTotalPrice(prev =>prev + +e.target.attributes.price.value);
                    setDough(true);
                }
            }
        }else{
            e.target.checked ? setTotalPrice(prev => prev + +e.target.attributes.price.value) : setTotalPrice((prev => prev - +e.target.attributes.price.value));
        }

    }

    return (
        <div style={{marginTop: "40px"}}>
            <div>
                <h4>Складіть свою піцу</h4>
                <h4>Ціна: {totalPrice.toFixed(2)} гривень</h4>
            </div>

    <form onSubmit={handleSubmit(onSubmit)}>

       <div className='d-flex flex-column' style={{gap: "20px", marginTop: "30px"}}>

        <div className='col-10 col-sm-3'>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">380</span>
            </div>
            <input type="number " className="form-control" placeholder="Телефон" aria-label="phone" aria-describedby="basic-addon1" {...register("phone", {required: true})} />
        </div>
        </div>
    
       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть основу для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input" value={'30 см'} price={12} onClick={(e) => sumTotalPrice(e)} type="radio" name="flexRadioDefault1" id="flexRadioDefault1" {...register("size", {required: true})}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    30 см
                </label>
            </div>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input" value={'40 см'} type="radio" price={12} onClick={(e) => sumTotalPrice(e)} name="flexRadioDefault1" id="flexRadioDefault2" {...register("size", {required: true})}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    40 см
                </label>
            </div>
       </div>

       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть тісто для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input" value={'Тонке'} type="radio" price={23} onClick={(e) => sumTotalPrice(e)} name="flexRadioDefault2" id="flexRadioDefault1" {...register("dough", {required: true})}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Тонке
                </label>
            </div>
            <div className="form-check col-3 col-sm-2" style={{width:"9%"}}>
                <input className="form-check-input" price={23} value={'Пухке'}  type="radio" onClick={(e) => sumTotalPrice(e)} name="flexRadioDefault2" id="flexRadioDefault2" {...register("dough", {required: true})}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Пухке
                </label>
            </div>
       </div>

       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть м'ясне для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Бекон" price={21} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("meat")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Бекон
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Курка" price={22} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("meat")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Курка
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Бекон" price={25} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("meat")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Ковбаски
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Курка" price={19} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("meat")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Папероні
                </label>
            </div>
       </div>

       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть соус для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Барбек'ю" price={9} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("sauce")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Барбек'ю
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Сирний" price={12} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("sauce")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Сирний
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Бекон" price={10} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("sauce")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Часниковий
                </label>
            </div>
       </div>


       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть сир для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Пармезан" price={26} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("cheese")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Пармезан
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Пармезан" price={23} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("cheese")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Пармезан
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Фета" price={29} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("cheese")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Фета
                </label>
            </div>
       </div>


       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть овочі для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Гриби" price={15} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("vegetables")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Гриби
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Курудза" price={10} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("vegetables")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Курудза
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Помідори" price={13} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("vegetables")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Помідори
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Цибуля" price={9} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("vegetables")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Цибуля
                </label>
            </div>
       </div>

       <div className='d-flex row align-items-center'>
            <h5 className='col-6 col-sm-3'>Обреріть фрукти для піци: </h5>
            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Ананас" price={14} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("fruits")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Ананас
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Лимон" price={10} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("fruits")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Лимон
                </label>
            </div>

            <div className="form-check col-3 col-sm-2">
                <input className="form-check-input"  type="checkbox" value="Маслини" price={19} onClick={(e) => sumTotalPrice(e)} id="flexCheckDefault" {...register("fruits")}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Маслини
                </label>
            </div>
       </div>
       </div>
      <input style={{marginTop: "30px"}} className="btn btn-secondary" type="submit" />
    </form>


    </div>       
    )

}

export default Constructor;