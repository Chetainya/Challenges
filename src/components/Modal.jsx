import { createPortal } from 'react-dom';
import {motion} from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      
      <motion.dialog open className="modal"
      variants={{
        hidden : {opacity : 0, x : -100},
        open : {opacity : 1 , x  : 0},
        onExit : {opacity : 0 , y: 40}
      }}
        initial="hidden"
        animate="open"
        exit="onExit"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
