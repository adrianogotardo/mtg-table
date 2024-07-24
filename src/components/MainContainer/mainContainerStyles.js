import styled from "styled-components";

const PageStructure = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1C1C1E;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  position: relative;
  color: white;

  h1 {
    margin: 10px;
  }

  #neon-bar {
    position: absolute;
    top: -5px;
    min-height: 5px;
    min-width: 80vw;
    background-color: #A5B319;
    border-radius: 8px 8px 0px 0px;
  }
`;

const Button = styled.button`
  margin: 10px;
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export { PageStructure, Container, Button };