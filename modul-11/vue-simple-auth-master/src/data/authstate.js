import { reactive } from "vue";
import axios from 'axios';


const AuthState = reactive({
    isAuthenticated: false,
    user: null,
    username: null,
    password: null,
});

export default AuthState