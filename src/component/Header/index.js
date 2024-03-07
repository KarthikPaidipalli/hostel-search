
import "./index.css"
import { Link,withRouter } from "react-router-dom"
import Popup from 'reactjs-popup'
const Header = (props)=>{
    const confirmed = () =>{
        const {history}=props
        history.replace("/login")
    }
    return(
        <div className="header-container">
            <div className="navbar">
                <Link to="/" className="link"><h1 className="Header-heading">Hostel Haven</h1></Link>
                <ul className="ul-in-header">
                    <Link to="/" className="link"><li className="li-in-hostels">Home</li></Link>
                    <Link to="/hostels" className="link"><li className="li-in-hostels">Find hostels</li></Link>
                    <Link to="/addhostels" className="link"><li className="li-in-hostels">Add hostel</li></Link>
                </ul>
                <Popup
                    modal
                    trigger={
                    <button type="button" className="button">
                        Logout
                    </button>
                    }
                >
                    {close => (
                    <>
                    <div className="buttonsalign">
                    <button
                        type="button"
                        className="canclebutton"
                        onClick={() => close()}
                        >
                        Cancle
                        </button>
                        <button className="button" onClick={confirmed}>Confirm</button>
                    </div>
                    </>
                    )}
                </Popup>
            </div>
        </div>
    )
}
export default withRouter(Header)