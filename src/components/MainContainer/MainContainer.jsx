"use client"
import { PageStructure, Container, Button } from "./mainContainerStyles";
import { useEffect, useState } from "react";

export default function MainContainer() {
    const [randomNumber, setRandomNumber] = useState(null);

    function getRandomInt(maxNumber) {
        return Math.floor(Math.random() * maxNumber);
    };

    useEffect(() => {
        setRandomNumber(getRandomInt(2));
    }, []);

    return(
        <PageStructure>

            <Container>
                <div id="neon-bar"></div>
                <h1>hi there</h1>
                <h1>random number: {randomNumber !== null ? randomNumber : '...'}</h1>
                <Button onClick={() => setRandomNumber(getRandomInt(200))}>get a new number</Button>
            </Container>
      
        </PageStructure>
    );
}