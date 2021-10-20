import { useState } from "react"

const useCustomState = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return [
        email,
        setEmail,
        password,
        setPassword
    ]
}

export default useCustomState;