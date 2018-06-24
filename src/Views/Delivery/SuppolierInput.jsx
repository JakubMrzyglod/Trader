import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {ChangeSuppolier, GetSuppolierValue} from '../../Store/Actions.js';
import Products from '../../Data/Warehouse.json'

const suggestions = Products.Products ;
function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
    label= 'Nazwa'
    fullWidth
      InputProps={{
        inputRef: ref,
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.Name, query);
  const parts = parse(suggestion.Name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}



const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

class ProductInput extends React.Component {
  
  state = {
    value: '',
    suggestions: [],
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength < 1
      ? []
      : this.props.Suppoliers.filter(suggestion => {
          const keep =
            count < 5 && suggestion.Name.toLowerCase().slice(0, inputLength) === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
  }

  getSuggestionValue = (suggestion)=> {
    this.props.GetSuppolierValue(suggestion)
    return suggestion.Name;
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.props.ChangeSuppolier('Name' ,newValue)
  };

  render() {
    const { classes, SuppolierName } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        onSuggestionSelected={this.onSuggestionSelected}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          value: SuppolierName,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

ProductInput.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
    return{
        Suppoliers: state.Delivery.Suppoliers,
        SuppolierName: state.Delivery.Suppolier.Name
    }};
  
  const mapDispatchToProps = {ChangeSuppolier, GetSuppolierValue};
  
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductInput));
