import React from 'react'
import styled from 'styled-components'

import closeIcon from '../../assets/close.svg'

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const CloseButton = styled.img`
  height: 17px;
  width: 17px;
`;

const Open = props => {
  return(
    <Container>
      <CloseButton src={closeIcon} onClose={props.onClick}/>
    </Container>
  )
}

export default Open;