import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAluraFlixContext } from "../../context/AluraFlix";
// import styles from "./ModalAluraFlix.module.css";

const ModalAluraFlix = ({children}: {children: React.ReactNode}) => {
  const { abrirModal, setAbrirModal } = useAluraFlixContext();
  const handleClose = () => setAbrirModal(false);

  const style = {
    position: 'absolute',
    top: '0px',
    left: '50%',
    transform: 'translate(-50%, -6900%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
  };
  
  return (
    <div>
      
      <Modal
        open={abrirModal}
        onClose={handleClose}
      >
        <Box 
          sx={style}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAluraFlix;