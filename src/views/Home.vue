<template>
  <div class="Home">
    <div class="Home-body">
      <div class="Home-title">
        <img src="/img/ico-galaga.png" alt="">
        <h1>Flight check-in</h1>
      </div>

      <template v-if="isChecking">
        <p class="nes-balloon from-left nes-pointer">
          Realizando check-in, espera un momento...
        </p>
        <progress class="nes-progress is-success" :value="progressBar" max="100"></progress>
      </template>

      <template v-else>
        <div class="Home-welcome">
          <div class="nes-container is-rounded is-dark">
            Bienvenido, ingresa tus datos e intentaremos realizar el check-in
            de tu vuelo de forma automática.
          </div>
        </div>

        <ValidationObserver ref="form">
          <form
            class="Form"
            @submit.prevent="submit"
          >
            <v-input
              name="Código vuelo"
              placeholder="0000"
              rules="required"
              v-model="code"
            />
            <v-input
              name="Apellido"
              rules="required"
              v-model="lastName"
            />
            <v-input
              name="Fecha de nacimiento"
              type="date"
              rules="required"
              v-model="date"
            />
            <v-input
              name="RUT"
              placeholder="11.111.111.1"
              rules="required|rut"
              v-model="dni"
            />
            <v-input
              name="Expiración documento"
              type="date"
              rules="required"
              v-model="expDni"
            />

            <div class="Form-submit">
              <button
                type="submit"
                class="nes-btn is-primary"
                @click.prevent="submit"
              >
                Continuar
              </button>
            </div>
          </form>
        </ValidationObserver>

        <dialog class="nes-dialog is-rounded" id="dialog">
          <form method="dialog">
            <p class="title">Confirmar</p>
            <p>
              ¿Estás seguro que deseas continuar?
            </p>
            <menu class="dialog-menu">
              <button class="nes-btn">Cancelar</button>
              <button class="nes-btn is-primary" @click="confirm()">Continuar</button>
            </menu>
          </form>
        </dialog>
      </template>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import vInput from '@/components/v-Input'

export default {
  name: 'Home',

  components: {
    ValidationObserver,
    vInput
  },

  data: () => ({
    code: '',
    lastName: '',
    date: '',
    dni: '',
    expDni: '',
    isChecking: false,
    progressBar: 0
  }),

  methods: {
    async submit () {
      console.log(await this.$refs.form.validate())
      document.getElementById('dialog').showModal()
    },

    confirm () {
      this.isChecking = true
      this.loading()
    },

    async loading () {
      for (let i = 0; i < 100; i++) {
        await this.delay(80)
        this.progressBar = i
      }
    },

    delay (time) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }
  }
}
</script>

<style>
.Home-title {
  text-align: center;
  margin-bottom: 2em;
  color: var(--color-white);
}

.Home-title h1 {
  font-size: 1.6rem;
}

.Home-title img {
  max-width: 80px;
  margin: 0 0 1em;
}

.Home-welcome {
  margin: 2em 0;
  font-size: .8rem;
}

.Form-field {
  margin-bottom: 2em;
}

.Form-submit {
  text-align: center;
}

.nes-dialog {
  text-align: center;
}

.dialog-menu {
  display: inline-block;
  padding: 0;
}

.dialog-menu button + button {
  margin: 1em;
}
</style>
