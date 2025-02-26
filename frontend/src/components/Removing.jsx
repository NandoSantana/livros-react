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
export default function Removing(isOpened, livro, onRemove) {


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

    function removeLivro(){
        const dados = {
            "titulo" : titulo,
            "autor" : autor,
            "editora": editora,
            "descricao" : descricao,
            "ano_publicacao" : ano_publicacao
        }
    
        isOpened.onRemove(isOpened.as.id)
        LivroService.remove(isOpened.as.id);

        return setIsOpen(false)

        

    }
    function cancelAndClean(){
        setIsOpen(false)
    }
    return (
        <>
        {livro}
        <button onClick={() => setIsOpen(true)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <TrashIcon className="size-4 fill-white/30" />
                Remove
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
                    
                    <DialogTitle className="text-lg font-bold">Deseja remover o livro?</DialogTitle>
                    <Field>
                        <br/>
                        Titulo: {isOpened.as.titulo}
                        
                        </Field>
                        <br/>
                        <div className="flex gap-4">
                        <button onClick={() => cancelAndClean(false)}>Cancel</button>
                        <button onClick={() => removeLivro()}>Remover</button>
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