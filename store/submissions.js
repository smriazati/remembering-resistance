
export const state = () => ({
    submissions: [],
    unlocked: ['aftermath'],
    isExpanded: false,
    isHidden: true,
    requiredSubmissions: [
        {
            id: "occupation",
            headline: "Occupation",
            prompt: "How did the Nazis and the Ukrainians harm the Jews of Tuchyn?",
            next: "resistance",
            storyPath: "/exhibit/occupation",
            unlocked: false,
            response: null
        },
        {
            id: "resistance",
            headline: "Resistance",
            prompt:
                "How did the people of Tuchyn resist the violence against the Jews?",
            next: "aftermath",
            storyPath: "/exhibit/resistance/branches",
            unlocked: false,
            response: null
        },
        {
            id: "aftermath",
            headline: "Aftermath",
            prompt: "What questions do you still have? We want to hear from you!",
            next: "conclusion",
            storyPath: "/exhibit/aftermath/branches",
            unlocked: false,
            response: null
        }
    ]
})

export const mutations = {
    hideSubmissions(state) {
        state.isHidden = false;
    },
    showSubmissions(state) {
        state.isHidden = true;
    },
    closeSubmissions(state) {
        state.isExpanded = false;
    },
    openSubmissions(state) {
        state.isExpanded = true;
        state.isHidden = false;
    },
    unlockTalkback(state, payload) {
        state.requiredSubmissions.forEach(s => {
            if (s.id === payload) {
                s.unlocked = true;
            }
        })
    },
    submitResponse(state, payload) {

        state.requiredSubmissions.forEach(s => {
            if (s.id === payload.id) {
                s.response = payload.submission
                if (!s.unlocked) {
                    s.unlocked = true;
                }
            }
        })
    },
    deleteResponse(state, payload) {
        state.requiredSubmissions.forEach((item) => {
            if (item.id === payload) {
                item.response = null
            }// payload is id
        })
    },
    resetExhibit(state) {
        state.submissions = []
    },

}


export const getters = {
    requiredCount(state) {
        return state.requiredSubmissions.length;
    },

    submissionsComplete(state) {
        let completed = [];
        state.requiredSubmissions.forEach(i => {
            if (i.response !== null) {
                completed.push(i);
            }
        })

        if (completed.length === state.requiredSubmissions.length) {
            return true;
        } else {
            return false;
        }
    }
}
