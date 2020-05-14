<template>
    <div>
        <app-navbar></app-navbar>
        <div class="container my-5">
            <div class="row">
                <div class="col-md-4" v-for="product in products" :key="product.id">
                    <div class="card">
                        <div class="card-header">
                            {{ product.name }}
                        </div>
                        <div class="card-body">
                            {{ product.shortDesc }}
                            <hr>
                            {{ product.description }}
                            <hr>
                            <h3>{{ product.price }}</h3>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary btn-sm"
                                    v-if="product.inStock">
                                Add to Cart
                            </button>
                            <button class="btn btn-secondary btn-sm"
                                    v-else disabled>
                                Add to Cart
                            </button>
                            <router-link class="btn btn-info btn-sm"
                                    :to="/view/ + product.id">
                                View Product
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../partials/Navbar'

export default {
    components: {
        'appNavbar': Navbar
    },
    data() {
        return {
            products: this.$store.state.products,
        }
    },

    methods: {
        addItemToWatch(id) {
            // Call the mutation
            this.$store.commit('addItemToWatch', { id });
        },

        checkForWatchedProduct(id) {
            if(this.$store.state.watchData.includes(id)) {
                return true;
            } else {
                return false;
            }
        },

        removeItemFromWatch(id) {
            this.$store.commit('removeItemFromWatch', { id });
        }
    },
}
</script>