import React from 'react';
import ChangePassModal from './ChangePassModal';
import { BrowserRouter as Router, Link } from 'react-router-dom';
class PasswordC extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      buttonable: true,
      password: 'hello',
      message: 'wrong password',
      modal: false,
      wrong_p_count: 0,
    };
    this.fillAll = this.fillAll.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }
  fillAll(e) {
    if (this.state.count === 2) {
      this.setState({ count: 0, buttonable: false });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }
  checkValid(e) {
    e.preventDefault();
    const oldpass = document.getElementById('old').value;
    const newpass1 = document.getElementById('new1').value;
    const newpass2 = document.getElementById('new2').value;
    if (oldpass !== this.state.password) {
      if (this.state.wrong_p_count >= 3) {
        alert('You have enter wrong password for too much times');
        // this.setState({
        //   message: 'You have enter wrong password for too much times',
        //   modal: true,
        // });
      }
      this.setState({
        modal: true,
        wrong_p_count: this.state.wrong_p_count + 1,
      });
      return;
    }
    if (newpass1 === newpass2) {
      // alert(`${newpass1} ${newpass2} Reset Success`);
      this.setState({ message: 'Reset Success', modal: true });
    } else {
      this.setState({ message: "Two new password doesn't match", modal: true });
    }
  }
  render() {
    return (
      <Router>
        <div>
          <div>UserName</div>
          <form style={{ alignContent: 'flex-start' }}>
            <div>
              <aside style={{ margin: '10px' }}>Old Password</aside>
              <div>
                <input
                  id={'old'}
                  data-testid="oldPass"
                  onChange={this.fillAll}
                  type="password"
                ></input>
              </div>
            </div>
            <div>
              <aside style={{ margin: '10px' }}>New Password</aside>
              <div>
                <input
                  id={'new1'}
                  data-testid="newPass1"
                  onChange={this.fillAll}
                  type="password"
                ></input>
              </div>
            </div>
            <div>
              <aside style={{ margin: '10px' }}>New Password Again</aside>
              <div>
                <input
                  id={'new2'}
                  data-testid="newPass2"
                  onChange={this.fillAll}
                  type="password"
                ></input>
              </div>
              <div id="warning"></div>
            </div>
            <div>
              <button
                type="submit"
                id="submit"
                data-testid="ChangeSub"
                disabled={this.state.buttonable}
                onClick={(e) => {
                  this.checkValid(e);
                }}
              >
                Change
                {this.state.modal ? 'yes' : 'no'}
              </button>
              {this.state.modal ? (
                <ChangePassModal
                  data={{ message: this.state.message, show: this.state.modal }}
                />
              ) : null}
            </div>
            <div>
              <Link to={'/password/Reset'}> Reset Password</Link>
            </div>
          </form>
        </div>
      </Router>
    );
  }
}

export default PasswordC;
