import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {infoSettings} from '../../data/dataStore.js';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <Hero titleText={infoSettings.title} imageSource ={infoSettings.image} />
    <p>{infoSettings.content}</p>
  </Container>
);

export default Info;
