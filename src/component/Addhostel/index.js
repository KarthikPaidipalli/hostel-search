
import { Component } from "react";
import Header from "../Header";

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
  },
  {
    id:20,
    type:"Co-Living",
    hostelname:"Tarun Coliving",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR855_8G0UWHGYeuH94zK40S8l6sa-nBdsN1g&usqp=CAU",
    sharing:4,
    rent:7500
}
]

class Addhostel extends Component{
    state={count:21,type:"",hostelname:"",image:"",sharing:0,rent:0}
    hostelnameentered =(event)=>{
        this.setState({hostelname:event.target.value})
    }

    hostelimage =(event)=>{
        this.setState({image:event.target.value})
    }

    hostelsharing =(event)=>{
        this.setState({sharing:event.target.value})
    }

    hostelnrent =(event)=>{
        this.setState({rent:event.target.value})
    }

    hosteltype=(event)=>{
        this.setState({type:event.target.value})
    }

    formsubmitedforhostel=()=>{
    
    listofholstels.push({id:this.state.count,type:this.state.type,hostelname:this.state.hostelname,image:this.state.image,sharing:this.state.sharing,rent:this.state.rent})
    this.setState((pre)=>({count:pre.count+1}))
    }
    render(){
        const{type,hostelname,image,sharing,rent}=this.state
        console.log(listofholstels)
        return(
            <div>
                <Header/>
                <form onSubmit={this.formsubmitedforhostel}>
                <label htmlFor="hostelname">HostelName:</label>
                <input type="text" id="hostelname" value={hostelname} onChange={this.hostelnameentered}/>
                <label htmlFor="hostetype">Hosteltype:</label>
                <input type="text" id="hostetype" value={type} onChange={this.hosteltype}/>
                <label htmlFor="hostelimage">HostelImageURL:</label>
                <input type="text" id="hostelimage" value={image} onChange={this.hostelimage}/>
                <label htmlFor="sharing">Sharing:</label>
                <input type="text" id="sharing" value={sharing} onChange={this.hostelsharing}/>
                <label htmlFor="hostelrent">HostelName:</label>
                <input type="text" id="hostelrent" value={rent} onChange={this.hostelnrent}/>
                <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}
export default Addhostel