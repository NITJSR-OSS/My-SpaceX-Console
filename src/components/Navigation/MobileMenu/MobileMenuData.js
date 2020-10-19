import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const MobileMenuData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'navText'
  },
  {
    title: 'Launches',
    path: '/launches',
    icon: <FaIcons.FaRocket />,
    cName: 'navText'
  },
  {
    title: 'Maps',
    path: '/maps',
    icon: <FaIcons.FaMapMarker />,
    cName: 'navText'
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: <FaIcons.FaRegBell />,
    cName: 'navText'
  }
];