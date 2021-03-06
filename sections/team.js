import React from 'react'
import TeamMems from '../components/team-mems'

export default class Team extends React.Component {
  render() {
    var myStyle = {
      fontFamily: "Dosis",
      paddingTop: "50px",
      paddingBottom: "50px",
      height: "100%",
      color: "#fff",
      backgroundColor: "#505050"
    }
    const showTeamMembers = this.props.teamMems.map(teamMem => 
      <TeamMems key={teamMem.id} id={teamMem.id} fname={teamMem.fname} lname={teamMem.lname} title={teamMem.title} linkedin={teamMem.linkedin} photo={teamMem.photo} size={teamMem.size}/> );
  	return (
      <div id="team" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h3>{'<'}<em> demo </em>{'>'}&nbsp;</h3>
              <h1>Meet the Team</h1>
              <br /><br />
            </div>
          </div>
        </div>
        <div class="row">
        {showTeamMembers}
        </div>
        <hr />
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <br />
              <h3>{'<'}<em> demo </em>{'>'}&nbsp;</h3>
              <h1>Contact Info</h1>
              <br />
              <h3>ProSeed Inc.</h3>
              <h4>12-34 56th St. 78th Ave Flr 90 Ste 1234</h4>
              <h4>New York, NY 56789</h4>
              <h4>Tel: &nbsp;&nbsp;( 0123 ) 456-7890</h4>
              <h4>EmaiL &nbsp;&nbsp;abc-123@proseed.com</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Team.propTypes = {
  teamMems: React.PropTypes.array.isRequired
}
Team.defaultProps = {
  teamMems: []
}