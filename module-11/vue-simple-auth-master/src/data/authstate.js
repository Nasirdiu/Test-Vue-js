import { reactive } from "vue";
import axios from 'axios';
import router from "../router";

const AuthState = reactive({
    isAuthenticated: false,
    user: null,
    username: null,
    password: null,
    login() {
        // console.log({username:this.username,password:this.password});

        axios.post('http://localhost:8001/index.php', {
            email: this.username,
            password: this.password
        }).then((response) => {
            if (response.data.success == 1) {
                this.isAuthenticated = true
                this.user = response.data
                this.password = null
                this.username = null
                router.push('/')
            }

        })

    },
    logout(){
        this.isAuthenticated = false
        this.user = null
        router.push('/')
    }
});

export default AuthState