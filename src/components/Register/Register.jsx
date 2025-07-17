import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsRegistered }) => {
    const navigate = useNavigate()
    const [state, setState] = useState('')
    const [form, setForm] = useState({
        fullname: '',
        nickname: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullname, nickname, email, password } = form;

        if (!fullname || !nickname || !email || !password) {
            setState('Iltimos, barcha maydonlarni to‘ldiring.');
            setTimeout(() => setState(''), 2500);
            return;
        }

        localStorage.setItem('user', JSON.stringify({ fullname, nickname }));
        localStorage.setItem('isRegistered', 'true');

        setIsRegistered(true);
        navigate('/home');
    };

    return (
        <div className="container register">
            <p><img className='logoimg' src='/images/Instagram-Logo-2016-present.png' height={100} alt="logo" /></p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ismingiz"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Foydalanuvchi nomi (nickname)"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Parol"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button type="submit">Ro'yxatdan o'tish</button>
                {state && <div className="notification">{state}</div>}
            </form>
        </div>
    );
};

export default Register;
