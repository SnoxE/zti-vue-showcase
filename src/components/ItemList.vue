<template>
  <div class="p-6 mx-auto w-full max-w-screen-sm">
    <ul class="list-none p-0">
      <li
        v-for="item in items"
        :key="item.id"
        class="bg-gray-100 p-3 rounded flex flex-row justify-between items-center mb-3"
      >
        <span class="text-xl">ID: {{ item.id }}</span>
        <span class="text-xl">{{ item.name }}</span>
        <button
          class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
          @click="$emit('delete-item', item.id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  emits: ['delete-item']
}
</script>
