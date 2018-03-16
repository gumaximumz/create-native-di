import { observable, action } from "mobx";
import Mockup from "./mockup"

export default class JobStore {
    @observable datas = []

    @action
    getDatas() {
        this.datas = Mockup
    }

    confirmGoods(result, id) {
        console.log('id:', id)
        console.log('encoded', result.encoded)
        console.log('pathName', result.pathName)
    }
}