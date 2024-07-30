import React from 'react';
import CreateAccountForm from './createAccountForm'; // Ensure correct import path
import RoleSelection from './roleSelection';
import CourseCatalogue from './courseCatalogue';


//make note of the first time user for presentation
const SignUpPage = (props: any) => {
  const firstTimeUser = props.searchParams?.firstTimeUser === '1'
  
  return (
    <div>
       {
        firstTimeUser ?
          <RoleSelection /> :
          <CourseCatalogue />
       }
    </div>
  );
};

export default SignUpPage;
