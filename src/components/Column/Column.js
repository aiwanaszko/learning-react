import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node,
  }

  addCard(title){
  this.setState(state => (
    {
      cards: [
        ...state.cards,
        {
          key: state.cards[state.cards.length-1].key+1,
          title,
        }
      ]
    }
  ));
}

  render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
          <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
          </div>
          <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section>
      )
    }
}

export default Column;
