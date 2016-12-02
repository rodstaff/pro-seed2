import React from 'react'

export default class Register extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dosis",
      paddingTop: "50px",
      paddingBottom: "20px",
      height: "100%",
      color: "#000",
      backgroundColor: "#009973"
    }
    var myStyle2 = {
      color: "#fff",
      textAlign: "center"
    }
    return (
      <div id="register" class="container-fluid" style={myStyle1}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Register for membership</h1>
              <h4 style={myStyle2}>{'<'} Note: &nbsp;&nbsp;This signup form is not active. {'>'}</h4>
            </div>
          </div>
        </div>

        <div class="row centered-form">
          <div class=" col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
            <form class="form-horizontal" action="" method="POST">
            <fieldset>
              <div class="control-group">
                <label class="control-label" for="username">Username</label>
                <div class="controls">
                  <input type="text" id="username" name="username" placeholder="" class="form-control input-lg" />
                  <p style={myStyle2} class="help-block">Username can contain any letters or numbers, without spaces</p>
                </div>
              </div>
         
              <div class="control-group">
                <label class="control-label" for="email">E-mail</label>
                <div class="controls">
                  <input type="email" id="email" name="email" placeholder="" class="form-control input-lg" />
                  <p style={myStyle2} class="help-block">Please provide your E-mail</p>
                </div>
              </div>
         
              <div class="control-group">
                <label class="control-label" for="password">Password</label>
                <div class="controls">
                  <input type="password" id="password" name="password" placeholder="" class="form-control input-lg" />
                  <p style={myStyle2} class="help-block">Password should be at least 6 characters</p>
                </div>
              </div>
         
              <div class="control-group">
                <label class="control-label" for="password_confirm">Password (Confirm)</label>
                <div class="controls">
                  <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="form-control input-lg" />
                  <p style={myStyle2} class="help-block">Please confirm password</p>
                </div>
              </div>
              <br />
              <div class="control-group">
                <div class="controls">
                  <button class="btn btn-primary btn-block"><h4>Submit</h4></button>
                </div>
              </div>
            </fieldset>
            </form>
          </div> 
        </div>

      </div>
    );
  }
}
