import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {cards} from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.node,
  }

  render() {
    const {cards} = this.props;
    return (
      <section>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
