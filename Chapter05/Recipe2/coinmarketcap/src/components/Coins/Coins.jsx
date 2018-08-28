// Dependencies
import React, { Component } from 'react';
import { array } from 'prop-types';

// Utils
import { isFirstRender } from '../../shared/utils/frontend';

// Styles
import './Coins.css';

class Coins extends Component {
  static propTypes = {
    coins: array
  };

  componentWillMount() {
    const { fetchCoins } = this.props;

    fetchCoins();
  }

  render() {
    const { coins: { coins } } = this.props;

    if (isFirstRender(coins)) {
      return null;
    }

    return (
      <div className="Coins">
        <h1>Top 100 Coins</h1>

        <ul>
          {coins.map((coin, key) => (
            <li key={key}>
              <span className="left">{coin.rank} {coin.name} {coin.symbol}</span>
              <span className="right">${coin.price_usd}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Coins;
