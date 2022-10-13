import React from 'react';

function Form () {

    return (
        <form action="/action_page.php">
            <label for="pet-type">What kind of pet did you find?</label>
            <select id="pet-type" name="pet-type">
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
            </select>
            <br/>
            <label for="pet-breed">What breed is the pet?</label>
            <input type="text"></input>
            <br/>
            <label for="pet-age">How old do you think the pet is?</label>
            <input type="text"></input>
            <br/>
            <label for="pet-sex">Is the pet male or female?</label>
            <select id="pet-sex" name="pet-sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br/>
            <label for="location">Where did you find the pet?</label>
            <input type="text"></input>
            <br/>
            <label for="image">Upload a pic:</label>
            <input type="file" id="myFile" name="filename"></input>
            <br/>
        <input type="submit" ></input>

        </form>
    );
}

export default Form;

{/* <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
            Contact Form
            </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">What kind of pet did you find?</span>
              <select
                name="pet type"
                className="
            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " 
            placeholder="Dog or Cat"
              >
                
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
        </div> */}