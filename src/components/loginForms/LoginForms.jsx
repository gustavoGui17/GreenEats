import { useState } from 'react'

export default function LoginForms() {
  const [text, setText] = useState('')

  const handleChangeText = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <h1>Login</h1>
      <h1>E-mail ou CPF</h1>
      <input name='text' onChange={handleChangeText} value={text} />
      <h1>Senha</h1>
      <input type="password" />
    </div>
  )
}