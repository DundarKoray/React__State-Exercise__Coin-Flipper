import React, { Component } from 'react'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', url: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: 'tails', url: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }


    flipCoin(){

    }

    handleClick(e){
        this.flipCoin()
    }
    render(){
        return(
        <div className="CoinContainer">
            <h2>Let's Flip A Coin!</h2>
            <button onClick={this.handleClick}>Flip Me!</button>
            <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>

        </div>
        )
    }
}

export default CoinContainer