<template>

    <div>
        <hr />

        <button @click="test">+++</button>
        <br />
        <input v-model.number="val" /> <button @click="addVal"> add</button>
        <br /><button @click="quit">退出</button>
    </div>

</template>


<script>
export default {
    data() {
        return {
            val: ''
        }
    },
    methods: {
        test() {

            this.$store.commit('increment')

        },
        addVal() {
            this.$store.commit('increment', this.val)
        },
        quit() {

            this.$store.commit('empty')
        }
    }

}


</script>