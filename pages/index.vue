<template>
  <div>
    <InputQues class="InputQues" />
    <DoThis class="op" />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
}
</script>

<style scoped>
.InputQues {
  margin-top: 7rem;
}

/* div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

ul {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] {
  margin: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>