import { reqCateGoryList } from '@/api'

export default {
    state: {
        categoryList: []
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        }
    },
    actions: {
        async categoryList({ commit }) {
            let res = await reqCateGoryList()
            // console.log(res);
            if (res.code === 200) {
                commit('CATEGORYLIST', res.data)
            }
        }
    },
    getter: {}
}