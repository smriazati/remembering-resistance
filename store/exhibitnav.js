export const state = () => ({
    activeSection: null,
    isExpanded: true,
    isHidden: false,
    finishedExhibitOnce: false
})

export const mutations = {
    activateSection(state, payload) {
        state.activeSection = payload;
    },
    hideNav(state) {
        // state.isHidden = true;
    },
    toggleMenu(state) {
        state.isExpanded = !state.isExpanded;
    },
    closeMenu(state) {
        state.isExpanded = false;
    },
    openMenu(state) {
        state.isExpanded = true;
    },
    setFinishedExhibitOnce(state) {
        state.finishedExhibitOnce = true;
    }
}




