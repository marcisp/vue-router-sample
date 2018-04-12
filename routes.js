import Welcome from './components/Welcome.vue'
import About from './components/About.vue'
import ContactUs from './components/ContactUs.vue'
import Users from './components/Users.vue'
import User from './components/User.vue'
import { db } from './firebase'

export const routes = [
  { path: '', name: 'welcome', component: Welcome },
  { path: '/about', name: 'about', component: About },
  { path: '/contact-us', name: 'contact-us', component: ContactUs },
  { path: '/users', component: Users },
  { path: '/user/:id', name: 'user', component: User, beforeEnter: (to, from, next) => {
    checkIsUserExists(to.params.id)
      .then(userExists => {
        if (userExists()) {
          next()
        } else {
          next('/users')
        }
      })
  } },
  { path: '/a', redirect: { name: 'about' }},
  { path: '/w', redirect: { name: 'welcome' }},
  { path: '/h', redirect: { name: 'welcome' }},
]

const idExistsInDb = (res, id) => {
  return res.docs.some(doc => {
    return doc.id === id
  })
}

const checkIsUserExists = id => {
  const usersCollectionRef = db.collection('users').get()
  const result = usersCollectionRef.then(res => idExistsInDb.bind(this, res, id))
  return result
}