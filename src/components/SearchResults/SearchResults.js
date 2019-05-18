import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';
import {Link} from 'react-router-dom';
import List from '../List/List';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.node,
  }

  render() {
    const {cards, id} = this.props;
    return (
      <section>
      <Container>
        <div className={styles.component}>
          {cards.map(cardData => (
            <Link to={`/list/${id}`}>
            <Card key={cardData.id} {...cardData}>
            </Card></Link>
          ))}
        </div>
      </Container>
      </section>
    );
  }
}

export default SearchResults;
