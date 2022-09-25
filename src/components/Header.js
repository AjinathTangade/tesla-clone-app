import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {

  const [burgeStatus, setBurgeStatus] = useState(false);
  return (
    <div className="header">
        <Container>
            <a>
              <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
            </Menu>
            <RightMenu>
              <a href="#">Shop</a>
              <a href="#">Tesla Account</a>
              <MenuIcon  onClick={()=>setBurgeStatus(true)}/>
              </RightMenu>
              
              <BurgeNav show={burgeStatus}>
                <Closewrapper>
                    <CustomClose onClick={()=>setBurgeStatus(false)}/>
                </Closewrapper>
                
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>
                <li><a href="#">Existing Invrntory</a></li>

              </BurgeNav>
            
        </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 17px;
    flex-wrap: nowrap;
    font-size: 13px;
  }
  a:hover{
    background-color: #efeff5;
    border-redius: 12px;
    padding: 10px 10px;
    border-radius: 10px;
  }
  @media(max-width:768px){
    display: none;
  }
`
const RightMenu = styled.div`
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 17px;
  margin-right; 10px;
  
}   
`
const CustomMenu= styled(MenuIcon)`
  cursor: pointer;
`

const BurgeNav= styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a{
      font-weight: 600;
    }
  }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const Closewrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`