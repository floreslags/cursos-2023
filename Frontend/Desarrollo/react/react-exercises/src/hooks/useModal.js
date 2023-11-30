import { useState } from 'react';

export const useModal = (initialValue = false) => {
    
    // Definicion de variables de estado
    const [isOpen, setIsOpen] = useState(initialValue);

    // Metodos
    const openModal = ()=> setIsOpen(true);
    const closeModal = ()=> setIsOpen(false);

    return [isOpen,openModal,closeModal]
}


