import React, { useState } from 'react';
import { Info, Moon, Sun } from 'lucide-react';
import RightSidebar from './RightSideBar';
import ThemeToggle from './ThemeToggle';

const PostCampaignForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [campaignObjective, setCampaignObjective] = useState('');
  const [isNewPostEnabled, setIsNewPostEnabled] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Campaign Setup',
      description: 'Outline your campaign framework, establishing the foundation and target audience parameters.',
      isActive: true
    },
    {
      number: 2,
      title: 'Detailing Your Campaign',
      description: 'Provide your brand details, set clear promotional goals, and upload your campaign brief to convey your vision and requirements.',
      isActive: false
    },
    {
      number: 3,
      title: 'Rewards & Progress Plan',
      description: 'Decide how you will reward influencers and outline the key stages for campaign achievements without using technical terms.',
      isActive: false
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <div className="flex-1">
        {/* Progress Steps */}
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <div className="w-full px-6 py-6">
            <div className="flex items-center gap-4 w-full">
              {/* WOBB text */}
              <h1 className="text-gray-900 dark:text-white whitespace-nowrap text-xl font-semibold border bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-md">
                WOBB
              </h1>

              {/* Steps section */}
              <div className="flex-1 flex justify-between items-center gap-4 overflow-x-auto pl-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex-1 flex items-start gap-4 min-w-[250px]">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-shrink-0 w-12 h-0.5 bg-gray-200 dark:bg-gray-700 mt-4" />
                    )}
                  </div>
                ))}
              </div>

                <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full px-6 py-8 flex items-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 w-full h-full">
            <h1 className="text-xl font-semibold mb-6 dark:text-white">Post Campaign</h1>

            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-600 dark:text-gray-300">Switch To New Post Campaign</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isNewPostEnabled}
                  onChange={() => setIsNewPostEnabled(!isNewPostEnabled)}
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <form className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="campaignName" className="block text-gray-700 dark:text-gray-200 font-medium">
                    Campaign Name
                  </label>
                  <Info className="w-4 h-4 text-gray-400" />
                  <span className="text-red-500">*</span>
                </div>
                <input
                  id="campaignName"
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="Give your campaign a name"
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="campaignObjective" className="block text-gray-700 dark:text-gray-200 font-medium">
                    Campaign Objective
                  </label>
                  <Info className="w-4 h-4 text-gray-400" />
                  <span className="text-red-500">*</span>
                </div>
                <select
                  id="campaignObjective"
                  value={campaignObjective}
                  onChange={(e) => setCampaignObjective(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Campaign Objective</option>
                  <option value="Brand Awareness">Brand Awareness</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium absolute bottom-10"
                >
                  Next
                </button>
              </div>
            </form>
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

      {/* Overlay for mobile */}
      {isRightSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsRightSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default PostCampaignForm;
