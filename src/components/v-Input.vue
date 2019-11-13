<template>
  <div class="Form-field">
    <ValidationProvider
      :rules="rules"
      v-slot="{ errors, classes }"
    >
      <label :for="_name" v-text="name"></label>
      <input
        :type="type"
        class="nes-input is-dark"
        :class="classes"
        :id="_name"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="emitInput"
      >
      <div class="Form-error" v-if="errors[0]">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider, extend, configure, localize } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'
import { rutValidate } from 'rut-helpers'

/**
 * Validation rules
 */
extend('rut', {
  validate: value => rutValidate(value),
  message: 'RUT ingresado inválido'
})
extend('required', required)
extend('min', min)

/**
 * Validation config
 */
configure({
  classes: {
    valid: 'is-success',
    invalid: 'is-error'
  }
})

localize({
  en: {
    messages: {
      required: 'Campo requerido'
    }
  }
})

export default {
  props: {
    type: {
      type: String,
      default: 'text',
      validator: type => {
        return type === 'text' || type === 'date'
      }
    },
    initValue: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: String,
    rules: String,
    success: Boolean,
    warning: Boolean,
    error: Boolean
  },

  components: {
    ValidationProvider
  },

  computed: {
    _name () {
      return this.name.replace(/\s+/g, '-').trim().toLowerCase()
    },

    _classes () {
      return {
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error
      }
    }
  },

  data () {
    return {
      inputValue: this.initValue
    }
  },

  methods: {
    emitInput () {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style>
.Form-field {
  color: var(--color-white);
}

.Form-error {
  margin: .4em 0;
  font-size: .8rem;
}
</style>
