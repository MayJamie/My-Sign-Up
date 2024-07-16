import React from 'react';
import Header from './header';
import Footer from './footer';
import CreateAccountForm from './createAccountForm'; // Ensure correct import path

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <main className="py-10 bg-gradient-to-r from-blue-900 to-teal-400">
        <div className="max-w-md mx-auto mt-10">
          <CreateAccountForm formTitle="Create Account" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;