import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRemoveFilters } from "../context/RemoveFilters";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  border-right: 1px solid lightgrey;
  justify-content: flex-start;
  gap: 25px;
  padding-right: 75px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

const InputFilter = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid #111;
  margin-right: 10px;
  background-color: #000;
  cursor: pointer;
`

const LabelFilter = styled.label`
  font-size: 1rem;
  cursor: pointer;

`


const Filters = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [remove, setRemove] = useRemoveFilters();
    const params = new URLSearchParams(location.search);
    const [isActive, setIsActive] = useState(false);

    useEffect(() =>{
        if(remove){
            setIsActive(true);
        }
    }, [remove])

    const clearFilters = (checked) =>{
        if(isActive){
            checked = false;
            setIsActive(false);
        }
        return
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        clearFilters(e.target.checked);

        if (checked) {
            params.append(name, e.target.value);
        } else {

            const values = params.getAll(name).filter((v) => v !== e.target.value);
            params.delete(name);
            values.forEach((v) => params.append(name, v));
        }

        navigate({ search: params.toString() });
    };

    return (

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginTop: "40px", padding: "0 10px 0px 20px" }}>

            <Typography variant="h4"
                sx={{
                    whiteSpace: "nowrap",
                    marginBottom: "24px",
                    fontSize: "1.2rem",
                }}>
                Todos los productos
            </Typography>

            <FiltersContainer>
                <h5 style={{ fontWeight: "600" }}>Filtros</h5>

                <Box>
                    <InputContainer>
                        <InputFilter type="checkbox" id="zapatillas" name="categoria" value="zapatillas" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="zapatillas">Zapatillas</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="ropa" name="categoria" value="ropa" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="ropa">Ropa</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="accesorios" name="categoria" value="accesorios" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="accesorios">Accesorios</LabelFilter>
                    </InputContainer>
                </Box>

                <Box>
                    <InputContainer>
                        <InputFilter type="checkbox" id="air force" name="modelo" value="air force" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="air force">Air Force</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="jordan 1" name="modelo" value="JORDAN AIR 1" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="jordan 1">Jordan 1</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="samba" name="modelo" value="samba" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="samba">Samba</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="campus" name="modelo" value="campus" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="campus">Campus</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="suede" name="modelo" value="suede" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="suede">Suede</LabelFilter>
                    </InputContainer>

                    <InputContainer>
                        <InputFilter type="checkbox" id="superstar" name="modelo" value="superstar" onChange={handleCheckboxChange} />
                        <LabelFilter htmlFor="superstar">Superstar</LabelFilter>
                    </InputContainer>
                </Box>
            </FiltersContainer>
        </Box>
    )
}

export default Filters