import React, {useState, useEffect} from 'react';
import LoginTemplate from '../components/LoginTemplate';
import LoginForm from '../components/LoginForm';


function LoginPage() {
    return (
        <div>
            <LoginTemplate form={<LoginForm />} />
        </div>
    )
}

export default LoginPage;