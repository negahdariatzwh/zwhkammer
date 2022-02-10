import ApiService from "./ApiService";

const InstituteService = {
    list: async (page = 1, order_item = ["_id"], sortDirection = 1) => {
        let order
        switch (order_item) {
            case "Name":
                order = "name"
                break
            default: order = order_item
        }

        let query = `?page=${page}&orderby[${order}]=${sortDirection}`;
        try {
            let data = await ApiService.get('https://kammer.hubgrade-dev.de/establishment/list' + query
            ).then((response) => response.data);
            return data
        } catch (ex) {
            return false
        }
    },

    activate: async (id) => {
        try {
            await ApiService.post("https://kammer.hubgrade-dev.de/establishment/activate/" + id);
            return true
        } catch (ex) {
            return false
        }
    },
    deactivate: async (id) => {
        try {
            await ApiService.post("https://kammer.hubgrade-dev.de/establishment/deactivate/" + id);
            return true
        } catch (ex) {
            return false
        }
    },
    add: async (payload) => {
        try {
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.post("https://kammer.hubgrade-dev.de/establishment/admincreate", payload).then((response) => response.data);
            // console.log(data);
            return data
        } catch (er) {
            return false
        }
    },

    get: async (id) => {
        try {
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.get("https://kammer.hubgrade-dev.de/establishment/id/" + id).then((response) => response.data);
            // console.log(data);
            return data
        } catch (er) {
            return false
        }
    }
}

export default InstituteService