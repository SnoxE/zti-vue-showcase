<template>
  <form
    class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0"
    @submit.prevent="submitForm"
  >
    <input
      v-model="itemName"
      placeholder="Enter item name"
      class="p-2 border border-gray-300 rounded sm:mr-2"
    />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
      Add Item
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddItemForm',
  emits: ['add-item'],
  data() {
    return {
      itemName: ''
    }
  },
  methods: {
    submitForm() {
      if (this.itemName.trim() !== '') {
        this.$emit('add-item', this.itemName)
        this.itemName = ''
      }
    }
  }
}
</script>
