import ApiService from "./ApiService";
import { toast } from "react-toastify"
const APIList = [{ name: "kammer", apiAddress: "https://kammer.hubgrade-dev.de/" }, { name: "zzls", apiAddress: "https://zzls.hubgrade-dev.de/" }];


function findApiByName(xname) {
    return APIList.find((element) => {
        return element.name === xname;
    })
}
const DynamicService = {
    list: async (apiName, apiController, page = 1, order_item = ["_id"], sortDirection = 1) => {
        let { apiAddress } = findApiByName(apiName);
        let query = `?page=${page}&orderby[${order_item}]=${sortDirection}`;
        try {
            let apiToCall = apiAddress + apiController + '/list' + query
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data;
        } catch (ex) {

            return false
        }
    },
    listId: async (apiName, apiController, apiMethod, Id, page = 1, order_item = ["_id"], sortDirection = 1) => {
        let { apiAddress } = findApiByName(apiName);
        let query = `?page=${page}&orderby[${order_item}]=${sortDirection}`;
        try {
            let apiToCall = apiAddress + apiController + '/' + apiMethod + '/' + Id + query
            let data = await ApiService.get(apiToCall).then((response) => response.data);
            return data;
        } catch (ex) {
            //if (ex.response.status == "403") {
            //    toast.error("API : Sie sind nicht berechtigt, diese Aktion durchzuführen")
            //}

            //console.log("API Error", ex.response.status);
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

    activate: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/activate/' + id;
            await ApiService.post(apiToCall);
            return true
        } catch (ex) {
            return false
        }
    },
    deactivate: async (apiName, apiController, id) => {
        try {
            let { apiAddress } = findApiByName(apiName);
            let apiToCall = apiAddress + apiController + '/deactivate/' + id;
            await ApiService.post(apiToCall);
            return true
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