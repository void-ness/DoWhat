<template>
  <div>
    <nav class="menu web">
      <ul>
        <li>
          <NuxtLink to="Contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">DoWhat</NuxtLink>
        </li>
        <li>
          <NuxtLink to="AboutUs">About Us</NuxtLink>
        </li>
      </ul>
    </nav>

    <nav class="phone">
      <div class="menu phone-nav">
        <ul>
          <li>
            <NuxtLink to="/">DoWhat</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="phone-menu">
        <button id="toggler" @click="ToggleMenu()">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      <div id="side-menu" class="phone-side-menu">
        <ul>
          <!-- <div class="phone-menu-close">
            <i class="fa"></i>
          </div>-->
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
  data() {
    return {
      count: 1,
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '/css/mobile.css',
        media: 'screen and (max-width: 700px)',
      },
    ],
  },
  methods: {
    ToggleMenu() {
      const toggle = document.getElementById('toggler')
      const menu = document.getElementById('side-menu')

      if (this.count) {
        toggle.firstChild.style.transform = 'rotate(90deg)'
        toggle.firstChild.style.color = 'black'
        menu.style.right = '0'
        menu.style.transition = 'all 0.8s ease-out'
        this.count = 0
      } else {
        toggle.firstChild.style.color = 'var(--green-color)'
        toggle.firstChild.style.transform = 'rotate(0deg)'
        menu.style.right = '-100%'
        menu.style.transition = 'all 0.8s ease-in'
        this.count = 1
      }
    },
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

