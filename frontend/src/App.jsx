// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Listing from './components/Listing'
import { Description, Field, Input, Label } from '@headlessui/react'

import { Fragment } from 'react'
import clsx from 'clsx'
import Example from './components/Example'
import './App.css'
import "tailwindcss";

// import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Insert from './components/Insert';

export default function App() {
  const [livros, setLivros] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/livros?search=${search}&page=${page}`)
      .then((res) => {
        setLivros(res.data.data);
        setTotalPages(res.data.last_page);
      });
  }, [search, page]);

  return (
    <div className="p-4">
      <div className='grid grid-cols-3'>
   
          <input
            id='search'
            type="text"
            placeholder="Buscar por Nome..."
            className={clsx(
              'w-full p-10 block bg-gray-900 h-auto rounded-lg border-none text-sm/6 text-white',
              'focus:outline-none'
            )}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
    
       
          <button className="text-align-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
            </svg>
            Procurar</button>
          
       
         
            <Insert isOpened={isOpen}/>

          
      </div>  

      <div className="w-full max-w-md px-4">
          </div>
            <ul className="border rounded p-4 bg-white shadow">
              {livros.map((livro) => (
                <li key={livro.id} className="border-b py-2">{livro.titulo}</li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setPage(page - 1)}
              >
                Anterior
              </button>
              <span>Página {page} de {totalPages}</span>
              <button
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setPage(page + 1)}
              >
                Próximo
              </button>
            </div>
      </div>
  );
}


