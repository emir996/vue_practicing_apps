app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }   
    },
    template: 
    /*html*/
    `
    <div class="review-container">
        <h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} gave this {{review.rating}} stars
                    <br />
                    Rewiev: <br/>
                    "{{review.review}}"
                    <br/>
                    Recommendation: <br/>
                    "{{review.recommend}}"
                </li>
            </ul>
        </h3>
    </div>
    `
})