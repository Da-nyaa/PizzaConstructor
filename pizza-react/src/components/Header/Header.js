/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-dark bg-gradient widht-100">
           <div className="d-flex justify-content-between" style={{maxWidth: "1320px", width: "100%", margin: "auto", padding: "15px 12px"}}>
                <h6><NavLink className="text-white" style={{textDecoration: 'none'}} to='/'>Зробити замовлення</NavLink></h6>
                <h6><NavLink className="text-white" style={{textDecoration: 'none'}} to='/backet'> Корзина </NavLink></h6>
           </div>
        </div>

    )
}

export default Header;