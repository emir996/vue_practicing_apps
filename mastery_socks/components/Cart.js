app.component('cart-display', {
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="cart">
            Cart({{cart.length}})
            <div><button style="display:inline;" v-on:click="removeCart" v-show="cart.length != 0">delete</button></div>
    </div>
    `,
    methods: {
        removeCart(){
            this.$emit('remove-cart')
        }
    }
})