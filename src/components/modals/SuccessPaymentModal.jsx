import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const SuccessPaymentModal = ({ isOpen, setWhichModal }) => {
  return (
    <Dialog
      open={isOpen === "success"}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: { borderRadius: 20, padding: '10px' }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton
          onClick={() => {
            setWhichModal("");
            window.location.href = "/";
          }}
        >
          <IoMdCloseCircleOutline />
        </IconButton>
      </Box>


      <DialogContent sx={{ textAlign: 'center', pb: 4 }}>
        <FaCheckCircle color={'#4caf50'} size={80} style={{ marginBottom: 2 }} />

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          ¡Pago Exitoso!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Tu pedido ha sido procesado correctamente.
        </Typography>

      </DialogContent>
    </Dialog >
  );
};

export default SuccessPaymentModal;