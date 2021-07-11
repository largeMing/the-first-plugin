<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <vpay
            ref="pays"
            v-model="show"
            @close="close"
            @forget="forget"
            @input-end="inputEnd"
        ></vpay>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return{
            show: true
        }
    },
    methods: {
        forget() {
        },
        inputEnd() {
        },
        close() {
        },
    }
}
</script>
