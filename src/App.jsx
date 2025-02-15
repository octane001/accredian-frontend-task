import { useState } from 'react';
import logo from './assets/mobile_ss.png';
import { useForm } from 'react-hook-form';

const App = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://accredian-backend-task-hb4k.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Submitted successfully!');
        setOpenPopUp(false); // Close popup after successful submission
      } else {
        console.error('Failed to submit referral.');
      }
    } catch (error) {
      console.error('An error occurred.', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="https://accredian.com/#courses" className="text-[#1A73E8] font-bold text-xl">accredian</a>
          <button className="ml-4 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" aria-label="View Courses">
            Courses
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:underline">Refer & Earn</a>
          <a href="#" className="text-gray-600 hover:underline">Resources</a>
          <a href="#" className="text-gray-600 hover:underline">About Us</a>
          <button className="px-3 py-1 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-200" onClick={() => setOpenPopUp(true)} aria-label="Login">
            Login
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" aria-label="Try for free">
            Try for free
          </button>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="border-b border-gray-200 flex justify-between flex-grow rounded-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-10 px-4">
            <a href="#" className="text-blue-500 border-b-2 border-blue-500 py-2">Refer</a>
            <a href="#" className="text-gray-600 py-2 hover:text-blue-500">Benefits</a>
            <a href="#" className="text-gray-600 py-2 hover:text-blue-500">FAQs</a>
            <a href="#" className="text-gray-600 py-2 hover:text-blue-500">Support</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center m-12">
        <div className="w-[1260px] h-[672px] pl-8 px-5 flex justify-between items-center py-12 bg-[#EEF5FF] shadow-xl rounded-3xl">
          {/* Left Section */}
          <div className="w-96 h-96 flex flex-col justify-evenly">
            <h1 className="text-7xl font-bold">Let&apos;s Learn<br />& Earn</h1>
            <p className="text-gray-600 text-3xl">
              Get a chance to win<br />
              up to <span className="text-blue-500 font-semibold">Rs. 15,000</span>
            </p>
            <button className="px-6 py-2 w-[155px] text-center bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => setOpenPopUp(true)} aria-label="Refer Now">
              Refer Now
            </button>
          </div>

          {/* Right Section */}
          <div className="ml-16 w-[814px] h-[725px]">
            <img src={logo} alt="Mobile app screenshot" className="object-fill" />
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {openPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="yourName" className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="yourName"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your name"
                  aria-label="Your Name"
                  {...register('yourName', { required: 'Your name is required' })}
                />
                {errors.yourName && <p className="text-red-500 text-sm mt-1">{errors.yourName.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="yourEmail" className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="yourEmail"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your email"
                  aria-label="Your Email"
                  {...register('yourEmail', {
                    required: 'Your email is required!',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email format',
                    },
                  })}
                />
                {errors.yourEmail && <p className="text-red-500 text-sm mt-1">{errors.yourEmail.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="friendName" className="block text-gray-700">Friend&apos;s Name</label>
                <input
                  type="text"
                  id="friendName"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Friend's Name"
                  aria-label="Friend's Name"
                  {...register('friendName', { required: 'Friend\'s name is required' })}
                />
                {errors.friendName && <p className="text-red-500 text-sm mt-1">{errors.friendName.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="friendEmail" className="block text-gray-700">Friend&apos;s Email</label>
                <input
                  type="email"
                  id="friendEmail"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Friend's email"
                  aria-label="Friend's Email"
                  {...register('friendEmail', {
                    required: 'Friend\'s email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email format',
                    },
                  })}
                />
                {errors.friendEmail && <p className="text-red-500 text-sm mt-1">{errors.friendEmail.message}</p>}
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" aria-label="Submit Referral">
                Submit
              </button>

              <button type="button" onClick={() => setOpenPopUp(false)} className="w-full mt-4 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400" aria-label="Close Form">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
