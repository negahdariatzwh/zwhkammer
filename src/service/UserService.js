import ApiService from "./ApiService";

const UserService = {
    registerEmail: async (emailAddress) => {
        try {
            await ApiService.get(`/register/regmail?email=${emailAddress}&activation=https://zzls.hubgrade-dev.de/register/activateemail`);
            return true
        } catch (ex) {
            return false
        }
    },
    userLogin: async (username, password) => {
        try {
            let params = new URLSearchParams()
            params.append("username", username)
            params.append("password", password)
            let { data } = await ApiService.post(`/login/email`, params);

            localStorage.setItem('token', data.token)
            return true
        } catch (ex) {
            return false
        }
    },
    listUsers: async () => {
        try {
            let params = new URLSearchParams()
            let data = await ApiService.post("https://zzls.hubgrade-dev.de/user/list", params).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },

    activate: async (id) => {
        try {
            await ApiService.post("https://zzls.hubgrade-dev.de/user/activate/" + id);
            return true
        } catch (ex) {
            return false
        }
    },
    deactivate: async (id) => {
        try {
            await ApiService.post("https://zzls.hubgrade-dev.de/user/deactivate/" + id);
            return true
        } catch (ex) {
            return false
        }
    },
    addUser: async (payload) => {
        try {
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.post("https://zzls.hubgrade-dev.de/user/admincreate", payload).then((response) => response.data);
            // console.log(data);
            return data
        } catch (er) {
            return false
        }
    },

    getUser: async (id) => {
        try {
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.get("https://zzls.hubgrade-dev.de/user/id/" + id).then((response) => response.data);
            // console.log(data);
            return data
        } catch (er) {
            return false
        }
    }
}

export default UserService