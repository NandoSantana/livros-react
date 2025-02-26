import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop, Field } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import  LivroService from '../services/LivroService'
import clsx from 'clsx'

export default function Insert(isOpened) {
  let [isOpen, setIsOpen] = useState(false)

  // dados para envio
  let [titulo, setTitulo] = useState('')
  let [autor, setAutor] = useState('')
  let [descricao, setDescricao] = useState('')
  let [ano_publicacao, setAnoPublicacao] = useState('')
  let [editora, setEditora] = useState('')

    if(isOpened == true){
        setIsOpen(true)
    }
    function cancelAndClean(){
      setTitulo('')
      setDescricao('')
      setAutor('')
      setAnoPublicacao('')
      setIsOpen(false)
    }
    function adicionaLivro(){
      const dados = {
        "titulo" : titulo,
        "autor" : autor,
        "descricao" : descricao,
        "ano_publicacao" : ano_publicacao
      }

      var add = LivroService.Insert(dados);

      setIsOpen(false)

    }
    return (
      <>
        <button onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
          Inserir livro</button>
        <AnimatePresence>
          {isOpen && (
            <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10 focus:outline-none">
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black-100"
              />
              
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                  <div className="fixed bg-black" >
                    <DialogPanel
                      as={motion.div}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full max-w-md rounded-xl  bg-purple/10 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                  
                    <DialogTitle className="text-lg font-bold">Adicione um livro</DialogTitle>
                    <Field>
                      <br/>
                      Titulo:
                      <input 
                        value={titulo}
                        className={clsx(
                          'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setTitulo(e.target.value)}
                      /> 
                      <br/>
                      Autor:
                      <input 
                        value={autor}
                        className={clsx(
                          'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setAutor(e.target.value)}
                      /> 
                      <br/>
                      Editora:
                      <input 
                        value={editora}
                        className={clsx(
                          'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setEditora(e.target.value)}
                      /> 
                      <br/>
                      Descrição:
                      <textarea 
                        value={descricao}
                        className={clsx(
                          'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setDescricao(e.target.value)}
                      /> 
                      <br/>
                      Ano de publicação:
                      <input 
                      type="text"
                        value={ano_publicacao}
                        className={clsx(
                          'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setAnoPublicacao(e.target.value)}
                      /> 

                      </Field>
                      <br/>
                      <div className="flex gap-4">
                        <button onClick={() => cancelAndClean(false)}>Cancel</button>
                        <button onClick={() => adicionaLivro()}>Adicionar</button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </>
    )
}