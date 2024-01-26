import { useState, useEffect } from "react";
import '../../../../sass/components/search.scss'

export const Search = ({ initialValue, onSearch }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, onSearch]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="header__search">
      <input
        type="text"
        placeholder="Pesquisar por nome"
        className="header__search__input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};