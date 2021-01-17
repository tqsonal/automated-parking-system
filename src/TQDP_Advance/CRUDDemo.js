import React, { Component } from "react";

class CRUDDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: "",
      quantity: "",
      flag:0,
      index:'',
      allData:[]
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  refreshData=()=>{
    var arr = JSON.parse(localStorage.getItem("cart"));
    if (arr == null) {
      arr = [];
    }
    this.setState({
      allData:arr
    })
  }
  displayData = () => {
    var arr = JSON.parse(localStorage.getItem("cart"));
    if (arr == null) {
      arr = [];
    }
   

    return this.state.allData.map((a, i) => {
      return (
        <tr>
          <td>{i + 1} </td>
          <td> {a.p}</td>
          <td> {a.q}</td>
          <td>
            <button className="btn btn-success mr-2" onClick={()=>this.UpdateData(i)}> Update</button>
            <button
              className="btn btn-danger"
              onClick={() => this.DeleteData(i)}
            >
              {" "}
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };


  UpdateData=(i)=>{
      let index=i;
    var arr = JSON.parse(localStorage.getItem("cart"));
var obj=arr[index];
this.setState({
    product: obj.p,
      quantity:obj.q,
      flag:1,
      index:index
})
this.refreshData()

}





  DeleteData = (i) => {
      alert(i)
    var arr = JSON.parse(localStorage.getItem("cart"));
arr.splice(i,1);
localStorage.setItem("cart", JSON.stringify(arr));
this.refreshData();

  };



  

  componentDidMount() {
    this.refreshData();
  }

  submitData = (e) => {
    var arr = JSON.parse(localStorage.getItem("cart"));
    if (arr == null) {
      arr = [];
    }
    let obj = { p: this.state.product, q: this.state.quantity };

    if(this.state.flag==0){
        arr.push(obj);
        localStorage.setItem("cart", JSON.stringify(arr));
    this.refreshData();
        
    }
    else{
    let i = this.state.index;
    arr[i]=obj;
    localStorage.setItem("cart", JSON.stringify(arr));
this.setState({
    index:'',
    flag:0,
    product:'',
    quantity:''
})
    }
    this.refreshData();
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <center>
          <form>
            <div>
              <label> product</label>
              <input
                type="text"
                name="product"
                value={this.state.product}
                onChange={this.changeHandler}
              />
            </div>

            <div>
              <label> quantity</label>
              <input
                type="text"
                name="quantity"
                value={this.state.quantity}
                onChange={this.changeHandler}
              />
            </div>
            <input type="submit" onClick={this.submitData} />
          </form>
          <table className="table table-striped">
            <thead>
              <th> sr no </th>
              <th> Product </th>
              <th> Quantity </th>
              <th> Action </th>
            </thead>
            <tbody>{this.displayData()}</tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default CRUDDemo;
