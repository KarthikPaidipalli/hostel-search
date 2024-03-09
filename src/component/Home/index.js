
import Header from "../Header"
import "./index.css"
const Home =()=>{
        return(
            <div className="total">
                <Header/>
                <div className="home-comntainer">
                    <div className="first">
                        <h1>Discover Your Perfect Stay</h1>
                        <p>Your next adventure begins here at <span className="span1">Hostel Haven</span>. Explore unique and
        affordable accommodations tailored to your travel style. Whether you're a
        solo wanderer, a group of friends, or a couple seeking memorable
        experiences, Hostel Haven is your gateway to comfortable and vibrant
        stays around the city. Let us be your guide to top-rated accommodations,
        ensuring a delightful and memorable stay.</p>

                    </div>
                    <img src="https://img.freepik.com/free-vector/editable-hotel-logo-vector-business-corporate-identity-hostel_53876-111553.jpg?w=740&t=st=1706198311~exp=1706198911~hmac=ba9e7e228fd8d366789c9065a47f62515aa2186ffcfd868ac0e3360c6bb4a313" alt="logo" className="image"/>
                </div>
            </div>
        )
}
export default Home