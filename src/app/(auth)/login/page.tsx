'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  return (
    <div>login page</div>
  );
};

export default LoginPage;
