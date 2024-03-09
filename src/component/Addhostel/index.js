import React, { Component } from "react";
import Header from "../Header";
import HostelsContext from "../../context/HostelsContext";

class Addhostel extends Component {
  state = { count: 21, type: "", hostelname: "", image: "", sharing: 0, rent: 0 };

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
              <form onSubmit={(event) => this.formsubmitedforhostel(event, addnewhostel)}>
                <label htmlFor="hostelname">HostelName:</label>
                <input type="text" id="hostelname" value={hostelname} onChange={this.hostelnameentered} />
                <label htmlFor="hostetype">Hosteltype:</label>
                <input type="text" id="hostetype" value={type} onChange={this.hosteltype} />
                <label htmlFor="hostelimage">HostelImageURL:</label>
                <input type="text" id="hostelimage" value={image} onChange={this.hostelimage} />
                <label htmlFor="sharing">Sharing:</label>
                <input type="text" id="sharing" value={sharing} onChange={this.hostelsharing} />
                <label htmlFor="hostelrent">HostelRent:</label>
                <input type="text" id="hostelrent" value={rent} onChange={this.hostelnrent} />
                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }}
      </HostelsContext.Consumer>
    );
  }
}

export default Addhostel;

