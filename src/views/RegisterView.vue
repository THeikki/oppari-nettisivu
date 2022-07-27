<template>
  <div>
    <RegisterComponent
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
  methods: {
    ...mapActions([
      'onSubmit'
    ])
  }
}
</script>

<style scoped></style>
