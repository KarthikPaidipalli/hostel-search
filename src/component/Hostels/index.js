import React, { Component } from 'react';
import Header from '../Header';
import "./index.css"
import { MdExpandCircleDown, MdSearch } from "react-icons/md"

const listofholstels=[
    {
        id:1,
        hostelname:"IPE Girls",
        type:"Girls",
        image:"https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg",
        sharing:2,
        rent:10000
    },
    {
        id:2,
        type:"Girls",
        hostelname:"SV Girls",
        image:"https://threebestrated.in/images/SnehitaWorkingWomensHostel-Hyderabad-TS.jpeg",
        sharing:4,
        rent:6000
    },
    {
        id:3,
        type:"Girls",
        hostelname:"Balaji Girls",
        image:"https://content.jdmagicbox.com/comp/hyderabad/x2/040pxx40.xx40.210326203050.m3x2/catalogue/annapurna-girls-and-pg-hostel-narayanguda-hyderabad-hostels-1vdibo7fqg.jpg?clr=",
        sharing:3,
        rent:8000
    },
    {
        id:4,
        type:"Girls",
        hostelname:"Amrutha Girls",
        image:"https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1594884091/Website/CMS-Uploads/htwxakxqvkkyvfycv2gb.jpg",
        sharing:2,
        rent:9500
    },
    {
        id:5,
        type:"Girls",
        hostelname:"Manasa Girls",
        image:"https://content.jdmagicbox.com/comp/hyderabad/l7/040pxx40.xx40.181112105007.i8l7/catalogue/sai-pallavi-delux-girls-hostel-hyderabad-0krkb3eyiy.jpg?clr=",
        sharing:3,
        rent:8500
    },
    {
        id:6,
        type:"Girls",
        hostelname:"Divya Girls",
        image:"https://gos3.ibcdn.com/473b5ef4d35011eb92a50242ac110002.jpg",
        sharing:4,
        rent:6500
    },
    {
        id:7,
        type:"Girls",
        hostelname:"SBN Girls",
        image:"https://qph.cf2.quoracdn.net/main-qimg-855fe14e92ac9e33929a98c03d40c213-lq",
        sharing:2,
        rent:10000
    },
    {
        id:8,
        type:"Girls",
        hostelname:"ISTHARA Girls",
        image:"https://qph.cf2.quoracdn.net/main-qimg-fcc829cffc31a33378addedd4e6d6f10-lq",
        sharing:3,
        rent:8500
    },
    {
        id:9,
        type:"Girls",
        hostelname:"Stanza Girls",
        image:"https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Jun/09/Photo_h220_w280/GR2-375613-1774719_220_280.jpeg",
        sharing:4,
        rent:6500
    },
    {
        id:10,
        type:"Boys",
        hostelname:"PNR Boys",
        image:"https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1594884135/Website/CMS-Uploads/hw7k0wl307qrp7ywuvsj.jpg",
        sharing:2,
        rent:10000
    },
    {
        id:11,
        type:"Boys",
        hostelname:"SV Boys",
        image:"https://content.jdmagicbox.com/comp/hyderabad/w7/040pxx40.xx40.180904110722.e4w7/catalogue/ravi-elegant-men-s-hostel-bachupally-hyderabad-hostels-for-men-8cii1ipikb.jpg?clr=",
        sharing:3,
        rent:8500
    },
    {
        id:12,
        type:"Boys",
        hostelname:"Venkateshawara Boys",
        image:"https://content.jdmagicbox.com/comp/hyderabad/n7/040pxx40.xx40.210628203925.d5n7/catalogue/asian-deluxe-boys-hostel-dilsukhnagar-hyderabad-hostels-t1dtxn5ytp.jpg?clr=",
        sharing:4,
        rent:6500
    },
    {
        id:13,
        type:"Boys",
        hostelname:"SBN Boys",
        image:"https://imagecdn.99acres.com/media1/15124/17/302497506M-1701946550179.webp",
        sharing:2,
        rent:10000
    },
    {
        id:14,
        type:"Boys",
        hostelname:"Stanza Boys",
        image:"https://metrocityhostel.com/images/rooms/sharing-accommodation-panjagutta-hyderabad.jpg",
        sharing:3,
        rent:8500
    },
    {
        id:15,
        type:"Boys",
        hostelname:"IPE Boys",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/bb/29/03/nomads-nest.jpg?w=1200&h=-1&s=1",
        sharing:4,
        rent:6500
    },
    {
        id:16,
        type:"Co-Living",
        hostelname:"SBN Coliving",
        image:"https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/May/16/Photo_h220_w280/GR2-291385-1360845_220_280.jpg",
        sharing:2,
        rent:10000
    },
    {
        id:17,
        type:"Co-Living",
        hostelname:"Stanza Coliving",
        image:"https://images.nobroker.in/images/8a9fdb828328c9640183293113050ada/8a9fdb828328c9640183293113050ada_97675_952614_medium.jpg",
        sharing:3,
        rent:8500
    },
    {
        id:18,
        type:"Co-Living",
        hostelname:"Tarun Coliving",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR855_8G0UWHGYeuH94zK40S8l6sa-nBdsN1g&usqp=CAU",
        sharing:4,
        rent:6500
    },
    {
      id:19,
      type:"Co-Living",
      hostelname:"Tarun Coliving",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR855_8G0UWHGYeuH94zK40S8l6sa-nBdsN1g&usqp=CAU",
      sharing:3,
      rent:7500
  }
  {
    id:20,
    type:"Co-Living",
    hostelname:"Tarun Coliving",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR855_8G0UWHGYeuH94zK40S8l6sa-nBdsN1g&usqp=CAU",
    sharing:4,
    rent:7500
}
]
const ratings=[
    {
        rateings:2,
        value:2

    },
    {
        rateings:3,
        value:3

    },
    {
        rateings:4,
        value:4

    },
    {
      rateings:5,
      value:5

  }
]
const pricing=[
    {
        price:7000,
        valuetodisplay:"7000 Rupees"
    },
    {
        price:8000,
        valuetodisplay:"8000 Rupees"
    },
    {
        price:9000,
        valuetodisplay:"9000 Rupees"
    },
    {
        price:10000,
        valuetodisplay:"10000 Rupees"
    }
]

class Hostels extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchinput: "",
        sharings: 0,
        price: 0,
        hotelslist: listofholstels,
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
      const { hotelslist, price, sharings, searchinput } = this.state;
      const updatehostellist = hotelslist.filter((each) => (
        each.hostelname.toLowerCase().includes(searchinput.toLowerCase()) && 
        (sharings === 0 || each.sharing === sharings) && 
        (price === 0 || each.rent <= price)
    ));
    
  
      return (
        <div className='hostelscontainer'>
          <Header />
          <div className='bottom'>
            <div className='bottom-first'>
              <p>Price below</p>
              <ul>
                {pricing.map((each) => (
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
                {ratings.map((each) => (
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
              <MdSearch size={26}/>
              </div>
              {updatehostellist.map((hostel) => (
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
    }
  }
  
  export default Hostels