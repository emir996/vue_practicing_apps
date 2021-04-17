app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
          <div class="product-container">
            <div class="product-image">
              <img :class="{'out-of-stock-img': !inStock}" :src="image">
            </div>
            <div class="product-info">
              <h1>{{ title }}</h1>
              <p>{{ sale }}</p>
              <!-- <p v-if="inventory > 10">In Stock</p>
              <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
              <p v-else>Out of stock</p> -->
              <p v-if="inStock">In Stock</p>
              <p v-else="!inStock">Out of Stock</p> 

              <p>Shipping {{ shipping }}</p>

              <product-details :details="details"></product-details>

              <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
              </div>
              <button :disabled="!inStock" class="button" v-on:click="addToCart" :class="{disabledButton: !inStock}">Add to cart</button>
            </div>
          </div>
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview"></review-form>
      </div>`,
      data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            //inventory: 100,
            details: ['50% cotton', '30%', '20% polyester'],
            variants: [
                {id: 1, color: 'green', image: './assets/images/vue_socks_green.png', quantity: 50},
                {id: 2, color: 'blue', image: './assets/images/vue_socks_blue.png', quantity: 1}
            ],
            reviews: []
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        
        updateVariant(index){
            this.selectedVariant = index;
        },

        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        sale(){
            if(this.variants[this.selectedVariant].quantity > 0){
                return this.brand + ' ' + this.product + ' on sale'
            }
            return 'Sale is not able for this product';
        },
        shipping(){
            if(this.premium){
                return 'Free';
            }
            return 2.99;
        }
    }
    
})