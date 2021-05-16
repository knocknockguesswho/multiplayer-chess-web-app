import React from 'react';
import Form from 'Components/templates/form';

const Signup = () => {
  const SigninForm: React.ReactElement = (
    <Form
      inputGroupKeys={['username', 'email', 'password']}
      headerTitle='Create Your Account'
      formLabel='Sign Up'
    >
      <span>Already have an account. <a
        className='text-cyanBlue cursor-pointer'
        href={global.window && window.location.origin + '/signin'}
      >Sign in</a> instead?</span>
    </Form>
  );
  const [el, setEl] = React.useState(<></>);
  React.useEffect(() => {
    if (process.browser) setEl(SigninForm);
  }, []);
  return el;
};

export default Signup;
