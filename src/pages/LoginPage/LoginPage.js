import React from 'react'
import './LoginPage.scss';
import Header from '../../components/Header/Header';

export default function LoginPage() {
  return (
    <div className='login'>
        <Header />
        <p className='login__header'>Welcome to MLSA</p>
        <p className='login__enter-text'>Log in to enter</p>
        <label className='login__email-label' htmlFor="email">Email</label>
        <input className='login__email-input' type="text" id="email" placeholder='Enter your email' />
        <label className='login__password-label' htmlFor="password">Password</label>
        <input className='login__password-input' type="text" id="password" placeholder='Enter your password' />
      
    </div>
  )
}
