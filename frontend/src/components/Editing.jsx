import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop, Field } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import  LivroService from '../services/LivroService'
import clsx from 'clsx'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
  } from '@heroicons/react/16/solid'
<style>


</style>
export default function Editing(isOpened, livro) {

    let [isOpen, setIsOpen] = useState(false)

    // dados para envio
    const [titulo, setTituloEdit] = useState('')
    const [autor, setAutorEdit] = useState('')
    const [descricao, setDescricaoEdit] = useState('')
    const [ano_publicacao, setAnoPublicacaoEdit] = useState('')
    const [editora, setEditoraEdit] = useState('')
    
    if(isOpened == true){
        setIsOpen(true)
    }

    // LivroService.getOne(isOpened.as.id).then(function(res){
        // console.log('res',res)

    // setTituloEdit(res.titulo);

    // })

    function cancelAndClean(){
      setTituloEdit('')
      setDescricaoEdit('')
      setAutorEdit('')
      setAnoPublicacaoEdit('')
      setEditoraEdit('');
      setIsOpen(false)
    }
    function editaLivro(){
      const dados = {
        "titulo" : titulo,
        "autor" : autor,
        "editora": editora,
        "descricao" : descricao,
        "ano_publicacao" : ano_publicacao
      }

    //   var add = LivroService.Insert(dados);

      setIsOpen(false)

    }
    // setTitulo(isOpened.as.titulo)

    return (
        <>
        {livro}
        <button onClick={() => setIsOpen(true)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
        <PencilIcon className="size-4 fill-white/30" />
            Editar
            </button>
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
                    
                        <br/>
                        Titulo:
                        <input 
                        value={titulo}
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}

                        

                        onChange={e => setTituloEdit(e.target.value)}
                        /> 
                        <br/>
                        Autor:
                        <input 
                        value={isOpened.as.autor}
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setAutorEdit(e.target.value)}
                        /> 
                         <br/>
                        Editora:
                        <input 
                        value={isOpened.as?.editora}
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setEditoraEdit(e.target.value)}
                        /> 
                        <br/>
                        Descrição:
                        <textarea 
                        value={isOpened.as.descricao}
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setDescricaoEdit(e.target.value)}
                        /> 
                        <br/>
                        Ano de publicação:
                        <input 
                        type="text"
                        value={isOpened.as.ano_publicacao}
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        onChange={e => setAnoPublicacaoEdit(e.target.value)}
                        /> 

                     
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