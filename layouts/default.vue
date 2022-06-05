<template>
  <div>
    <nav class="menu web">
      <ul>
        <li>
          <NuxtLink to="Contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="home">DoWhat</NuxtLink>
        </li>
        <li>
          <NuxtLink to="AboutUs">About Us</NuxtLink>
        </li>
      </ul>
    </nav>

    <nav class="menu phone">
      <div class="phone-nav">
        <ul>
          <li>
            <NuxtLink to="home">DoWhat</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="phone-menu">
        <i class="fa"></i>
      </div>

      <div class="phone-side-menu">
        <ul>
          <div class="phone-menu-close">
            <i class="fa"></i>
          </div>
          <li>
            <NuxtLink to="Contact">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="AboutUs">About Us</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/mobile.css',
          media: 'screen and (max-width: 700px)',
        },
      ],
    }
  },
}
</script>

<style>
.phone {
  display: none;
}

.menu ul {
  background: #54ffa3;
  display: flex;
  width: 55%;
  height: 6vh;
  margin: auto;
  margin-top: 4vh;
  border-radius: 2rem;
  justify-content: space-between;
  align-items: center;
}

.menu ul li {
  display: inline;
  list-style: none;
  padding: 0 3rem;
  font-weight: 600;
  font-size: 1.3rem;
  transition: all 0.2s ease-in;
}

.menu ul li:hover {
  transform: translateY(-3px);
}

.menu ul li a {
  text-decoration: none;
}
</style>

