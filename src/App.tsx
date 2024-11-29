import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { Layout } from '@/components/Layout';

// Import pages
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Contact from '@/components/pages/Contact';
import Login from '@/components/pages/Login';
import Register from '@/components/pages/Register';
import Dashboard from '@/components/pages/Dashboard';
import Forms from '@/components/pages/Forms';
import FormBuilder from '@/components/pages/FormBuilder';
import FormResults from '@/components/pages/FormResults';
import Templates from '@/components/pages/Templates';
import Account from '@/components/pages/Account';
import Help from '@/components/pages/HelpAndSupport';
import Terms from '@/components/pages/Terms';
import Privacy from '@/components/pages/Privacy';
import Cookies from '@/components/pages/Cookies';
import Pricing from '@/components/pages/Pricing';
import CreateForm from '@/components/pages/CreateForm';
import AIFormCreator from '@/components/pages/AIFormCreator';
import FormBuilderProduct from '@/components/products/FormBuilder';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='/forms/new' element={<FormBuilder />} />
            <Route path='/forms/create' element={<CreateForm />} />
            <Route path='/forms/ai-create' element={<AIFormCreator />} />
            <Route path='/forms/:formId/results' element={<FormResults />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/account' element={<Account />} />
            <Route path='/help' element={<Help />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/legal/terms' element={<Terms />} />
            <Route path='/legal/privacy' element={<Privacy />} />
            <Route path='/legal/cookies' element={<Cookies />} />
            <Route
              path='/products/form-builder'
              element={<FormBuilderProduct />}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
