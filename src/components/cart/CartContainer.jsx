import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Importar herramientas
import { IoClose } from 'react-icons/io5';
import Cart from './Cart';
import { useEffect } from 'react';

const ModalCartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #00000099;
    display: flex;
`;

const ContainerDivCart = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 100%;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2000;

    @media(max-width: 470px){
        width: 250px;
    }
`;

const CartContainer = ({ isVisible, setIsVisible }) => {

    useEffect(() => {
        if (isVisible) {
            // Bloqueamos el scroll del body
            document.body.style.overflow = 'hidden';
        } else {
            // Reestablecemos el scroll cuando se cierra
            document.body.style.overflow = 'unset';
        }

        // Función de limpieza (muy importante)
        // Se ejecuta si el componente se desmonta inesperadamente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]); // Se ejecuta cada vez que isVisible cambia

    return (
        /* AnimatePresence permite que los componentes se animen al DESMONTARSE (exit) */
        <AnimatePresence>
            {isVisible && (
                <ModalCartContainer
                    as={motion.div} // Convierte el div en animable
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsVisible(false)}
                >
                    <ContainerDivCart
                        as={motion.div}
                        initial={{ x: '100%' }} // Empieza fuera de la pantalla (derecha)
                        animate={{ x: 0 }}       // Entra a su posición original
                        exit={{ x: '100%' }}    // Sale hacia la derecha
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }} // Efecto elástico
                        onClick={(e) => e.stopPropagation()} // Evita que se cierre al clickear dentro
                    >
                        <IoClose
                            color='#fff'
                            size={35}
                            style={{ cursor: 'pointer', position: "absolute", left: "-50px", top: "9px" }}
                            onClick={() => setIsVisible(false)}
                        />
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'start', width: "100%", minHeight: '50px',height: "50px", backgroundColor: '#e4e4e4', color: '#343436', fontWeight: 'bold' }}>
                            <span style={{ marginLeft: '35px' }}>Carrito</span>
                        </div>
                        <Cart />
                    </ContainerDivCart>
                </ModalCartContainer>
            )}
        </AnimatePresence>
    );
};

export default CartContainer;