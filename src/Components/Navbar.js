import React from 'react'

function Navbar() {

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  return (
    <div >
      <div className='flex-row'>
        <div className='m-t nav'>
          <div id='bg-logo'></div>
          <div className='flex-row hideOnMobile'>
            <a className='navLinks'>Home</a>
            <a className='navLinks'>About</a>
            <a className='navLinks'>Vehicle Models</a>
            <a className='navLinks'>Testimonials</a>
            <a className='navLinks'>Contact</a>
          </div>
          <div className='hideOnMobile'>
            <a id='signIn'>Sign In</a>
            <button className='orange-sm'>Register</button>
          </div>
          {/* <div className='txt-c toggle'>
            <a onClick={showSidebar} ><i class="fa-solid fa-bars"></i></a>
          </div> */}
        </div>
      </div>
      <div className='sidebar'>
        <a onClick={hideSidebar} className="toggle"><i class="fa-solid fa-xmark"></i></a>
        <a className='navLinks'>Home</a>
        <a className='navLinks'>About</a>
        <a className='navLinks'>Vehicle Models</a>
        <a className='navLinks'>Testimonials</a>
        <a className='navLinks'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar