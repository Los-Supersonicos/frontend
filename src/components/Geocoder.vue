<template>
    <section>
        <form @submit="getPoints()">
            <div class="form-group">
                <label for="geocode">Ingrese ubicación</label>
                <input v-model="code" type="text" class="form-control" id="geocode" placeholder="">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'Geocoder',
    data() {
        return {
            code: ''
        }
    },
    methods: {
        getPoints() {
            fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+this.code+'&key=AIzaSyC50wRXPH7ee92T9118G722gKyvaf8NFQw').then((res) =>{
                console.log(res.json())
            });
        
        }
    }
}
</script>