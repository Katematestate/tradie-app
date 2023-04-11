<script setup>
</script>

<template>
    <div class="card">
        <div class="info">
                <div class="name-location-info">
                    <div class="name-location">
                        <h3>Linda B</h3>
                        <h3 class="variation">Christchurch</h3>
                    </div>
                    <h5>Email: linda&john@gmail.com</h5>
                    <h5>Phone:027273274</h5>
                    <div class="desc-btns">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloribus molestias similique eaque rerum dignissimos quae laudantium quidem dolores quam maiores error! Labore veniam doloremque dolorum velit voluptatum, quae sint!</p>
                    </div>
                </div>
           
            <div class="job-title">
                <h3>Kitchen Renovation</h3>
            </div>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
.card{
    border: 2px black solid;
    background-color: var(--color-page);
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
}
.info{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}
.name-location{
    display: flex;
    gap: 10px;
}

.variation{
    font-weight: 300;
}
.img-wrapper{
    height: 100%;
    width: 100%;
    // margin: 0 40px;
    border-radius: 5px;
}
.img-wrapper img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.job-title{
    text-align: right;
}

h5{
    margin: 0;
}
h4{
    margin: 0;
}
h3{
    margin: 0;
}


</style>