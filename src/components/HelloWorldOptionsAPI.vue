<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled because of using defineComponent
  props: {
    msg: { type: String, required: true }
  },
  data() {
    return {
      count: 0
    }
  },
  computed: {
    // explicitly annotate return type
    doubleCount(): number {
      return this.count * 2
    }
  },
  methods: {
    // implicit return type
    increment() {
      return this.count++
    }
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <h3>count doubled is: {{ doubleCount }}</h3>
    <p>
      This comes from the vue3 component library
    </p>
  </div>
</template>
