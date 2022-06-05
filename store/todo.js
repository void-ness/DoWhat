export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      t: text,
      done: false,
      id: Date.now()
    })
  },
  remove(state, todo) {
    state.list = state.list.filter(item => item.id !== todo.id)
  },
  remove1(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}