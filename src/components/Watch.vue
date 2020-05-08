<template>
    <div>
        <partial-navbar></partial-navbar>
        <div class="container my-5">
            <div class="card mb-2" v-for="data in getWatchList()" :key="data.id">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <img :src="'../' + data.img" alt="Game cover" style="height: 200px; width: auto;">
                        </div>
                        <div class="col-md-10">
                            <h5 class="card-title">{{ data.name }}</h5>
                            <p class="card-text">{{ data.shortDesc }}</p>
                            <p class="card-text">{{ data.description }}</p>
                            <hr>
                            <h4>{{ data.price }}</h4>
                            <br>
                            <button class="btn btn-danger"
                                @click="removeFromWatch(data.id)">
                                Remove from watch list
                            </button>
                            <button class="btn btn-primary">
                                Add to Cart
                            </button>
                        </div>
                    </div>
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
            return this.$store.getters.getWatchList;
        },

        removeFromWatch(id) {
            this.$store.commit('removeFromWatch', { id });
        },
    }
}
</script>