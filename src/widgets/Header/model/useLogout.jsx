import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useNavigate} from 'react-router-dom';
import {removeFromStorage} from '/src/app/lib/removeFromStorage';

export function useLogout() {
    const context = useContext(GlobalStates);
    const setAuthCompleted = context.setAuthCompleted;
    const burgerToggle = context.burgerToggle;
    const navigate = useNavigate();

    const handleLogout = () => {
        burgerToggle();
        localStorage.clear();
        setAuthCompleted(false);
        navigate('/auth');
    };

    return handleLogout;
}
