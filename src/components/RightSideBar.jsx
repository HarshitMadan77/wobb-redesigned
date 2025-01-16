import React from 'react';
import { Grid, MessageSquare, Menu as MenuIcon, Settings, HelpCircle, User, X, ChevronRight, ChevronLeft } from 'lucide-react';

const RightSideBar = ({ isOpen, onClose, isSidebarCollapsed, onToggleCollapse }) => {
  return (
    <div 
      className={`
        fixed lg:static right-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        ${isSidebarCollapsed ? 'lg:w-20' : 'lg:w-64'} 
        w-64 bg-sidebar-dark min-h-screen flex flex-col items-start py-4 
        transition-all duration-300 z-40
        mt-16 lg:mt-0
      `}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-white"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <button
        className="hidden lg:block bg-white p-2 rounded-full shadow-lg mb-4 mx-auto"
        onClick={onToggleCollapse}
      >
        {isSidebarCollapsed ? (
          <ChevronRight className="text-gray-600" size={20} />
        ) : (
          <ChevronLeft className="text-gray-600" size={20} />
        )}
      </button>

      <nav className="mt-8 w-full space-y-6 px-4">
        <ul className="space-y-6">
          <li className="flex items-center gap-4 text-white hover:text-white pl-2 cursor-pointer">
            <Grid size={24} />
            {(!isSidebarCollapsed || isOpen) && <span className="text-sm text-white">Dashboard</span>}
          </li>
          <li className="flex items-center gap-4 text-gray-400 hover:text-white pl-2 cursor-pointer">
            <MessageSquare size={24} />
            {(!isSidebarCollapsed || isOpen) && <span className="text-sm text-white">Messages</span>}
          </li>
          <li className="flex items-center gap-4 text-gray-400 hover:text-white pl-2 cursor-pointer">
            <MenuIcon size={24} />
            {(!isSidebarCollapsed || isOpen) && <span className="text-sm text-white">Menu</span>}
          </li>
          <li className="flex items-center gap-4 text-gray-400 hover:text-white pl-2 cursor-pointer">
            <Settings size={24} />
            {(!isSidebarCollapsed || isOpen) && <span className="text-sm text-white">Settings</span>}
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-20 w-full px-4">
        <div className="flex items-center gap-4 pl-1">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400">
            <User size={18} className="text-white" />
          </div>
          {(!isSidebarCollapsed || isOpen) && (
            <span className="text-sm text-white">Harshit Madan</span>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 w-full px-5">
        <button className="flex items-center gap-4 text-gray-400 hover:text-white w-full p-2 rounded-md">
          <HelpCircle size={24} />
          {(!isSidebarCollapsed || isOpen) && <span className="text-sm text-white">Help</span>}
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;