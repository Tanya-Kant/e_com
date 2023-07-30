import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us-Kaynat Shop Stop"}>
      <div className='row aboutus'>
        <div className='col-md-6'>
          <img
          src="https://t3.ftcdn.net/jpg/01/35/70/90/360_F_135709080_2XHH0eeTGZ6rAaxgyuLKKdTaUCZAgPCZ.jpg"
          alt=""
          style={{width:"100%"}}
          />
          </div>
          <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>ABOUT US</h1>
            <p className='text-justify mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui
                 officia deserunt mollit anim id est laborum.
            </p>
        </div>
        </div>
        </Layout>
  )
}

export default About;