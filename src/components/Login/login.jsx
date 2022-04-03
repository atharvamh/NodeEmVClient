import React, {useState} from 'react'
import FormComponent from '../Form/form'

const LoginComponent = () => {

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
        name : x.name,
        value: x.value
      }
    })
  }

  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <FormComponent title={title} fields={formFields} submitForm={validateAndSubmitForm} showLink={true}
        submitText={'Login'} showSubmit={true} updateFieldValue={updateFieldValue} linkTitle={linkTitle}
        linktext={'Sign up now'} link={'/'}
      />
    </div>
  )
}

export default LoginComponent