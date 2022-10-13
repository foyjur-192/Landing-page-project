import React from 'react';

const Nav = () => {
    return (
        <div>
<div class="navbar background-color">
  <div class="navbar-start text-white">
    <div class="dropdown text-white">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow background-green rounded-box w-52">
        <li><a>Home</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Price
          </a>
        </li>
        <li><a>Service</a></li>
      </ul>
    </div>
    <a class=" normal-case lg:text-2xl text-xl font-bold text-color lg:pl-3"><span className='text-green-light'>Q</span>UICK</a>
  </div>
  <div class="navbar-center text-white hidden lg:flex">
    <ul class="menu menu-horizontal p-0 ">
      <li><a className='lg:pr-12 hover:none text-xl '>Home</a></li>
      <li tabindex="0">
        <a className='lg:pr-12 text-xl'>
         Chart</a>
      
      </li>
      <li><a className='text-xl'>Service</a></li>
    </ul>
  </div> 
  <div class="navbar-end lg:pr-3">
    <a class=" text-white ">
    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg> */}
      <div class="dropdown dropdown-end text-white  ">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm text-black indicator-item bg-amber-400">1</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 background-green shadow">
        <div class="card-body">
          <span class="font-bold text-lg">1 Package</span>
          <span class="text-white">Subtotal: $200</span>
          <div class="card-actions">
            <button class="btn background-allow text-black hover:text-white btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>

    </a>
  </div>
</div>


        </div>
    );
};

export default Nav;