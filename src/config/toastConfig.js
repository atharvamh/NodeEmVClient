import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const options = {
    position: toast.POSITION.TOP_CENTER,
    className: 'custom-toast',
    autoClose: 3000,
    pauseOnHover: true,
    closeOnClick: true
}

const errorToast = (message) => {
    return toast.error(message, options);
}

const successToast = (message) => {
    return toast.success(message, options) 
}

export { errorToast, successToast }