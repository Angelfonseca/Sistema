<script setup>
import BaseLayout from '../layout/BaseLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { Logged } from '../router';

Logged();

const place = ref('');

onMounted(async () => {
  try {
    // Obtener sensores
    const sensoresResponse = await axios.get('https://ac1fgslvjk.execute-api.us-east-1.amazonaws.com/api/api/sensores');
    const sensorData = sensoresResponse.data[0];
    place.value = sensorData.place;
    
    console.log(place.value);
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
          <h2 class="text-2xl font-bold">Selecciona el lugar a monitorizar</h2>
          <div v-if="place">
          </div>

          <div class="mt-4">
            <router-link to="/monitoreo">
              <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
                {{ place }}
              </div>
            </router-link>
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
