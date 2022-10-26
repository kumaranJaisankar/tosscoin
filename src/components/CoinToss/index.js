import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    toss: 1,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickToToss = () => {
    this.setState(prev => ({total: prev.total + 1}))
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 1) {
      this.setState(prev => ({
        heads: prev.heads + 1,
        toss: randomNumber,
      }))
    } else {
      this.setState(prev => ({
        tails: prev.tails + 1,
        toss: randomNumber,
      }))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state
    const tossImgUrl =
      toss === 1
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossImgUrl} alt="toss result" className="img-size" />
          <button type="button" onClick={this.onClickToToss}>
            Toss Coin
          </button>
          <div className="result">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
