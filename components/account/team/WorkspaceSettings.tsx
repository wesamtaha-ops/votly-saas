import React from 'react';
import { Workspace } from '@/types';
import { Globe, Lock, Users } from 'lucide-react';

interface WorkspaceSettingsProps {
  workspace: Workspace;
}

export function WorkspaceSettings({ workspace }: WorkspaceSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Workspace Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your team's workspace settings and preferences.
        </p>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="workspace-name" className="block text-sm font-medium text-gray-700">
                Workspace Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="workspace-name"
                  id="workspace-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue={workspace.name}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Visibility</label>
              <div className="mt-2 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="public"
                      name="visibility"
                      type="radio"
                      defaultChecked={workspace.visibility === 'public'}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="public" className="font-medium text-gray-700">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-400 mr-2" />
                        Public Workspace
                      </div>
                    </label>
                    <p className="text-gray-500">Anyone can find and join this workspace</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="private"
                      name="visibility"
                      type="radio"
                      defaultChecked={workspace.visibility === 'private'}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="private" className="font-medium text-gray-700">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 text-gray-400 mr-2" />
                        Private Workspace
                      </div>
                    </label>
                    <p className="text-gray-500">Only invited members can access this workspace</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Data Sharing</label>
              <div className="mt-2 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="share-templates"
                      name="share-templates"
                      type="checkbox"
                      defaultChecked={workspace.shareTemplates}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="share-templates" className="font-medium text-gray-700">
                      Share Templates
                    </label>
                    <p className="text-gray-500">Allow team members to share and use each other's templates</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="share-themes"
                      name="share-themes"
                      type="checkbox"
                      defaultChecked={workspace.shareThemes}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="share-themes" className="font-medium text-gray-700">
                      Share Themes
                    </label>
                    <p className="text-gray-500">Allow team members to share and use each other's themes</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Member Permissions</label>
              <div className="mt-2 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="allow-invites"
                      name="allow-invites"
                      type="checkbox"
                      defaultChecked={workspace.allowMemberInvites}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="allow-invites" className="font-medium text-gray-700">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        Allow Member Invites
                      </div>
                    </label>
                    <p className="text-gray-500">Let team members invite new members to the workspace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}