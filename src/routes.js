import Home from './views/Home.vue'
const Select = () => import('./views/Select.vue')
const About = () => import('./views/About.vue')
const Singleplayer = () => import('./views/game/Singleplayer.vue')
const Multiplayer = () => import('./views/game/Multiplayer.vue')
const Lobby = () => import('./views/game/Lobby.vue')
import NotFound from './views/NotFound.vue'

// const UserDetails = () => import('./views/UserDetails')

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/select', component: Select, meta: { title: 'Gamemode auswählen' } },
  { path: '/lobby', component: Lobby, meta: { title: 'Lobby' } },
  { path: '/game', component: Singleplayer, meta: { title: 'Singleplayer' } },
  { path: '/multiplayer/:id', component: Select, meta: { title: 'Multiplayer' } },

  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
