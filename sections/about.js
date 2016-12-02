import React from 'react'

export default class About extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dosis",
      paddingTop: "50px",
      paddingBottom: "20px",
      height: "100%",
      color:  "#000",
      backgroundColor: "#cc0044"  
    }
    var myStyle2 = {
      marginRight: "20px",
      marginBottom: "10px",
      marginLeft: "15px"
    }
    var myStyle3 = {
      color: "orange",
      marginLeft: "-6px"
    }
  	return (

      <div id="about" class="container-fluid text-center" style={myStyle1}>
        <h3>{'<'}<em> demo </em>{'>'}&nbsp;</h3>
        <h1>`Pro-Seed` is a convenient place to buy your fruit seeds online! &nbsp;&nbsp;(Members only: &nbsp;&nbsp;Register below.)</h1>
        <p class="text-left" style={myStyle3}>&emsp;&ensp;{this.props.bkImg[1].size}</p>
        <img src={this.props.bkImg[1].aboutImg} width="600px" class="img-responsive pull-left gap-right" style={myStyle2}/>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog. &nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog. &nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog. &nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog. &nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
      </div>
    );
  }
}
About.propTypes = {
  bkImg: React.PropTypes.array.isRequired
}
About.defaultProps = {
  bkImg: []
}