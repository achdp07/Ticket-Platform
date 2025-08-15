import React from 'react'

const Login = () => {
  return (
    <div className=' flex w-full h-screen' >
      <div className='mt-6 ml-6 '>
      <a href="/"><img src="src\assets\ICON BLEU.png" alt="" width={40} height={10}/></a>
      </div>
      <div className='items-center justify-center mx-auto my-auto bg-white p-4 rounded-2xl shadow-md' >

        <h1 className='text-3xl font-bold text-gray-700 text-center mb-2'>
        Welcome Back!</h1>
        <p className='text-base text-center font-medium text-gray-500'>
        Please enter your details!</p>

        {/* Login Form */}
        <form className='flex flex-col mt-4 space-y-4'>
          <div>
            <label>Email</label>
            <input type="text" placeholder='Enter your Username' 
            className='w-full border border-blue-300 p-2 rounded-lg' />
          </div>

          <div>
            <label>Password</label>
            <input type="password" placeholder='Enter your Password' 
            className='w-full border border-blue-300 p-2 rounded-lg' />
          </div>
            
          <div className='flex space-between items-center'>
            <input type="checkbox" id='keep' className='mr-2'/>
            <label for="Keep">Keep me looged in</label>

            <div>
            <button className='text-base font-medium text-blue-500 ml-4'>forgot password?</button>
            </div>
          </div>

          <div className='mt-6 text-center gap-y-2 flex flex-col'>
          <button type="submit" 
          className='active:scale-[.95] active-duration-75 hover:scale-[1.01] ease-in-out 
          transition-all bg-blue-600 text-white font-medium
          py-2 px-4 rounded-lg'>
          Sign in</button>

          <button className='border p-2 rounded-lg'>
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" className='inline mr-2' />
          Sign in with Google
          </button>
          </div>

          <div>
            <p className='text-sm text-gray-500 text-center'>
            Don't have an account? <a href="/register" className='text-blue-600 font-medium ml-2'>Sign up</a>
            </p>
          </div>
        </form>

        
        
        
        

      </div>

      {/* Image Section */}<div className='hidden lg:flex h-lg w-full lg:w-1/3 
        bg-blue-600 flex rounded-tl-2xl rounded-bl-2xl'>
      </div>        
    </div>
  )
}

export default Login