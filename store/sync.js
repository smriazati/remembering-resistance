export const state = () => ({
    activeSection: null
})

export const mutations = {
    activateSection(state, payload) {
        state.activeSection = payload;
    },
}




