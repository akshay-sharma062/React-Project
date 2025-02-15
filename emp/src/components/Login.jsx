import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center">
      <div className="text-center bg-black bg-opacity-90 text-orange-600 shadow-2xl shadow-orange-600 w-90 m-20 p-5 rounded-lg">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex justify-center m-5 p-5">
          <table>
            <tr >
              <td>
                <label htmlFor="" className="text-xl px-2 mx-2">UserName</label>
                <input type="text" placeholder="UserName" required className="px-2 font-light rounded-lg  bg-black py-1 text-white"/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="" className="text-xl px-4 mx-2">Email ID</label>
                <input type="email" placeholder="xyz@gmail.com" required className="px-2 font-light rounded-lg mt-4 bg-black py-1 text-white"/>
              </td>
            </tr>
            <tr>
              <td><Link to="/">

                <button className="border-2 border-orange-600 px-2 py-1 mt-5 rounded-lg hover:text-white hover:border-white duration-700 hover:shadow-lg hover:shadow-orange-600">Login</button>
              </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Login;
