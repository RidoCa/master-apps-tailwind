import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container mx-auto bg-gray-200 rounded-xl shadow'>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src={logo} alt="" className='w-36' />
        </div>
        <div>
          <p className='text-3xl text-gray-700 font-bold mb-5'>
            welcome
          </p>
        </div>
        <div>
          <p className='text-gray-500 text-lg'>
            master react with tailwind
          </p>
        </div>
        <div className='col-span-2 text-center'>
          <p className='text-3xl text-gray-700 font-bold mb-5'>
            welcome
          </p>
        </div>
        <div>
          <p className='text-gray-500 text-lg'>
            master react with tailwind
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
