import React, { useState } from 'react';
import { Mail, Bell, HelpCircle, Plus, X, Settings } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Switch from '@radix-ui/react-switch';
import * as Dialog from '@radix-ui/react-dialog';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  enabled: boolean;
  trigger: 'onSubmit' | 'onApproval' | 'onReject' | 'custom';
}

export function NotificationsPanel() {
  const [selfNotify, setSelfNotify] = useState(false);
  const [respondentNotify, setRespondentNotify] = useState(false);
  const [emailTemplates, setEmailTemplates] = useState<EmailTemplate[]>([]);
  const [isAddingTemplate, setIsAddingTemplate] = useState(false);
  const [newTemplate, setNewTemplate] = useState<Partial<EmailTemplate>>({
    name: '',
    subject: '',
    body: '',
    trigger: 'onSubmit'
  });

  const handleAddTemplate = () => {
    if (newTemplate.name && newTemplate.subject && newTemplate.body) {
      setEmailTemplates([
        ...emailTemplates,
        {
          id: Date.now().toString(),
          name: newTemplate.name,
          subject: newTemplate.subject,
          body: newTemplate.body,
          trigger: newTemplate.trigger || 'onSubmit',
          enabled: true
        }
      ]);
      setNewTemplate({ name: '', subject: '', body: '', trigger: 'onSubmit' });
      setIsAddingTemplate(false);
    }
  };

  const handleDeleteTemplate = (id: string) => {
    setEmailTemplates(emailTemplates.filter(template => template.id !== id));
  };

  const handleToggleTemplate = (id: string) => {
    setEmailTemplates(emailTemplates.map(template => 
      template.id === id ? { ...template, enabled: !template.enabled } : template
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm text-gray-500">
            Configure how and when you receive notifications about form submissions.
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>

      <Tabs.Root defaultValue="general">
        <Tabs.List className="flex space-x-4 border-b border-gray-200">
          <Tabs.Trigger 
            value="general"
            className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600"
          >
            General
          </Tabs.Trigger>
          <Tabs.Trigger 
            value="custom-emails"
            className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600"
          >
            Custom emails
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="general" className="pt-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      Self-email notifications
                    </h3>
                    <p className="text-sm text-gray-500">
                      Get an email whenever your form is submitted
                    </p>
                  </div>
                </div>
                <Switch.Root 
                  checked={selfNotify}
                  onCheckedChange={setSelfNotify}
                  className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
                >
                  <Switch.Thumb 
                    className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
                  />
                </Switch.Root>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      Respondent notifications
                    </h3>
                    <p className="text-sm text-gray-500">
                      Send an email to the person who filled out your form upon submission
                    </p>
                  </div>
                </div>
                <Switch.Root 
                  checked={respondentNotify}
                  onCheckedChange={setRespondentNotify}
                  className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
                >
                  <Switch.Thumb 
                    className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
                  />
                </Switch.Root>
              </div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="custom-emails" className="pt-6">
          <div className="space-y-6">
            <button
              onClick={() => setIsAddingTemplate(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Email Template
            </button>

            <div className="space-y-4">
              {emailTemplates.map(template => (
                <div key={template.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">
                          {template.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Trigger: {template.trigger}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Switch.Root 
                        checked={template.enabled}
                        onCheckedChange={() => handleToggleTemplate(template.id)}
                        className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
                      >
                        <Switch.Thumb 
                          className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
                        />
                      </Switch.Root>
                      <button
                        onClick={() => handleDeleteTemplate(template.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Subject:</p>
                    <p className="text-sm text-gray-600">{template.subject}</p>
                  </div>
                </div>
              ))}
            </div>

            <Dialog.Root open={isAddingTemplate} onOpenChange={setIsAddingTemplate}>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40" />
                <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
                  <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
                    Add Email Template
                  </Dialog.Title>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Template Name
                      </label>
                      <input
                        type="text"
                        value={newTemplate.name}
                        onChange={e => setNewTemplate({ ...newTemplate, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Trigger
                      </label>
                      <select
                        value={newTemplate.trigger}
                        onChange={e => setNewTemplate({ ...newTemplate, trigger: e.target.value as any })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="onSubmit">On Form Submit</option>
                        <option value="onApproval">On Approval</option>
                        <option value="onReject">On Rejection</option>
                        <option value="custom">Custom Trigger</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={newTemplate.subject}
                        onChange={e => setNewTemplate({ ...newTemplate, subject: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email Body
                      </label>
                      <textarea
                        rows={4}
                        value={newTemplate.body}
                        onChange={e => setNewTemplate({ ...newTemplate, body: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => setIsAddingTemplate(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddTemplate}
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                    >
                      Add Template
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}