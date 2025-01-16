import React, { useState } from 'react';
import { Grid, Menu as MenuIcon, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import RightSidebar from './RightSideBar';
import LeftSideBar from './LeftsideBar';
import { useNavigate } from 'react-router-dom';

const CampaignDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleOverlayClick = () => {
    setIsLeftSidebarOpen(false);
    setIsRightSidebarOpen(false);
  };

  const handlePostCampaignClick = () => {
    navigate('/post-campaign');
  };

  return (
    <div className="flex min-h-screen relative dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 border-b dark:border-gray-700 p-4 flex justify-between items-center">
        <button
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
        >
          <MenuIcon size={24} className="dark:text-gray-300" />
        </button>
        <h1 className="text-xl font-semibold border bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-md">Wobb</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsRightSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <User size={24} className="dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Left Sidebar */}
      <LeftSideBar 
        isOpen={isLeftSidebarOpen}
        onClose={() => setIsLeftSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 mt-16 lg:mt-0">
        <div className="hidden lg:flex bg-white dark:bg-gray-800 p-4 justify-between items-center border-b dark:border-gray-700">
          <h1 className="text-xl font-semibold border bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-md">Wobb</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button onClick={handlePostCampaignClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Post Campaign
            </button>
          </div>
        </div>

        <div className="flex flex-1 p-4 md:p-8 items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <Grid className="w-16 h-16 md:w-20 md:h-20 text-blue-300 mx-auto mb-4" />
            <h2 className="text-lg font-medium mb-2 dark:text-gray-200">Haven't posted any campaigns yet!</h2>
            <button onClick={handlePostCampaignClick} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Post Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar 
        isOpen={isRightSidebarOpen}
        onClose={() => setIsRightSidebarOpen(false)}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Overlay */}
      {(isLeftSidebarOpen || isRightSidebarOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}
    </div>
  );
};

export default CampaignDashboard;