import clsx from 'clsx'
import './App.css'
import "tailwindcss";
import { useState, useEffect } from "react";
import axios from "axios";
import Insert from './components/Insert';
import Editing from './components/Editing';
import Removing from './components/Removing';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import LivroService from './services/LivroService';


export default function App() {
  const [livros, setLivros] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    if(search){
      setPage(1);
    }
    axios
      .get(`http://127.0.0.1:8000/api/livros?search=${search}&page=${page}`)
      .then((res) => {
        setLivros(res.data.data);
        setTotalPages(res.data.last_page);
        setCurrentPage(res.data.current_page);
      });


  }, [search, page, currentPage]);


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
  
      setPage(page);
      setIsOpen(isOpen)
    }
  };
  const handleRemove = (id) => {
    console.log('hadle remove')
    // LivroService.remove(id).then(() => {
      console.log('handle active')
      
    // });
  };

  return (
 
    <div className="p-4">
      <left>
        <img src="books.png" width={100}/>
        <br/>
      </left>
      <div className='grid grid-cols-2'>
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
          <Insert isOpened={isOpen}/>
      </div>  

      <div className="w-full max-w-md px-4">
          </div>
            <ul className="border rounded p-4 bg-white shadow">
              {livros.map((livro) => (
                <li key={livro.id} className="border-b py-2">
                  {livro.titulo} - {livro.autor} - {livro.descricao} 
                 
                  <Menu>
                    <MenuButton className="menuControls 
                    inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white 
                    shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 
                    data-[focus]:outline-1 data-[focus]:outline-white">
                      <ChevronDownIcon className="size-4 fill-white/60" />
                    </MenuButton>

                    <MenuItems
                      transition
                      anchor="bottom end"
                      className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                      <MenuItem >
                        <Editing as={false, livro} />
                      </MenuItem>
                      <MenuItem>
                        <Removing as={false, livro} onRemove={(id) => {
                            setLivros(livros.filter((livro) => livro.id !== id));

                        }}/>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                
                </li>
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 text-sm font-medium rounded ${
                    currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setPage(page + 1)}
              >
                Próximo
              </button>
              
            </div>
            <span>Página {page} de {totalPages}</span>
      </div>
  );
}


