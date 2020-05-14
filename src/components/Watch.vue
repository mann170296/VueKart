<template>
    <div>
        <partial-navbar></partial-navbar>
        <div class="container my-5">
            <div class="card mb-2">
                <div class="card-body">
                    FEATURE UNDER DEVELOPMENT
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../partials/Navbar.vue'

export default {
    name: 'Watch',
    components: {
        'partial-navbar': Navbar,
    },

    data() {
        return {

        }
    },

    methods: {
        getWatchList() {
            return this.$store.getters.getWatchListOfUser;
        },

        removeFromWatch(id) {
            this.$store.commit('removeFromWatch', { id });
        },
    }
}
</script>