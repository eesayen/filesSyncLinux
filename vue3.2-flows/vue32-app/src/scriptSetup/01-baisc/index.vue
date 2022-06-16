<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() { 
        const count = ref(1);

        const add = () => { 
            count.value+=1
        }
        return {
            count,
            add
        }
        
    }
})
</script>



<template>

{{count}}

<button @click="add">
    +
</button>
</template>
<style scoped></style>