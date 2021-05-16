import React from 'react';
import Form from 'Components/templates/form';

const Signin = () => {
  const SigninForm: React.ReactElement = (
    <Form
      inputGroupKeys={['username', 'password']}
      headerTitle='Signin To Play'
      formLabel='Sign In'
    >
      <span>Dont have an account.<a
        className='text-cyanBlue cursor-pointer'
        href={global.window && window.location.origin + '/signup'}
      >Sign Up</a></span>
    </Form>
  );
  const [el, setEl] = React.useState(<></>);
  React.useEffect(() => {
    if (process.browser) setEl(SigninForm);
  }, []);
  return el;
};

export default Signin;
