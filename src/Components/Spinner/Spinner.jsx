
// // Spinner component
// import React from 'react';
// import './Spinner.module.css';

// function Spinner() {
//   return (
//     <div className="spinner-overlay">
//       <div className="spinner">
//         <div className="spinner-dot1"></div>
//         <div className="spinner-dot2"></div>
//       </div>
//     </div>
//   );
// }

// export default Spinner;
import React from 'react';
import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

const SpinnerOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

function Spinner() {
  return (
    <SpinnerOverlay>
      <CircularProgress color="primary" />
    </SpinnerOverlay>
  );
}

export default Spinner;
