export const mockResponses = [
  {
    id: '1',
    lastUpdated: '2024-11-29T15:59:00Z',
    status: 'complete',
    answers: {
      fullName: 'WESAM TAHA',
      email: 'tahawesam@yahoo.com',
      phone: '+4915566028064',
      address: 'Schönhauser Allee 126a',
      city: 'Berlin',
      state: 'American Samoa'
    },
    metadata: {
      browser: 'Chrome',
      os: 'Windows',
      completionRate: 100
    }
  },
  {
    id: '2',
    lastUpdated: '2024-11-29T14:30:00Z',
    status: 'partial',
    answers: {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      address: '123 Main St',
      city: 'New York',
      state: 'NY'
    },
    metadata: {
      browser: 'Firefox',
      os: 'MacOS',
      completionRate: 75
    }
  },
  {
    id: '3',
    lastUpdated: '2024-11-29T13:15:00Z',
    status: 'invalid',
    answers: {
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+0987654321',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA'
    },
    metadata: {
      browser: 'Safari',
      os: 'iOS',
      completionRate: 30
    }
  }
];