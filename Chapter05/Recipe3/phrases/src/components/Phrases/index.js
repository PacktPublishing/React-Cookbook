// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Phrases from './Phrases';

// Actions
import {
  addPhrase,
  deletePhrase,
  fetchPhrases,
  updatePhrase
} from '../../actions/phrasesActions';

const mapStateToProps = ({ phrases }) => ({
  phrases: phrases.phrases
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addPhrase,
    deletePhrase,
    fetchPhrases,
    updatePhrase
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phrases);
