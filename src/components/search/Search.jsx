import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange, onSubmit }) => (
  <>
    <form className="Header" onSubmit={onSubmit}>
      <label htmlFor="text">NEWS</label>
      <input
        id="text"
        placeholder="what news"
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
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchBar;
