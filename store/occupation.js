import markers from "~/static/media/2/markers.json";
import stories from "~/static/media/2/stories.json";


export const state = () => ({
    stories: stories,
    markers: markers,
    activeStory: null,
    previewStory: null,
    viewedStories: [],
    finishedOnce: false
})

export const mutations = {
    previewStory(state, payload) {
        state.previewStory = payload;
    },
    unpreviewStory(state) {
        state.previewStory = null;
    },
    activateStory(state, payload) {
        state.activeStory = payload;
    },
    deactivateStory(state, payload) {
        state.activeStory = null;
        if (!state.viewedStories.includes(payload)) {
            state.viewedStories.push(payload)
        }
    },
    resetMap(state) {
        state.viewedStories = [];
        state.activeStory = null;
        state.previewStory = null;
        state.finishedOnce = true;
    },
    resetSection(state) {
        state.viewedStories = [];
        state.activeStory = null;
        state.previewStory = null;
        state.finishedOnce = false;
    }
}