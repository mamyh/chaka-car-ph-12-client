import { useContext } from 'react';
import { Context } from '../AuthContext/AuthContext';

const useAuth = () => useContext(Context);

export default useAuth;
