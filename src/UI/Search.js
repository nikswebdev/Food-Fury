import classes from './Search.module.css';
import SearchIcon from '../Nav/Search/SearchIcon';

const Search = () => {
  return (
    <div className={classes.search__container}>
      <div className={classes.search__icon}>
        <SearchIcon />
      </div>
      <label htmlFor='search-restaurant'>Search</label>
      <input id='search-restaurant' type='text' />
    </div>
  );
};

export default Search;
