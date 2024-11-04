import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return(
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 founded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-flltermbackdrop-blur-lg bg-opacity-0'>
      <h1 className="text-3xl font-semibold text-center text-grey-300">sign Up<span className="text-blue-500"> ChatApp</span>
      </h1>

      <form>
        <div>
          <label className="label p-2">
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type="text"placeholder="Rohit Roy" className="w-full input input-bordered h-10" />
        </div>
        <div>
        <label className="label p-2">
            <span className='text-base label-text'>username</span>
          </label>
          <input type="text"placeholder="rohitroy" className="w-full input input-bordered h-10" />
        </div>
        <div>
        <label className="label ">
            <span className='text-base label-text'>Password</span>
          </label>
          <input type="password" 
          placeholder="Enter Password"
          className="w-full input input-bordered h-10" />
        </div>

        <div>
        <label className="label ">
            <span className='text-base label-text'> Confirm Password</span>
          </label>
          <input type="password" 
          placeholder="cofirm Password"
          className="w-full input input-bordered h-10" />
          </div>
          
          <GenderCheckbox/>

          <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href='0'>Already have an account</a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-state-700">Sign Up</button>
          </div>
      </form>
    </div>
  </div>
  );
};
export default SignUp;


// STARTER CODE FOR THE SIGNUP COMPONENT

// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return(
//   <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 founded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-flltermbackdrop-blur-lg bg-opacity-0'>
//       <h1 className="text-3xl font-semibold text-center text-grey-300">
//         sign Up<span className="text-blue-500">ChatApp</span>
//       </h1>

//       <form>
//         <div>
//           <label className="label p-2">
//             <span className='text-base label-text'>Full Name</span>
//           </label>
//           <input type="text"placeholder="Rohit Roy" className="w-full input input-bordered h-10" />
//         </div>
//         <div>
//         <label className="label p-2">
//             <span className='text-base label-text'>username</span>
//           </label>
//           <input type="text"placeholder="rohitroy" className="w-full input input-bordered h-10" />
//         </div>
//         <div>
//         <label className="label ">
//             <span className='text-base label-text'>Password]</span>
//           </label>
//           <input type="password" 
//           placeholder="Enter Password"
//           className="w-full input input-bordered h-10" />
//         </div>

//         <div>
//         <label className="label ">
//             <span className='text-base label-text'> Confirm Password]</span>
//           </label>
//           <input type="password" 
//           placeholder="cofirm Password"
//           className="w-full input input-bordered h-10" />
//           </div>
          
//           <GenderCheckbox/>

//           <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href='0'>Already have an account</a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-state-700">Sign Up</button>
//           </div>
//       </form>
//     </div>
//   </div>
//   );
// };
// export default SignUp;
