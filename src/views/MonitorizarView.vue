<script setup>
import BaseLayout from '../layout/BaseLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const place = ref('');
const sensTem = ref('');
const sensHum = ref('');
const sensSoilh = ref('');
const fecha = ref('');

onMounted(async () => {
  try {
    // Fetch data for sistemas
    const sistemasResponse = await axios.get('http://localhost:3000/Api/sistemas');
    place.value = sistemasResponse.data.map(item => item.place)[0]; // Assuming you want the first place

    // Fetch data for sensores
    const sensoresResponse = await axios.get('http://localhost:3000/Api/sensores');
    const sensorData = sensoresResponse.data[0]; // Assuming there is only one sensor data in the response
    
    sensTem.value = `Temperatura: ${sensorData.sens_temp}`;
    sensHum.value = `Humedad: ${sensorData.sens_hum}`;
    sensSoilh.value = `Suelo Húmedo: ${sensorData.sens_soilh}`;
    fecha.value = `Fecha: ${new Date(sensorData.createdAt).toLocaleString()}`;

    console.log(place.value, sensTem.value, sensHum.value, sensSoilh.value, fecha.value);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
});
</script>

<template>
  <BaseLayout>
    <main>
      <div class="flex h-screen">
        <div class="w-1/2 bg-gray-200 p-4 text-center">
          <h2 class="text-2xl font-bold">Visualización</h2>
          <div v-if="place">
            <p>{{ place }}</p>
          </div>

          <div class="mt-4">
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
              <div class="data-display">{{ sensTem }}</div>
            </div>
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
              <div class="data-display">{{ sensHum }}</div>
            </div>
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
              <div class="data-display">{{ sensSoilh }}</div>
            </div>
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
              <div class="data-display">{{ fecha }}</div>
            </div>
          </div>
        </div>

        <div class="w-1/2 bg-opacity-20 bg-cover" style="position: relative;">
          <img src="@/assets/back.png" alt="Imagen de fondo"
            style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;" />
        </div>
      </div>
    </main>
  </BaseLayout>
</template>
