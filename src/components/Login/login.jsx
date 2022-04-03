import React, {useState} from 'react'
import FormComponent from '../Form/form';
import { ToastContainer } from 'react-toastify';
import { axiosConfig } from '../../config/axiosconfig.js'
import { errorToast, successToast } from '../../config/toastConfig.js';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

  const navigate = useNavigate();

  const fields = [
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Enter Email',
      value: '',
      isRequired: true,
    },
    {
      name: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      value: '',
      isRequired: true,
    }
  ]

  const title = 'Login';
  const linkTitle = 'Not a member ?'

  const [formFields, setformFields] = useState(fields);

  const updateFieldValue = (field, event) => {
    const tempFields = [...formFields];
    tempFields.map((x) => {
      if(x?.name === field?.name){
        x.value = event?.target.value;
        x.isRequired = event?.target.value.trim().length === 0;
      }
      return x;
    })
    setformFields(tempFields);
  }

  const validateAndSubmitForm = (event) => {
    event.preventDefault();
    
    const payload = formFields.map(x => {
      return {
        [x.name] : x.value
      }
    })

    const modfPayload = payload.reduce((result, current) => {
      return Object.assign(result, current);
    }, {})

    axiosConfig.post("/login", modfPayload)
    .then((response) => {
      successToast(response.data);
      setTimeout(() => {
        navigate('/home');
      }, 1000)
    }).catch((err) => {
      errorToast(err?.data);
    })

    setformFields(
      formFields.map(x => {
        return {
          ...x,
          value: '',
          isRequired : true
        }
      })
    )
  }

  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <ToastContainer />
      <FormComponent title={title} fields={formFields} submitForm={validateAndSubmitForm} showLink={true}
        submitText={'Login'} showSubmit={true} updateFieldValue={updateFieldValue} linkTitle={linkTitle}
        linktext={'Sign up now'} link={'/'}
      />
    </div>
  )
}

export default LoginComponent