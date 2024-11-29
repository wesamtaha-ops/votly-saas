import React from 'react';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export function NotificationsTab() {
  const [settings, setSettings] = React.useState<NotificationSetting[]>([
    {
      id: 'form-submissions',
      title: 'Form Submissions',
      description: 'Get notified when someone submits a form',
      enabled: true
    },
    {
      id: 'team-activity',
      title: 'Team Activity',
      description: 'Get notified about team member actions',
      enabled: false
    },
    {
      id: 'form-comments',
      title: 'Form Comments',
      description: 'Get notified about form comments and feedback',
      enabled: true
    },
    {
      id: 'marketing-updates',
      title: 'Marketing Updates',
      description: 'Receive product updates and newsletters',
      enabled: false
    }
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
        <div className="space-y-4">
          {settings.map(setting => (
            <div key={setting.id} className="flex items-center justify-between py-4 border-b">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{setting.title}</h4>
                <p className="text-sm text-gray-500">{setting.description}</p>
              </div>
              <div className="ml-4">
                <button
                  className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    setting.enabled ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                  onClick={() => toggleSetting(setting.id)}
                >
                  <span
                    className={`${
                      setting.enabled ? 'translate-x-5' : 'translate-x-0'
                    } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}