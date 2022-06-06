<template>
  <div class="contact">
    <span class="contact-query">Have Any Queries?</span>
    <span class="contact-text">
      Feel Free to reach out to us for product related feedback.
      <br />Happy to help you!
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style>
.contact {
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  color: var(--green-color);
  text-align: center;
}

.contact-query {
  font-size: 2rem;
  font-weight: 600;
  display: block;
}

.contact-text {
  display: block;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 2rem;
}
</style>