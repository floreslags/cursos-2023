import React from 'react'
import { useForm } from '../hooks/useForm';
import { Loader } from './Loader';
import { Message } from './Message';

const initialForm = {
    name:'',
    email:'',
    subject:'',
    comments:''
}

const formValidations = (form)=>{
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; // Solo admitir letras y espacios en blanco
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; // Solo acepta direcciones de correos electronico
    let regexComments = /^.{1,255}$/; // Solo admite 255 caracteres

    // Definicion de casos de uso

    if(!form.name.trim()){
        errors.name = "The 'name' field is required";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "The 'name' field only admits letters and blank spaces";
    }

    if(!form.email.trim()){
        errors.email = "The 'email' field is required";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "The 'email' field is invalid";
    }

    if(!form.subject.trim()){
        errors.subject = "The 'subject' field is required";
    }

    if(!form.comments.trim()){
        errors.comments = "The 'comments' field is required";
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "The 'comments' field must not exceed 255 characteres";
    }

    return errors;
}

let styles = {
    fontWeight:'bold',
    color:'#dc3545'
}

export const ContactForm = () => {
    const {form,errors,loading,response,handleChange,handleSubmit,handleBlur} = useForm(initialForm,formValidations);
    
  return (
    <div>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name='name' 
            placeholder='Type your name' 
            onChange={handleChange} 
            value={form.name} required 
            onBlur={handleBlur}/>
            {errors.name && <p style={styles}>{errors.name}</p>}

            <input type="email" 
            name='email' 
            placeholder='Type your email' 
            onChange={handleChange} 
            value={form.email} required 
            onBlur={handleBlur}/>
            {errors.email && <p style={styles}>{errors.email}</p>}

            <input type="text" 
            name='subject' 
            placeholder='Type the subject' 
            onChange={handleChange} 
            value={form.subject} required 
            onBlur={handleBlur}/>
            {errors.subject && <p style={styles}>{errors.subject}</p>}

            <textarea name="comments" cols="50" rows="5" placeholder='Type your comments'
            onChange={handleChange} 
            onBlur={handleBlur}
            value={form.comments} 
            required
            ></textarea>
            {errors.comments && <p style={styles}>{errors.comments}</p>}

            <input type="submit"/>

        </form>
        {loading && <Loader/>}
        {response && <Message msg="The form data has been submited successfully" bgColor='#198754'/>}
    </div>
  )
}
