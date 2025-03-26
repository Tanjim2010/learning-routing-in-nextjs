"use client"

import { RegisterUser } from "../actions/auth/RegisterUser";


const Register = () => {
    const handleRegisterForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.name.value;
        // const email = form.email.value;
        const password = form.password.value;
        const payload = {username, password};
        // console.log(payload)
        const result = await RegisterUser(payload);
        // console.log(result)
    }
    return (
        <div className="max-w-4xl mx-auto min-h-screen items-center flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Register Now</h1>
            <form onSubmit={handleRegisterForm} className="flex w-full flex-col space-y-3 justify-center items-center my-10">
                <input className="bg-white text-black px-4 py-2 rounded-lg outline-none w-full" name='name' type="text" placeholder='Username' />
                {/* <input className="bg-white text-black px-4 py-2 rounded-lg outline-none w-full" name='email' type="email" placeholder='Email' /> */}
                <input className="bg-white text-black px-4 py-2 rounded-lg outline-none w-full" name='password' type="password" placeholder='Password' />
                <button type='submit' className='px-4 py-2 w-full rounded-xl border-2 hover:bg-white transition-colors delay-75 cursor-pointer hover:text-black'>Register</button>
            </form>
        </div>
    );
};

export default Register;