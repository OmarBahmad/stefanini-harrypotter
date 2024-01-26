import { useState, useEffect } from "react";
import '../../../../sass/components/search.scss'

export const Search = ({ initialValue, onSearch }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Cria um timer para executar a função de busca depois de 1.5 segundos
    const timer = setTimeout(() => {
      onSearch(value);
    }, 1500);

    // Limpa o timer se o valor do input mudar
    return () => {
      clearTimeout(timer);
    };
  }, [value, onSearch]);

  // Atualiza o valor do input quando o usuário digita
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Renderiza o input com o valor e o evento de mudança
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