import toast, { Toaster } from 'react-hot-toast'
import css from "./SearchBar.module.css"
import { FaSearch } from "react-icons/fa"
import { FC, FormEvent } from 'react'

interface SearchBarProps {
  onSubmit: (inputSearch: string) => void;
}
const SearchBar:FC<SearchBarProps> = ({ onSubmit }) => {
    
const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target  as HTMLFormElement;
    const inputSearch = (form.querySelector<HTMLInputElement>('input[name="search"]') || {}).value;
          if (!inputSearch || inputSearch.trim() === "") {
              toast('Please enter search term!', {
                  style: {
                      borderRadius: '10px',
                      background: 'linear-gradient(269deg, #10d1eb 0%, #e260e2 80%)',
                      color: '#fff',
                  },
              });
              return;
          }
    onSubmit(inputSearch); 
  }

  return (
<header className={css.header_search} id="header">
    <form className={css.form} onSubmit ={handleOnSubmit}>
       <input className={css.input_search} type="text" autoComplete="off" autoFocus  placeholder="Search images and photos" name="search"/>
       <button className={css.btn_search} type="submit"><FaSearch  size='16' fill='#010147'/></button>
       <Toaster position="top-right" reverseOrder={false}/>
  </form>
</header>

  )
}

export default SearchBar