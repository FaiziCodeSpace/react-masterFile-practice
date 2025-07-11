import styled from "styled-components"
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useState } from "react";

const Header = styled.h1`
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid red; 
    margin: 6px;
`;

const Justify = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`;

function StyleComponent(){
    const [display, setdisplay] = useState(true); 
    return(
        <>
            <Alert variant="danger">TSK TSK TSK</Alert>
              <Button variant="info">Hey</Button>
              <Button variant="danger">Hey</Button>
              { display? 
            <Justify>
              <Header>Hello World</Header>
              <Header>Hello Universe</Header>
              <Header>Hello Milkyway</Header>
              <Header>Hello Einstien</Header>
              <Header>Hello Jupitor</Header>    
            </Justify>: null
}
            <button onClick={()=>setdisplay(!display)}>Toggle</button>
            
        </>
    )
}

export default StyleComponent;