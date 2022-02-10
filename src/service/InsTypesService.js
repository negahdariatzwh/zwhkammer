import ApiService from "./ApiService";

const InsTypeService = {
    listInsTypes: async () => {
        try {
            let params = new URLSearchParams()
            let data = await ApiService.post("https://kammer.hubgrade-dev.de/estabtype/list", params).then((response) => response.data);
            return data
        } catch (er) {
            return false
        }
    },

    addInsTypes: async (insTypesPayload) => {
        try {
            // let params = new URLSearchParams(insTypesPayload)
            let data = await ApiService.post("https://kammer.hubgrade-dev.de/estabtype/add", insTypesPayload).then((response) => response.data);
            return data
        } catch (er) {
            return false
        }
    },

    delInsTypes: async (insTypesId) => {
        try {
            // let params = new URLSearchParams(insTypesPayload)
            let data=await ApiService.post("https://kammer.hubgrade-dev.de/estabtype/delete/" +insTypesId).then((response) => response.data);
            return data
        } catch (er) {
            return false
        }
    },
    
    activate: async (id) => {
        try {
            await ApiService.post("https://kammer.hubgrade-dev.de/estabtype/activate/" + id);
            return true
        } catch (ex) {
            return false
        }
    },
    deactivate: async (id) => {
        try {
            await ApiService.post("https://kammer.hubgrade-dev.de/estabtype/deactivate/" + id);
            return true
        } catch (ex) {
            return false
        }
    }

}
export default InsTypeService