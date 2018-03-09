import { observable, action } from "mobx";

export default class JobStore {
    constructor(api) {
        this._api = api
    }
    @observable datas = []

    @action
    getDatas() {
        this._api.get(`/job/bydriver`).then(res => {
            if (res.code === '00') {
                this.datas = res.data
            }
        })
    }

    confirmGoods(result, id) {
        this._api.put(`/job/signutureconfirm/${id}`, result.encoded ).then(res => {
            if (res.code == '00')
                this.getDatas()
        })
    }
}