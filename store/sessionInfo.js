export const state = () => ({
    hasSession: null,
    name: null,
    sessionCode: null,
    // name: 'Sarah', // reset to null
    // sessionCode: '01', // reset to null
    isExpanded: true
})

export const mutations = {
    setName(state, payload) {
        state.name = payload;
    },
    setSessionCode(state, payload) {
        state.sessionCode = payload;
    },
    closeMenu(state) {
        state.isExpanded = false;
    },
    openMenu(state) {
        state.isExpanded = true;
    }
}

export const getters = {
    hasSession(state) {
        if (state.name && state.sessionCode) {
            return true
        } else {
            return false;
        }

    }
}
