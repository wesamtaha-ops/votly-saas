import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, Check, ArrowLeft, History, ChevronDown } from 'lucide-react';
import { FormBuilderTabs, TabType } from './FormBuilderTabs';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import toast from 'react-hot-toast';

interface Version {
  id: string;
  number: number;
  createdAt: Date;
  createdBy: {
    name: string;
    avatar: string;
  };
  surveyJson: any;
  themeJson: any;
}

interface FormBuilderHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onSave: (asNewVersion?: boolean) => void;
  onPreview: () => void;
  currentVersion?: Version;
  versions?: Version[];
  onLoadVersion?: (version: Version) => void;
}

export function FormBuilderHeader({ 
  activeTab, 
  onTabChange, 
  onSave, 
  onPreview,
  currentVersion,
  versions = [],
  onLoadVersion
}: FormBuilderHeaderProps) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showVersionHistory, setShowVersionHistory] = useState(false);

  const handlePublish = async () => {
    try {
      await onSave();
      toast.success('Form published successfully!', {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      navigate('/forms');
    } catch (error) {
      toast.error('Failed to publish form. Please try again.');
    }
  };

  const handleSaveVersion = async () => {
    try {
      await onSave(true);
      toast.success('New version saved successfully!', {
        icon: '💾',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } catch (error) {
      toast.error('Failed to save version. Please try again.');
    }
  };

  const handleBack = () => {
    setShowConfirmation(true);
  };

  const confirmNavigation = () => {
    setShowConfirmation(false);
    navigate(-1);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Back button */}
            <button
              onClick={handleBack}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </button>
            
            {/* Centered tabs */}
            <FormBuilderTabs activeTab={activeTab} onTabChange={onTabChange} />
            
            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                    <History className="h-4 w-4 mr-2" />
                    Version {currentVersion?.number || 1}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                    sideOffset={5}
                  >
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-medium text-gray-900">Version History</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {versions.map((version) => (
                        <DropdownMenu.Item
                          key={version.id}
                          className="px-4 py-2 hover:bg-gray-50 focus:outline-none"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                src={version.createdBy.avatar}
                                alt={version.createdBy.name}
                                className="h-8 w-8 rounded-full"
                              />
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                  Version {version.number}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {version.createdBy.name} • {formatDate(version.createdAt)}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => onLoadVersion?.(version)}
                              className="ml-2 px-2 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Load
                            </button>
                          </div>
                        </DropdownMenu.Item>
                      ))}
                    </div>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <button
                onClick={handleSaveVersion}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <Save className="h-4 w-4 mr-2" />
                Save as New Version
              </button>
              <button
                onClick={onPreview}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </button>
              <button
                onClick={handlePublish}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                <Check className="h-4 w-4 mr-2" />
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog.Root open={showConfirmation} onOpenChange={setShowConfirmation}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              Unsaved Changes
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 mb-4">
              You have unsaved changes. Are you sure you want to leave? Your changes will be lost.
            </Dialog.Description>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Stay
              </button>
              <button
                onClick={confirmNavigation}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
              >
                Leave anyway
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}