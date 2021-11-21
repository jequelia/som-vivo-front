import { Typography} from '@material-ui/core';
import {  Flex,MicBox,Container } from "./style";
import GraphicEq from '@material-ui/icons/GraphicEq'

function Card() {

    return (
      <Flex>
          <Container>
            <GraphicEq/>
            <h5>Audio Nome</h5>
          </Container>
      </Flex>
    );
  }
  
  export default Card;
  