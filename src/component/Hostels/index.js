import React, { Component } from 'react';
import Header from '../Header';
import { MdSearch } from "react-icons/md";
import HostelsContext from '../../context/HostelsContext';
import "./index.css"
const ratings = [
    { rateings: 2, value: 2 },
    { rateings: 3, value: 3 },
    { rateings: 4, value: 4 },
    { rateings: 5, value: 5 }
];

const pricing = [
    { price: 7000, valuetodisplay: "7000 Rupees" },
    { price: 8000, valuetodisplay: "8000 Rupees" },
    { price: 9000, valuetodisplay: "9000 Rupees" },
    { price: 10000, valuetodisplay: "10000 Rupees" }
];

class Hostels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchinput: "",
            sharings: 0,
            price: 0,
        };
    }

    sharingactive = val => {
        this.setState({ sharings: val });
    };

    priceactive = val => {
        this.setState({ price: val });
    };

    inputentered = event => {
        this.setState({ searchinput: event.target.value });
    };

    render() {
        const { price, sharings, searchinput } = this.state;
        return (
            <HostelsContext.Consumer>
                {value => {
                    const { hostelslist } = value;
                    const filteredHostels = hostelslist.filter(hostel => (
                        hostel.hostelname.toLowerCase().includes(searchinput.toLowerCase()) &&
                        (sharings === 0 || hostel.sharing === sharings) &&
                        (price === 0 || hostel.rent <= price)
                    ));

                    return (
                        <div className='hostelscontainer'>
                            <Header />
                            <div className='bottom'>
                                <div className='bottom-first'>
                                    <p>Price below</p>
                                    <ul>
                                        {pricing.map(each => (
                                            <li key={each.price} className='li'>
                                                <input
                                                    id={`price_${each.price}`}
                                                    type='checkbox'
                                                    value={each.price}
                                                    onChange={() => this.priceactive(each.price)}
                                                    checked={each.price === price}
                                                />
                                                <label htmlFor={`price_${each.price}`}>{each.valuetodisplay}</label>
                                            </li>
                                        ))}
                                    </ul>
                                    <p>Sharing</p>
                                    <ul>
                                        {ratings.map(each => (
                                            <li key={each.rateings} className='li'>
                                                <input
                                                    id={`sharing_${each.value}`}
                                                    type='checkbox'
                                                    value={each.value}
                                                    onChange={() => this.sharingactive(each.value)}
                                                    checked={each.value === sharings}
                                                />
                                                <label htmlFor={`sharing_${each.value}`}>{each.rateings} Sharing</label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='bottom-second'>
                                    <div className='searchalign'>
                                        <input type='search' className='input' onChange={this.inputentered} />
                                        <MdSearch size={26} />
                                    </div>
                                    {filteredHostels.map(hostel => (
                                        <div key={hostel.id} className='hotelcard'>
                                            <img src={hostel.image} alt="image" className='imagein' />
                                            <div className='mapsecond'>
                                                <h2>{hostel.hostelname} hostel</h2>
                                                <p>Sharing: {hostel.sharing}</p>
                                                <p>Rent: {hostel.rent}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </HostelsContext.Consumer>
        );
    }
}

export default Hostels;
