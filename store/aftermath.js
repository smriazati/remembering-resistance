import branches from "~/static/media/4/branches.json";


export const state = () => ({
    branches: branches,
    finishedOnce: false
})

export const mutations = {

    finishedOnce(state) {
        state.finishedOnce = true;
    }
}
