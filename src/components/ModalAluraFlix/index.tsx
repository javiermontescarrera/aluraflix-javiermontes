import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAluraFlixContext } from "../../context/AluraFlix";
import styles from "./ModalAluraFlix.module.css";

const ModalAluraFlix = ({children}: {children: React.ReactNode}) => {
  const { abrirModal, setAbrirModal } = useAluraFlixContext();
  const handleClose = () => setAbrirModal(false);

  return (
    <div>
      
      <Modal
        open={abrirModal}
        onClose={handleClose}
        // className={styles.customBackdrop}
        // slotProps={{
        //   root: { className: styles.overlay },
        //   // root: {
        //   //   style: {
        //   //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //   //     backdropFilter: 'blur(5px)',
        //   //   },
        //   // },
        // }}
      >
        <Box
          // className={styles.modal} 
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAluraFlix;