import React from 'react'

const About = () => {
  return (

         <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Greetings, I'm Manish Gupta, a Kolkata-based enthusiast currently pursuing my second year in Computer Science Engineering at JIS University. With an insatiable passion for coding, I'm well-versed in languages such as C, C++, JavaScript, and Python. Beyond the basics, my skill set extends to encompass technologies like React, Node.js, Express, Tailwind CSS, GitHub, Django, Firebase, and Google Cloud Platform.
        </p>

        <br />

        <p className="text-xl">
        Determined to broaden my horizons, I'm currently on an exciting journey of mastering the MERN stack. This journey has led me to conceptualize and develop several web applications, as I believe the true essence of learning lies in hands-on experience. My goal is to not only thrive academically but also to contribute meaningfully to the world of technology through innovative and user-centered creations.
        </p>
      </div>
     </div>
  )
}

export default About
