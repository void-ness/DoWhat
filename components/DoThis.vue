<template>
  <div class="Todos">
    <div v-for="dodo in dodos" :key="dodo.id" class="Todo">
      <div class="header" :class="{'inactive-1': dodo.done}">
        <input type="checkbox" :checked="dodo.done" @change="update(dodo)" />
        <label class="title">{{ dodo.title }}</label>
      </div>
      <div class="content" :class="{ 'inactive-2':dodo.done }">
        <span>{{ dodo.desc }}</span>
        <button class="close" @click="removeDodo(dodo)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoThis',
  computed: {
    dodos() {
      return this.$store.state.DoWhat.list
    },
  },
  methods: {
    update(dodo) {
      this.$store.commit('DoWhat/update', dodo)
    },
    removeDodo(dodo) {
      this.$store.commit('DoWhat/remove', dodo)
    },
  },
}
</script>

<style>
.Todos {
  display: flex;
  flex-wrap: wrap;
  width: 69rem;
  margin: auto;
}

.Todo {
  position: relative;
  margin: 2rem;
}

.header {
  background: var(--green-color);
  width: 12rem;
  height: 1.8rem;
  position: absolute;
  left: -1.2rem;
  top: -0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  z-index: 1;
}

.header input[type='checkbox'] {
  cursor: pointer;
  appearance: none;
  background: transparent;
  height: 20px;
  width: 20px;
  border: 2px solid black;
  color: black;
  position: relative;
  margin: 0 0.5rem;
}

.header input[type='checkbox']:after {
  content: '';
  position: absolute;
  left: 25%;
  top: 3%;
  width: 4px;
  height: 11px;
  border: 2px solid rgb(57, 57, 57);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  display: none;
}

.header input[type='checkbox']:checked {
  color: black;
}

.header input[type='checkbox']:checked:after {
  display: block;
}

.header label {
  font-weight: 500;
}

.content {
  background: white;
  width: 19rem;
  height: 8rem;
  border-radius: 5px;
  padding-block-start: 1.6rem;
  padding-inline: 0.7rem;
  position: relative;
  z-index: 0;
}

.content span {
  font-weight: 400;
}

.title {
  font-weight: 500;
}

.close {
  position: absolute;
  right: 9px;
  bottom: 5px;
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-weight: 600;
}

.inactive-1 {
  background: var(--dark-green);
}

.inactive-2 {
  background: var(--gray-color);
}
</style>