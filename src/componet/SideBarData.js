import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <i class="book icon"></i>,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <i class="clone icon"></i>,
    cName: 'nav-text'
  },
];