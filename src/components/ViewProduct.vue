<template>
    <div>
        <partial-navbar></partial-navbar>
        <div class="container my-5" v-for="single in getSingleProductData(fetchID)" :key="single.id">
            <div class="row">
                <div class="col-md-4">
                    <img :src="'../' + single.img" alt="Game Image" style="height: 400px; width: auto;">
                </div>
                <div class="col-md-8">
                    <h2>
                        {{ single.name }}
                    </h2>
                    <p>
                        {{ single.shortDesc }}
                    </p>
                    <h5>
                        {{ single.price }}
                    </h5>
                    <section v-if="single.inStock">
                        <p class="text-success">
                            Currently in Stock
                        </p>
                        <br>
                        <span style="font-weight: bold">Product Description:</span>
                        <p>{{ single.description }}</p>
                        <hr>
                        <button class="btn btn-primary" @click="appendCart">
                            Add to Cart
                        </button>
                        <button class="btn btn-default" 
                                v-if="!checkWatchedProduct(fetchID)"
                                @click="addToWatch(fetchID)"
                                style="margin-top: 3px; padding: 1px;">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button class="btn btn-default" 
                                v-else
                                @click="removeFromWatch(fetchID)"
                                style="margin-top: 3px; padding: 1px;">
                            <ion-icon name="eye-off-outline"></ion-icon>
                        </button>
                    </section>
                    <section v-else>
                        <p class="text-danger">
                            Out of Stock
                        </p>
                        <br>
                        <span style="font-weight: bold">Product Description:</span>
                        <p>{{ single.description }}</p>
                        <hr>
                        <button class="btn btn-secondary" disabled>
                            Add to Cart
                        </button>
                        <button class="btn btn-default" 
                                v-if="!checkWatchedProduct(fetchID)"
                                @click="addToWatch(fetchID)"
                                style="margin-top: 3px; padding: 1px;">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button class="btn btn-default" 
                                v-else
                                @click="removeFromWatch(fetchID)"
                                style="margin-top: 3px; padding: 1px;">
                            <ion-icon name="eye-off-outline"></ion-icon>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../partials/Navbar';

export default {
    components: {
        'partial-navbar': Navbar
    },
    name: 'ViewProduct',
    data() {
        return {
            fetchID: this.$route.params.id,
            data: this.$store.state.products,
            watchData: this.$store.state.watchData,
        }
    },

    methods: {
        getSingleProductData(id) {
            return this.data.filter(item => {
                return item.id == id
            });
        },

        checkWatchedProduct(id) {
            if(this.$store.state.watchData.includes(id)) {
                // Product is in watch list
                return true;
            } else {
                return false;
            }
        },

        addToWatch(id) {
            this.$store.commit('addToWatch', { id });
        },

        removeFromWatch(id) {
            this.$store.commit('removeFromWatch', { id });
        },

        appendCart() {
            this.$store.commit('addToCart');
        }
    },
}
</script>