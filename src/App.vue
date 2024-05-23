<template>
  <div
    id="app"
    class="min-h-screen flex flex-col items-center bg-dark-mode-gray text-gray-900 p-10"
  >
    <h1 class="text-4xl font-bold mb-6 text-white">Item List</h1>
    <AddItemForm @add-item="addItem" />
    <ItemList :items="items" @delete-item="deleteItem" />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import AddItemForm from '@/components/AddItemForm.vue'

export default {
  name: 'App',
  components: {
    ItemList,
    AddItemForm
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      runningId: 4
    }
  },
  methods: {
    addItem(name) {
      if (name.trim() !== '') {
        const newItem = {
          id: this.runningId,
          name: name
        }
        this.items.push(newItem)
        this.runningId += 1
      }
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id)
    }
  }
}
</script>
