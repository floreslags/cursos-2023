import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';

export const Module11 = () => {

  const Form = () => {
    // Proceso de validaciones con Yup
    const userSchema = yup.object()
    .shape({
        fullName:yup.string().required('Your Full Name is required'),
        email:yup.string().email('A valid email is required').required('Your email is required'),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(4).max(20).required(),
        confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Passwords dont match').required()
    })

    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver:yupResolver(userSchema)
    });

    // Funciones
    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='Full Name' {...register("fullName")} />
          <p className="error">{errors.fullName?.message}</p>

          <input type='text' placeholder='Email' {...register("email")} />
          <p className="error">{errors.email?.message}</p>

          <input type='number' placeholder='Age' {...register("age")} />
          <p className="error">{errors.age?.message}</p>

          <input type='password' placeholder='Password' {...register("password")} />
          <p className="error">{errors.password?.message}</p>

          <input type='password' placeholder='Confirm Password' {...register("confirmPassword")} />
          <p className="error">{errors.confirmPassword?.message}</p>
          <input type='submit' />
        </form>
      </>
    );
  };

  return (
    <div>
      <h2>Module 11 - Forms</h2>
      <Form />
    </div>
  );
};
