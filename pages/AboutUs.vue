<template>
  <div class="About-para">
    <span class="about-heading">About Us</span>
    <p class="about-text">
      <span>Do This! Do That! ... Do What? We all are living such a fast paced life that one can expect to forget things easily. Well not anymore, Say Hi to DoWhat, A task managaer web-app. It allows you to keep a track of your tasks.</span>
      <br />
      <br />Keeping in mind the needs of the users, The app offers four crucial functions.
      <br />
      <br />1. Create new Task.
      <br />2. Read your tasks
      <br />3. Check off tasks from your list.
      <br />4. Delete The tasks.
      <br />
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head: {
    title: 'About Us',
  },
}
</script>

<style>
.About-para {
  width: 80vw;
  margin: auto;
  color: var(--green-color);
  text-align: center;
  margin-top: 2rem;
}

.about-heading {
  font-size: 2rem;
  font-weight: 600;
}

.about-text {
  margin-top: 1rem;
  font-weight: 400;
  text-align: left;
  font-size: 1rem;
}

.about-text span {
  text-align: justify;
}
</style>