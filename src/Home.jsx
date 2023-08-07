import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full bg-no-repeat bg-cover flex flex-col gap-20 justify-center items-center'>
      <h1 className='text-4xl font-extrabold text-white uppercase text-center' >WELCOME QUIZ APP</h1>
      <button onClick={()=> navigate("/quiz")} className='bg-blue-500 hover:bg-blue-600 text-white w-40 font-extrabold text-lg uppercase py-2 px-4 rounded-lg shadow-md focus:outline-none'>Start</button>
    </div>
  )
}

export default Home
