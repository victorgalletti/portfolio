import React from 'react';
import USFlagR from '../../assets/flags/USA.png';
import BRFlagR from '../../assets/flags/005-brazil-flag.png';

// Ícone para Inglês (EUA)
export const USFlag = () => {
  return <img src={USFlagR} alt="USA flag Rounded" width={19} height={19}/>;
}


// Ícone para Português (Brasil)
export const BRFlag = () => {
  return <img src={BRFlagR} alt="BR flag Rounded" width={19} height={19}/>;
}