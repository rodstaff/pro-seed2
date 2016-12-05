import React from 'react'

export default class FruitItems extends React.Component { 
  render() {
  	const { id, cname, lname, price, img, size, link } = this.props;
    const myStyle1 = {
      border: "1px double black",
      borderRadius: 15,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2
    }
    const myStyle2 ={
      color: "green"
    }
    const myStyle3 ={
      height: "150px",
      width: "200px"
    }
    return (
      <div class="col-lg-3 col-md-4 col-sm-6 text-center" style={myStyle1}>
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
        <label style={myStyle2}>{size}<a href={link}><img src={img} style={myStyle3} class="thumbnail center-block" /></a></label>
      </div>
    );
  }
}
FruitItems.propTypes = {
  id: React.PropTypes.number,
  cname: React.PropTypes.string,
  lname: React.PropTypes.string,
  price: React.PropTypes.number,
  img: React.PropTypes.node,
  size: React.PropTypes.string,
  link: React.PropTypes.node
}
FruitItems.defaultProps = {
  id: 0,
  cname: '',
  lname: '',
  price: 0,
  img: '',
  size: '',
  link: ''
}