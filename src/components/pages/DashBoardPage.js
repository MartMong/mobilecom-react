import React, { Component } from 'react'

class DashBoardPage extends Component {

  logout = () => {
    localStorage.removeItem('mobilecomJWT')
    this.props.history.push('/')

  }

  render() {
    return (
      <div>
        <h1>DashBoard</h1>
        <button onClick={()=>this.logout()}>Logout</button>
      </div>
    )
  }
}

export default DashBoardPage;
