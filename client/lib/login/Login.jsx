import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid, { GridCentered } from '../ui/components/Grid';
import Image from '../ui/components/image';
import { PasswordInput } from '../ui/components/Input';
import actions from './actions';

const mapStateToProps = state => {

  console.log( 'state => ', state );
  return {};

}

@connect(mapStateToProps, actions)
class Login extends Component {


  render() {
    return (

      <GridCentered className="middle aligned" height="100%">
        <div className="column" style={{width:'600px'}}>
          <div className="ui segment">
            <form className="ui form">
              <div className="ui field">
                <Image.nature className="rounded" width="600" height="300" />
              </div>
              <div className="ui field">
                <div className="ui input left icon big">
                  <i className="mail icon" />
                  <input type="text" placeholder="E-mail" /></div>
              </div>
              <div className="ui field">
                <PasswordInput prompt="Password" className="big" />
              </div>

              <div className="ui field fade reveal instant">
                <div className="visible content" style={{width:'100%'}}>
                  <div ref="submitButton" className="ui button fluid primary big"
                       onClick={() => this.props.logIn('stan@southpark.com', 'wendy')}>Login
                  </div>
                </div>
                <div className="ui field hidden content">
                  <div className="ui message" style={{textAlign:'left'}}>
                    <p>some title</p>
                  </div>
                </div>
              </div>

              <div className="ui horizontal divider">OR</div>
              <div ref="submitButton" className="ui left icon labeled button green big"
                   onClick={() => {
                    console.log(this.refs);

                      const nagQuery = $(this.refs.nag);
                      nagQuery.nag('show')




                   }}>
                <i className="signup icon"></i>
                Register
              </div>
            </form>
          </div>
        </div>
      </GridCentered>

    )

  }

  onLoginSubmit() {

    console.log("login!!")
    this.refs.submitButton.className += " loading";
    console.log("ok");

  }


}

export default Login;