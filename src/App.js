
import React from 'react';
import Header from './components/Header';
import SecondAppBar from './components/SecondAppBar'
import Main from './components/Main';
import Mail from './components/Mail';
import RightDrawer from './components/RightDrawer';
import DoubleRightDrawer from './components/DoubleRightDrawer'


export default function ButtonAppBar() {

  return (
    <React.Fragment>
      <Header />
      <DoubleRightDrawer/>
      <SecondAppBar/>
      <Main />
      <Mail/>
      <Mail/> 
      <Mail/>
      <Mail/>
      <Mail/>
      <Mail/>
      <Mail/>
      <Mail/>
      <Mail/>
      <Mail/>
    
      <RightDrawer/>
    </React.Fragment>
  );

}