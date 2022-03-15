import ApiService from "./ApiService";
import axios from "axios";
//import { toast } from "react-toastify"
const APIList = [{ name: "kammer", apiAddress: "https://kammer.hubgrade-dev.de/" }, { name: "zzls", apiAddress: "https://zzls.hubgrade-dev.de/" }];


function findApiByName(xname) {
    return APIList.find((element) => {
        return element.name === xname;
    })
}
const DynamicService = {
    list: async (apiName, apiController, page = 1, order_item = ["_id"], sortDirection = 1, filter, searchItem, searchValue) => {
        let { apiAddress } = findApiByName(apiName);
        let query = `?page=${page}&orderby[${order_item}]=${sortDirection}`;
        if (searchItem && searchValue) {
            query = query + `&search[${searchItem}][like]=${searchValue}`;
        }
        try {
            let apiToCall = apiAddress + apiController + '/list' + query
            let data = await ApiService.post(apiToCall, filter).then((response) => response.data);
            return data;
        } catch (ex) {

            return false
        }
    },
    listId: async (apiName, apiController, apiMethod, Id, page = 1, order_item = ["_id"], sortDirection = 1, filter, searchItem, searchValue) => {
        let { apiAddress } = findApiByName(apiName);
        let query = `?page=${page}&orderby[${order_item}]=${sortDirection}`;
        if (searchItem && searchValue) {
            query = query + `&search[${searchItem}][like]=${searchValue}`;
        }
        try {
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/' + Id + query
            let data = await ApiService.post(apiToCall, filter).then((response) => response.data);
            return data;
        } catch (ex) {
            //if (ex.response.status == "403") {
            //    toast.error("API : Sie sind nicht berechtigt, diese Aktion durchzuführen")
            //}

            //console.log("API Error", ex.response.status);
            return false
        }
    },
    listIdAll: async (apiName, apiController, apiMethod, Id, order_item = ["_id"], sortDirection = 0, searchItem, searchValue) => {
        let { apiAddress } = findApiByName(apiName);
        let query = `?orderby[${order_item}]`;
        if (sortDirection !== 0) {

            query = `?orderby[${order_item}]=${sortDirection}`;
        }
        if (searchItem && searchValue) {
            query = query + `&search[${searchItem}][like]=${searchValue}`;
        }
        try {
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/' + Id + query
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data;
        } catch (ex) {
            return false
        }
    },
    trash: async (apiName, apiController, page = 1, order_item = ["_id"], sortDirection = 1) => {
        let { apiAddress } = findApiByName(apiName);
        let query = `?page=${page}&orderby[${order_item}]=${sortDirection}`;
        try {
            let apiToCall = apiAddress + apiController + '/trash' + query
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data;
        } catch (ex) {
            return false
        }
    },
    getId: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/id/' + id
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },

    delete: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/delete/' + id
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },
    remove: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/remove/' + id
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },
    restore: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/restore/' + id
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },

    dynamicGet: async (api) => {
        try {
            let data = await ApiService.get(api).then((response) => response.data);
            //console.log("hhh", data);
            return data
        } catch (ex) {
            return false
        }
    },

    dynamicPost: async (apiName, apiController, apiMethod, payload) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/';
            let xdata = await axios({
                url: apiToCall,
                method: 'post',
                headers: {
                    'Content-Type': 'x-www-form-urlencoded;charset=utf-8',
                },
                data: payload
            }).then((response) => response.data);
            return xdata
        } catch (ex) {
            return false
        }
    },
    dynamicPostAuth: async (apiName, apiController, apiMethod, payload, token) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/';
            let xdata = await axios({
                url: apiToCall,
                method: 'post',
                mode: 'no-cors',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: payload
            }).then((response) => response.data);
            return xdata
        } catch (ex) {
            return false
        }
    },
    post: async (apiName, apiController, apiMethod, token, payload) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/';
            console.log('dynamicpost:', apiToCall);
            let xdata = await axios({
                url: apiToCall,
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'x-www-form-urlencoded;charset=utf-8'
                },
                data: payload
            }).then((response) => response.data);
            return xdata
        } catch (ex) {
            return false
        }
    },
    postId: async (apiName, apiController, apiMethod, Id, payload, token) => {
        try {
            console.log('log Payload', payload);
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/' + Id;
            console.log('dynamicpost:', apiToCall);
            let xdata = await axios({
                url: apiToCall,
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'x-www-form-urlencoded;charset=utf-8'
                },
                data: payload
            }).then((response) => response.data);
            return xdata
        } catch (ex) {
            return false
        }
    },

    update: async (apiName, apiController, id, payload) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/update/' + id;
            let data = await ApiService.post(apiToCall, payload).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },

    statusChanger: async (apiName, apiController, id, columnName, newStatus) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/update/' + id;

            const formPayload = new FormData();
            formPayload.append(columnName, newStatus);
            let data = await ApiService.post(apiToCall, formPayload).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },

    activate: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/activate/' + id;
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            console.log('data activate in Dynamic service line 239', data);
            return data
        } catch (ex) {
            return false
        }
    },
    deactivate: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/deactivate/' + id;
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },
    add: async (apiName, apiController, payload) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/add'
            let data = await ApiService.post(apiToCall, payload).then((response) => response.data);
            return data
        } catch (er) {
            return false
        }
    },

    addId: async (apiName, apiController, id, payload) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/add/' + id
            let data = await ApiService.post(apiToCall, payload).then((response) => response.data);
            return data
        } catch (er) {
            return false
        }
    }


}

export default DynamicService