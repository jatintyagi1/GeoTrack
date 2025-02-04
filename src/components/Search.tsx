interface SearchProps {
  onSearch: (query: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

const Search: React.FC<SearchProps> = ({ onSearch, searchInputRef }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search location..."
        onChange={handleInputChange}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default Search;
