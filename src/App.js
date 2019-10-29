import React from 'react';
import styled from 'styled-components'

import Navbar from './components/Navbar/Navbar.js'
import NavbarItem from './components/Navbar/NavbarItem.js'

const Viewport = styled.div`
  height: 100%;
  width: 100%;
  background-color: #313131;
`;

const App = () => {
  return <Viewport>
    <Navbar>
      <NavbarItem />
      <NavbarItem />
    </Navbar>
  </Viewport>
}

export default App;