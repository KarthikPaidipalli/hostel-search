import React, { Component } from "react";
import Header from "../Header";
import HostelsContext from "../../context/HostelsContext";
import "./index.css"
class Addhostel extends Component {
  state = { count: 21, type: "", hostelname: "", image: "", sharing: "", rent: "" };

  hostelnameentered = (event) => {
    this.setState({ hostelname: event.target.value });
  };

  hostelimage = (event) => {
    this.setState({ image: event.target.value });
  };

  hostelsharing = (event) => {
    this.setState({ sharing: event.target.value });
  };

  hostelnrent = (event) => {
    this.setState({ rent: event.target.value });
  };

  hosteltype = (event) => {
    this.setState({ type: event.target.value });
  };

  formsubmitedforhostel = (event, addnewhostel) => {
    event.preventDefault();
    addnewhostel({
      id: this.state.count,
      type: this.state.type,
      hostelname: this.state.hostelname,
      image: this.state.image,
      sharing: this.state.sharing,
      rent: this.state.rent,
    });
    this.setState((pre) => ({ count: pre.count + 1 }));
  };

  render() {
    const { type, hostelname, image, sharing, rent } = this.state;
    return (
      <HostelsContext.Consumer>
        {(value) => {
          const { addnewhostel } = value;
          return (
            <div>
              <Header />
              <div className="addcontainer">
                <div>
                <form onSubmit={(event) => this.formsubmitedforhostel(event, addnewhostel)} className="forma">
                <label htmlFor="hostelname" className="formelements">HostelName:</label>
                <input type="text" id="hostelname" value={hostelname} onChange={this.hostelnameentered} className="formelementsinput" placeholder="Enter hostel name"/>
                <label htmlFor="hostetype" className="formelements">Hosteltype:</label>
                <input type="text" id="hostetype" value={type} onChange={this.hosteltype} className="formelementsinput" placeholder="Enter hostel type"/>
                <label htmlFor="hostelimage" className="formelements">HostelImageURL:</label>
                <input type="file" id="hostelimage" value={image} onChange={this.hostelimage} className="formelementsinput" placeholder=""/>
                <label htmlFor="sharing" className="formelements">Sharing:</label>
                <input type="text" id="sharing" value={sharing} onChange={this.hostelsharing} className="formelementsinput"  placeholder="Enter sharing"/>
                <label htmlFor="hostelrent" className="formelements">HostelRent:</label>
                <input type="text" id="hostelrent" value={rent} onChange={this.hostelnrent} className="formelementsinput" placeholder="Enter hostelrent"/>
                <button type="submit" className="submitbutton">Submit</button>
              </form>
                </div>
              </div>
            </div>
          );
        }}
      </HostelsContext.Consumer>
    );
  }
}

export default Addhostel;

