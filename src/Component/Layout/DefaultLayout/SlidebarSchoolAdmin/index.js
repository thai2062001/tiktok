import React, { useState,useEffect } from 'react';
import classNames from "classnames/bind";
import styles from './SlidebarSchoolAdmin.module.scss'
const cx = classNames.bind(styles)

function Slidebar() {
  function handleLogOutUser() {
    localStorage.removeItem('user-save');
    window.location.href = '/login'
}
  return (
    <div className={cx('slidebar')}>

<div className={cx('sidebar')}>
    <div className={cx('logo-details')}>
        <i className={cx('bx bx-menu')} id="btn" ></i>
    </div>
    <ul className={cx('nav-list')}>
    <li>

    </li>
      <li>
        <a href="/schooladmin">
          <i className={cx('bx bxs-school')}></i>
          <span className={cx('links_name')}>Account</span>
        </a>
         <span className={cx('tooltip')}>Account</span>
      </li>
      <li>
       <a href="#">
         <i className={cx('bx bxs-school')} ></i>
         <span className={cx('links_name')}>School</span>
       </a>
       <span className={cx('tooltip')}>School</span>
     </li>
     {/* <li>
       <a href="/homeadmin/majorAdmin">
         <i className={cx('bx bx-math')} ></i>
         <span className={cx('links_name')}>Major</span>
       </a>
       <span className={cx('tooltip')}>Major</span>
     </li>

     <li>
       <a href="/homeadmin/companyAdmin">
         <i className='bx bx-building-house' ></i>
         <span className={cx('links_name')}>Company</span>
       </a>
       <span className={cx('tooltip')}>Company</span>
     </li>
    
     <li>
       <a href="#">
         <i className='bx bx-cog' ></i>
         <span className={cx('links_name')}>Setting</span>
       </a>
       <span className={cx('tooltip')}>Setting</span>
     </li>*/

     <li className={cx('profile')}>
     <a href="/admin/adminlogin" onClick={handleLogOutUser}>
     <div className={cx('profile-details')}></div>
         <i className={cx('bx bx-log-out')} id="log_out" ></i>
     </a>
     <span className={cx('tooltip')}>Logout</span>
     </li>

      
      }
    </ul>
  </div>

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
  </div>
  );
}

export default Slidebar;