const firebase = require('firebase/app');
const firebaseui = require('firebaseui');

const config = {
  apiKey: process.env.GRIDSOME_API_KEY,
  authDomain: process.env.GRIDSOME_AUTH_DOMAIN,
  databaseURL: process.env.GRIDSOME_DATABASE_URL,
  projectId: process.env.GRIDSOME_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

import DefaultLayout from '~/layouts/Default.vue';
import ClientLayout from '~/layouts/Client.vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('ClientLayout', ClientLayout);

  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      user: {
        id: 'uN1o7E21taQVZwieGmYl',
        firstName: 'Jamie',
        lastName: 'Pittman'
      }
    },
    mutations: {}
  });
}
