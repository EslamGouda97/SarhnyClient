// // Modal component
// import React from 'react';
// import './Modal.module.css';

// function Modal({ children, onClose }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <button className="modal-close" onClick={onClose}>
//             &times;
//           </button>
//         </div>
//         <div className="modal-body">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React from 'react';

function Modal({ children, open, onClose }) {
  return (
    <>
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '0.25rem',
              boxShadow: '0 0 1rem rgba(0, 0, 0, 0.5)',
              position: 'relative',
            }}
          >
            {children}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;