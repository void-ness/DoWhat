export const state = () => ({
    list: [],
})

export const mutations = {
    create(state, Inp) {
        state.list.push({
            title: Inp.title,
            desc: Inp.desc,
            done: false,
            id: Date.now(),
        })
    },

    update(state, dodo) {
        dodo.done = !dodo.done
    },

    remove(state, dodo) {
        state.list.splice(state.list.indexOf(dodo), 1)
    },
}