<template>
   <Tarif>
    <template v-slot:test>
        <p>
            bisous bye
        </p>
    </template>
   </Tarif>
 </template>
 
 <script>
import Tarif from '../components/Tarif.vue';

 export default {
    name: "Prestation",
    components: { Tarif }
}
 </script>