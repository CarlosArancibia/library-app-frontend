import { useState } from 'react'
import useAuthStore, { type User } from '../../store/useAuthStore'

export const LoginPage = () => {
  const [formValues, setFormValues] = useState<User>({
    username: '',
    password: '',
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const login = useAuthStore((state) => state.login)

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { username, password } = formValues
    login({ username: username.toLowerCase(), password })
  }

  return (
    <div className='flex justify-center items-center h-screen gap-20 font-semibold animate__animated animate__fadeIn'>
      <div className='absolute inset-0 bg-black opacity-85 -z-0'></div>
      <article className='z-50'>
        <h1 className='text-4xl py-5 text-center font-bold'>Iniciar sesión</h1>
        <div className='border border-[#444] rounded-2xl p-8 min-w-sm w-md backdrop-blur-[2px]'>
          <form className='flex flex-col gap-3' onSubmit={onLogin}>
            <div className='flex flex-col'>
              <label htmlFor='username'>Usuario</label>
              <input
                type='text'
                id='username'
                name='username'
                value={formValues.username}
                className='border rounded-lg p-2'
                onChange={onInputChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                id='password'
                name='password'
                value={formValues.password}
                className='border rounded-lg p-2'
                onChange={onInputChange}
              />
            </div>
            <button className='border bg-orange-200 text-black font-bold cursor-pointer rounded-lg p-2 w-full mt-3'>
              Ingresar
            </button>
          </form>
        </div>
      </article>
      <span className='fixed bottom-5 text-sm'>© CarlosArancibia</span>
    </div>
  )
}
