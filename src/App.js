import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";
import { CounterContext } from "./Context";

//➡️ En este proyecto se muestra la creacion de un formulario con sus validaciones
// creado con componentes de mui
// se utliza un componente llamada stepper que es el que marca los pasos de un formulario, para enterder el funcionamiento de ese stepper puedo tambien ver el ejemplo de la pagina oficial mui.com en el aparatado de components
//este proyecto practicamente lo unico nuevo que enseña es el componente de stepper
// es mejor para ver el proyecto (funtioncomponents) para todo el tema de formularios 


function App() {
  const counterData = useContext(CounterContext);
  console.log(counterData);
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button onClick={() => counterData.resta()}> - </Button>
          <Button onClick={() => counterData.suma()}> + </Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
