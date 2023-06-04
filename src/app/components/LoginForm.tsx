"use client"

import React, { FormEvent, useState } from 'react'
import { supabase } from '../lib/supabaseClient';

const handleSubmit = (e: FormEvent<HTMLFormElement>, email: string, password: string) => {
  e.preventDefault();

  supabase.auth.signInWithPassword({
    email: email,
    password: password
  }).then((response) => {
    if (response.data.session !== null) window.location.reload();
  }).catch((error) => {
    // console.log(error);
  })
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => { handleSubmit(e, email, password); setEmail(''); setPassword(''); } } className="flex flex-col items-center justify-center h-full gap-6">
      <h1 className="text-2xl font-semibold">Accés admin</h1>

      <input className="w-64 p-2 text-center border rounded outline-slate-400 border-slate-400" type="text" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />

      <input className="w-64 p-2 text-center border rounded outline-slate-400 border-slate-400" type="password" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button className="p-2 rounded bg-slate-300 outline-slate-400 outline" type="submit">Inicia sessió</button>

      <a href="/" className="pt-4 underline">Torna</a>
  </form>
  )
}

export default LoginForm;
