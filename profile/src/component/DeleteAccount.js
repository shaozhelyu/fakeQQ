import React from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
class DeleteAccount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { Modal: true, password: 'hello' };
    this.checkValid = this.checkValid.bind(this);
  }
  checkValid(e) {
    e.preventDefault();
    const oldpass = document.getElementById('deletePass').value;
    if (oldpass !== this.state.password) {
      alert(`${oldpass} ${this.state.password} wrong password`);
      return;
    }
    this.setState({ Modal: false });
  }
  render() {
    return (
      <Router>
        <div>
          <h2>Warning: This operation will Deactivate your account</h2>
          <form style={{ alignContent: 'flex-start' }}>
            <div>
              <aside style={{ margin: '10px' }}>Password</aside>
              <div>
                <input
                  id={'deletePass'}
                  type="password"
                  data-testid="deletePass"
                ></input>
              </div>
            </div>
            <div>
              <button
                type="submit"
                id="submit"
                data-testid="deletePassSub"
                disabled={this.state.buttonable}
                onClick={(e) => {
                  this.checkValid(e);
                }}
              >
                {this.state.Modal === true ? 'true' : 'false'}
              </button>
              {this.state.Modal ? null : <DeleteModal />}

              {/* <DeleteModal /> */}
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

export default DeleteAccount;
