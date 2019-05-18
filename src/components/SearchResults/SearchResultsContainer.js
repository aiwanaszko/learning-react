import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch, getListForCard } from '../../redux/cardsRedux.js';
import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state.cards, props.match.params.searchString),
  listId: getListForCard(state.lists, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
