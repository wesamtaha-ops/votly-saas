import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Mail, Clock, UserX, RefreshCw } from 'lucide-react';
import type { Response } from './types';
import toast from 'react-hot-toast';

interface CompletionTabProps {
  responses: Response[];
}

interface IncompleteResponse {
  id: string;
  email: string;
  lastActive: string;
  completedSections: number;
  totalSections: number;
  lastPage: string;
}

export function CompletionTab({ responses }: CompletionTabProps) {
  const [selectedResponses, setSelectedResponses] = React.useState<string[]>([]);

  // Calculate completion statistics
  const completionStats = {
    total: responses.length,
    completed: responses.filter(r => r.status === 'complete').length,
    partial: responses.filter(r => r.status === 'partial').length,
    abandoned: responses.filter(r => r.status === 'invalid').length
  };

  const completionRate = (completionStats.completed / completionStats.total) * 100;

  // Mock data for drop-off points
  const dropOffData = [
    { step: 'Page 1', started: 100, completed: 95 },
    { step: 'Page 2', started: 95, completed: 82 },
    { step: 'Page 3', started: 82, completed: 76 },
    { step: 'Page 4', started: 76, completed: 68 },
    { step: 'Submission', started: 68, completed: 65 }
  ];

  // Mock data for incomplete responses
  const incompleteResponses: IncompleteResponse[] = [
    {
      id: '1',
      email: 'john.doe@example.com',
      lastActive: '2 hours ago',
      completedSections: 2,
      totalSections: 5,
      lastPage: 'Personal Information'
    },
    {
      id: '2',
      email: 'sarah.smith@example.com',
      lastActive: '1 day ago',
      completedSections: 3,
      totalSections: 5,
      lastPage: 'Product Feedback'
    },
    {
      id: '3',
      email: 'mike.johnson@example.com',
      lastActive: '3 days ago',
      completedSections: 1,
      totalSections: 5,
      lastPage: 'Introduction'
    }
  ];

  // Completion status distribution data
  const statusData = [
    { name: 'Completed', value: completionStats.completed, color: '#10B981' },
    { name: 'Partial', value: completionStats.partial, color: '#F59E0B' },
    { name: 'Abandoned', value: completionStats.abandoned, color: '#EF4444' }
  ];

  const handleRetargetSelected = () => {
    toast.success(`Retargeting email sent to ${selectedResponses.length} recipients`);
    setSelectedResponses([]);
  };

  const handleSelectAll = () => {
    if (selectedResponses.length === incompleteResponses.length) {
      setSelectedResponses([]);
    } else {
      setSelectedResponses(incompleteResponses.map(r => r.id));
    }
  };

  return (
    <div className='space-y-6'>
      {/* Completion Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
          <div className='flex items-center'>
            <div className='p-2 bg-green-100 rounded-lg'>
              <CheckCircle className='h-6 w-6 text-green-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-500'>Completed</p>
              <p className='text-2xl font-semibold text-gray-900'>
                {completionStats.completed}
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
          <div className='flex items-center'>
            <div className='p-2 bg-yellow-100 rounded-lg'>
              <AlertTriangle className='h-6 w-6 text-yellow-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-500'>Partial</p>
              <p className='text-2xl font-semibold text-gray-900'>
                {completionStats.partial}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Incomplete Responses Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className='bg-white rounded-lg shadow-sm border border-gray-200'>
        <div className='p-6'>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center'>
              <UserX className='h-5 w-5 text-red-500 mr-2' />
              <h3 className='text-lg font-medium text-gray-900'>
                Incomplete Responses
              </h3>
            </div>
            <button
              onClick={handleRetargetSelected}
              disabled={selectedResponses.length === 0}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed'>
              <RefreshCw className='h-4 w-4 mr-2' />
              Retarget Selected ({selectedResponses.length})
            </button>
          </div>

          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    <input
                      type='checkbox'
                      checked={
                        selectedResponses.length === incompleteResponses.length
                      }
                      onChange={handleSelectAll}
                      className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    />
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Last Active
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Progress
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Last Page
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {incompleteResponses.map((response) => (
                  <tr key={response.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <input
                        type='checkbox'
                        checked={selectedResponses.includes(response.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedResponses([
                              ...selectedResponses,
                              response.id,
                            ]);
                          } else {
                            setSelectedResponses(
                              selectedResponses.filter(
                                (id) => id !== response.id,
                              ),
                            );
                          }
                        }}
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                      />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {response.email}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center text-sm text-gray-500'>
                        <Clock className='h-4 w-4 mr-1' />
                        {response.lastActive}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div
                          className='bg-indigo-600 h-2.5 rounded-full'
                          style={{
                            width: `${
                              (response.completedSections /
                                response.totalSections) *
                              100
                            }%`,
                          }}></div>
                      </div>
                      <span className='text-sm text-gray-500 mt-1'>
                        {response.completedSections}/{response.totalSections}{' '}
                        sections
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span className='text-sm text-gray-500'>
                        {response.lastPage}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <button
                        onClick={() => {
                          toast.success(
                            `Retargeting email sent to ${response.email}`,
                          );
                        }}
                        className='inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200'>
                        <Mail className='h-4 w-4 mr-1' />
                        Retarget
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Charts Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Completion Rate Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
          <h3 className='text-lg font-medium text-gray-900 mb-6'>
            Completion Status Distribution
          </h3>
          <div className='h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={statusData}
                  cx='50%'
                  cy='50%'
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey='value'>
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Drop-off Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
          <h3 className='text-lg font-medium text-gray-900 mb-6'>
            Drop-off Analysis
          </h3>
          <div className='h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={dropOffData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='step' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='started' name='Started' fill='#6366F1' />
                <Bar dataKey='completed' name='Completed' fill='#10B981' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>


      {/* Completion Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white'>
        <h3 className='text-lg font-medium mb-4'>Completion Insights</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='text-sm font-medium text-white/90 mb-2'>
              Key Findings
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-center text-sm'>
                <ArrowRight className='h-4 w-4 mr-2' />
                Highest drop-off occurs on Page 2 (13% drop)
              </li>
              <li className='flex items-center text-sm'>
                <ArrowRight className='h-4 w-4 mr-2' />
                65% overall completion rate
              </li>
              <li className='flex items-center text-sm'>
                <ArrowRight className='h-4 w-4 mr-2' />
                Average completion time: 4.5 minutes
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-sm font-medium text-white/90 mb-2'>
              Recommendations
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-center text-sm'>
                <ArrowRight className='h-4 w-4 mr-2' />
                Simplify Page 2 questions
              </li>
              <li className='flex items-center text-sm'>
                <ArrowRight className='h-4 w-4 mr-2' />
                Add progress indicator
              </li>
              <li className='flex items-center text-sm'>
                <ArrowRight className='h-4 w-4 mr-2' />
                Implement email reminders for incomplete responses
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}