import { Container } from "react-bootstrap";
import styled from "styled-components";

function Loading() {

    return(
        <Container  >
            <div >
                <LoadingDiv ></LoadingDiv>
                <LoadingDiv ></LoadingDiv>
                <LoadingDiv ></LoadingDiv>
            </div>
        </Container>
    )
}

const LoadingDiv = styled.div `
    display: inline-block;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 180%;
    background-color: black;
    position: relative;
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  
  
    @keyframes loading {
        0%   {left:0px;}
        12%  {left:100px;}
        24%  {left:200px;}
        36%  {left:100px;}
        48% {left:0px;}
        60% {left:-100px;}
        72% {left:-200px;}
        84% {left:-100px;}
        100% {left:0px;}
    }
`

export default Loading