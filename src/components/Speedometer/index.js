// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    // eslint-disable-next-line consistent-return
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
    })
  }

  brake = () => {
    // eslint-disable-next-line consistent-return
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="para">
          Speed is <span className="count">{count}mph</span>
        </h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="container1">
          <button onClick={this.onIncrease} type="button" className="button1">
            Accelerate
          </button>
          <button onClick={this.brake} type="button" className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
