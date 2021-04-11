<template>
    <div>
        <player-detail :is-edit="false"></player-detail>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import PlayerDetail from './components/PlayerDetail.vue'

    @Component({
        components: {
            PlayerDetail,
        }
    })
    export default class create extends Vue {

    }
</script>

<style scoped>

</style>
