
<script setup lang="ts">
import { ref } from 'vue';
const count = ref(1)
const add = () => { 
    count.value+=1
}
</script>

<template>
<h1>setup</h1>
    {{count}}
    <br>
    <button @click="add">
        +
    </button>
</template>
 