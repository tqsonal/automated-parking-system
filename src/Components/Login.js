import React, { Component } from "react";
import ParkCar from "./ParkCar";
import "./ParkCar.css";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultParked: '',
      ParkingLength: "",
      DefaultParkingError: "",
      ParkingLengthError:''
    };
  }
  submithandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault()
  };

  validForm = () => {
    var isValid = false;

    if(this.state.ParkingLength===''){
        alert('in if')
this.setState({
    ParkingLengthError:'please enter the valid number for slot length'
})
isValid=false;
    }
    else{
        this.setState({
            ParkingLengthError:''
        })
        isValid=true;
    }
    if (this.state.defaultParked > this.state.ParkingLength) {
      this.setState({
        DefaultParkingError: "Parked cars count can not be greater than parking slot length",
      });
      isValid = false;
    }
    else{
        this.setState({
            DefaultParkingError:''
        })
        isValid=true;
    }
    return isValid;
  };

  submitData = (e) => {
      const isvalid= this.validForm();
    //   alert(isvalid)
// console.log(isvalid)
      if(isvalid==true){
        //   alert("data aaded")
      }
      <ParkCar parkingSize={this.state.ParkingLength} defaultParked={this.state.defaultParked}/>
      e.preventDefault()
  };

  render() {
    return (
        <>
        <header className="header shadow mt-2">
          <div class="header-content d-flex justify-content-center p-2">
            <div className="ml-5 align-self-center heading_n">
              Welcome to Automated Parking System{" "}
            </div>
          </div>
        </header>
      <div className="container mt-5">

        <form class="w-50 mx-auto mt-3" autoComplete="off">
          <div class="form-group">
            <label for="owner">No of Parking lots to be available:</label>
            <input
              type="text"
              class="form-control rounded-1 shadow-sm"
              name="ParkingLength"
              placeholder="Enter the count of total slots you want"
              value={this.state.Parking_length}
              onChange={this.submithandler}
            />
          <span style={{ color: "red" }}> {this.state.ParkingLengthError}</span>

          </div>
          <div class="form-group">
            <label for="owner">Parked cars count:</label>
            <input
              type="text"
              class="form-control rounded-1 shadow-sm"
              name="defaultParked"
              placeholder="How many cars are already parked"
              value={this.state.defaultParked}
              onChange={this.submithandler}
            />
          </div>
          <span style={{ color: "red" }}> {this.state.DefaultParkingError}</span>

          <button
            type="submit"
            class="btn mx-auto d-block mt-2 rounded-0 shadow "
            id="btnOne"
            onClick={this.submitData}
          >
            Create Parking
          </button>
        </form>
      </div>
      </>

    );
  }
}

export default Login;
