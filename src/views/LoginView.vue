<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="\src\assets\img\logomarca.png"
        alt="Univille"
      />
      <h2
        class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900"
      >
        SIGA
      </h2>
    </div>

    <!-- USUÁRIO-->

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <form class="space-y-6" action="#" method="POST"> -->
      <form class="space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Usuário</label
          >
          <div class="mt-2">
            <input
              v-model="form.user"
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!--SENHA-->

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Senha</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="form.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            @click="(getAll)"
            type="button"
            class="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UsersService from '@/services/UsersService'

const apiUsers = new UsersService()
const error = ref(false)


async function getAll() {
  await apiUsers.getAll(form.value)
    .then((response) => {
      if (response.status == 401) {
                error.value = true
            } else {
                error.value = false
                setLocalStorageContent(response.data)
                window.location.href = '/HomeView'
            }
        })
        .catch(e => {
            error.value = true
    })
}

const form = ref({
  user: '',
  password: ''
})

</script>
