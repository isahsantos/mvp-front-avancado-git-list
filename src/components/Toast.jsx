import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../assets/styles/style-global.css';

const SwalAlert = withReactContent(Swal);

const Toast = ({ title, icon }) => {
  React.useEffect(() => {
    SwalAlert.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      iconHtml: `<img src="${icon}" alt="icon" style="width: 52px; height: 52px;" />`,
      title: title,
      customClass: {
        popup: 'custom-toast',
        title: 'custom-toast-title',
      },
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  }, [title, icon]);

  return null;
};

export default Toast;
