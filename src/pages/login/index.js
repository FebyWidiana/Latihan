import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { Eye, EyeOff } from 'react-feather'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const pressShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }
  const login = () => {
    console.log('test')
    setLoading(!loading)
    setTimeout(() => {
      setLoading(false)
      router.push('/dashboard')
    }, 3000)
  }
  return (
    <section className='bg-login bg-cover bg-center flex min-h-screen flex-1 flex-row lg:flex-col justify-center lg:px-8'>
      <div className='w-full sm:mx-auto sm:max-w-sm'>
        <div className='polymorphism p-20 h-full sm:h-auto flex flex-col'>
          <div className='text-center sm:text-left text-3xl sm:text-lg text-[#ecd8ab] font-bold'>LOGIN</div>
          <div className='mb-3 text-yellow sm:text-black'>
            <input type="email" name="email" id="email" className="bg-transparent border-yellow border-[1px] sm:border-0 sm:border-gray-300 text sm:bg-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email" required=""></input>
          </div>
          <div className='relative text-yellow sm:text-black'>
            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="password" className="bg-transparent border-yellow border-[1px] sm:border-gray-300 text sm:bg-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
            <button onClick={e => pressShow(e)} className='absolute right-2 bottom-2 text-gray-400 sm:text-black text-sm font-semibold'> {showPassword ? <Eye /> : <EyeOff />}</button>
          </div>
          <div className='order-5 sm:order-none flex justify-between text-xs text-center text-yellow mt-2'>
            <div className='flex items-center order'>
              <input id="default-checkbox" type="checkbox" value="" className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2' />
              <label for="default-checkbox" className=''>Remember Me</label>
            </div>
            <Link href="/password" >forgot password ?</Link>
          </div>

          <div className='text-center my-3'>
            <button onClick={login} className='bg-gray-100 text-yellow rounded-lg p-2 flex'> {loading &&
              <svg class="animate-spin w-6 h-6 stroke-black mr-2" viewBox="0 0 256 256"><line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>}
              login
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
