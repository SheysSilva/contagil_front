<template>
  <div>
      <div class="home">
        <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
        <b-button class="el">import</b-button>
      </div>
      <Table/>
  </div>
</template>

<script>
import Table from '@/components/Table'
export default {
  data() {
    return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Registro 0000' },
          { value: 'b', text: 'Registro 0150' },
          { value: 'c', text: 'Registro 0190' },
          { value: 'd', text: 'Registro 0200' },
        ]
    }
  },
  components: {
    Table
  }
}
</script>
