<template>
  <section class="input">
    <div class="ques">
      <label>Enter Your Task</label>
      <input id="InpTitle" type="text" placeholder="What is the title of your task?" />
    </div>

    <div class="ques">
      <label>Enter Task Desc.</label>
      <input id="InpDesc" type="text" placeholder="Briefly Explain Your Task" />
    </div>

    <button class="add" @click="createDodo()">Add</button>
  </section>
</template>

<script>
export default {
  name: 'InputQues',
  methods: {
    createDodo() {
      const title = document.getElementById('InpTitle').value
      const desc = document.getElementById('InpDesc').value
      if (title === '' || desc === '') {
        alert('Please Enter Task Details Properly')
      } else {
        this.$store.commit('DoWhat/create', { title, desc })
        document.getElementById('InpDesc').value = ''
        document.getElementById('InpTitle').value = ''
      }
    },
  },
}
</script>

<style>
.input {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.ques {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.ques label {
  color: white;
  width: 15rem;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
}

.ques input {
  background: var(--green-color);
  width: calc(53vw - 18rem);
  height: 2.5em;
  padding-inline: 1em;
  font-weight: 200;
}

.ques input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px var(--green-color) inset;
  box-shadow: 0 0 0px 1000px var(--green-color) inset;
}

.add {
  background: var(--green-color);
  width: 6.5rem;
  height: 2.5rem;
  margin-top: 2rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>