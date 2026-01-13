import styled from "@emotion/styled";
import { Box, FormControl, Typography, Input, InputLabel, Button, useMediaQuery } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import { createItem } from '../../app/api';
import { useMyContext } from "context/CartContext";
import { useForm } from "react-hook-form";
import { calcularTotal } from "utils";


const ControlForm = styled(FormControl)`
  width: 70%;
`;

const ModalContainer = styled(Box)`
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  height: 50%;
  border-radius: 24px;
  border: 2px solid #ebebeb;
  padding: 20px;

  @media(max-width: 500px){
    width: 300px;
  }
`;

const DataUserModal = ({ isOpen, setWhichModal }) => {
    const { register, getValues, handleSubmit } = useForm();
    const [cart, setCart] = useMyContext();

    const isMobile = useMediaQuery('(max-width:855px)');

    const onSubmit = () => {
        const values = getValues();
        const total = calcularTotal(cart);
        const order = {
            buyer: { email: values.email, phone: values.phone, name: values.name },
            items: cart,
            total: total,
            date: new Date(),
        };
        createItem(order);
        setWhichModal('resume');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ModalContainer style={{ display: isOpen === "data" ? "block" : "none" }}>
                <AiFillCloseCircle
                    size={isMobile ? 30 : 50}
                    onClick={() => {
                        setWhichModal("");
                    }}
                    style={{ position: "absolute", right: "20px", top: "20px", cursor: 'pointer' }}
                ></AiFillCloseCircle>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: isMobile ? '1.3rem' : '2rem', textAlign: 'center' }} variant="h5">COLOQUE SUS DATOS</Typography>
                    <ControlForm>
                        <InputLabel htmlFor="my-input">Email</InputLabel>
                        <Input
                            {...register("email", { required: true })}
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </ControlForm>
                    <ControlForm>
                        <InputLabel htmlFor="my-input">
                            Nombre y apellido
                        </InputLabel>
                        <Input
                            {...register("name", { required: true })}
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </ControlForm>
                    <ControlForm>
                        <InputLabel htmlFor="my-input">
                            Numero de telefono
                        </InputLabel>
                        <Input
                            {...register("phone", { required: true })}
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </ControlForm>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Button color="primary" type="submit" style={{fontSize: isMobile ? '0.7rem' : '1rem'}}>Siguiente</Button>
                        <Button
                            style={{fontSize: isMobile ? '0.7rem' : '1rem'}}
                            color="error"
                            onClick={() => {
                                setWhichModal("");
                            }}
                        >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </ModalContainer>
        </form>
    )
}

export default DataUserModal