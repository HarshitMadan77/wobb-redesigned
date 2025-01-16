import React, { useState } from 'react';
import { Search, Grid, CheckSquare, FileText, RotateCcw, Pause, Lock, Users, XSquare, ShieldCheck, X } from 'lucide-react';

const LeftSideBar = ({ isOpen, onClose }) => {
  const [activeStatus, setActiveStatus] = useState(0);

  const campaignStatuses = [
    { icon: <Grid size={20} />, label: 'All', count: 0 },
    { icon: <CheckSquare size={20} />, label: 'Active', count: 0 },
    { icon: <FileText size={20} />, label: 'Draft', count: 0 },
    { icon: <RotateCcw size={20} />, label: 'Under Review', count: 0 },
    { icon: <Pause size={20} />, label: 'Paused', count: 0 },
    { icon: <Lock size={20} />, label: 'Closed', count: 0 },
    { icon: <ShieldCheck size={20} />, label: 'Private', count: 0 },
    { icon: <Users size={20} />, label: 'Pending Invites', count: 0 },
    { icon: <XSquare size={20} />, label: 'Rejected', count: 0 },
  ];

  return (
    <div 
      className={`
        fixed lg:static 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4 min-h-screen py-5 z-40
        transition-transform duration-300 ease-in-out
        mt-16 lg:mt-0
      `}
    >
      <button
        className="lg:hidden absolute top-4 right-4 dark:text-gray-300"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Campaign..."
            className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4 overflow-y-auto max-h-[calc(100vh-200px)]">
        <h2 className="text-sm font-semibold text-center mb-2 dark:text-gray-200">Campaign Status</h2>
        <div className="space-y-2">
          {campaignStatuses.map((status, index) => (
            <div
              key={index}
              onClick={() => setActiveStatus(index)}
              className={`
                flex items-center justify-between p-2 border-2 dark:border-gray-700 
                rounded-md cursor-pointer dark:text-gray-200
                ${activeStatus === index ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
              `}
            >
              <div className="flex items-center gap-2">
                {status.icon}
                <span className="text-sm">{status.label}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{status.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
