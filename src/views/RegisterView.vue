<template>
  <div>
    <RegisterComponent
      :text='text'
      :onSubmit='onSubmit'
    />
  </div>
</template>
<script>
import RegisterComponent from '@/components/RegisterComponent.vue'
import { mapActions } from 'vuex'

export default {
  name: 'RegisterView',
  components: {
    RegisterComponent
  },
  data () {
    return {
      text: 'Welcome to register page'
    }
  },
  methods: {
    ...mapActions([
      'onSubmit'
    ])
  }
}
</script>

<style scoped></style>
