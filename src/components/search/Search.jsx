import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange, onSubmit }) => (
  <>
    <form className="Header" onSubmit={onSubmit}>
      <label htmlFor="text">NEWS</label>
      <input
        id="text"
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />
      <button>Search</button>
    </form>
  </>
);

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
