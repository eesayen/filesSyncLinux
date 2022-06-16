<!-- 
<script lang="ts">

export default {
    name:"barIndex"
}
</script> -->
<script setup lang="ts">
import { ref } from 'vue';
// import bar from "./Bar.vue"

// import barIndex from "./barIndex.vue"

import * as All from "./compponents/index"
const count = ref(1)
const add = () => { 
    count.value+=1
}

 
 
const booleanControl = ref(false);
const handleSwith = () => { 
    booleanControl.value=!booleanControl.value
}

 

</script>

<template>
<h1>setup</h1>
    {{count}}
    <br>
    <button @click="add">
        +
    </button>

    <All.Bar/>
    <All.Bar/>
    ---
    <button @click="handleSwith">
        switchComponent
    </button>
    <component :is="booleanControl?All.barIndex:All.Bar"/>
</template>
 