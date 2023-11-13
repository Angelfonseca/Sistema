<script setup>
import BaseLayout from '../layout/BaseLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const place = ref('');

onMounted(async () => {
  try {
    // Assuming your API endpoint is /Api/sistemas and your server is running on http://localhost:3000
    const response = await axios.get('http://localhost:3000/Api/sistemas');
    
    // Assuming response.data is an array of objects with a 'place' property
    place.value = response.data.map(item => item.place);
    
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
        <!-- Div izquierdo -->
        <div class="w-1/2 bg-gray-200 p-4 text-center">
          <h2 class="text-2xl font-bold">Selecciona el lugar a monitorizar</h2>
          <div v-if="place">
          </div>

          <!-- Tres rectángulos que redirigen a /monitorizar -->
          <div class="mt-4">
            <!-- Utiliza el prop 'place' para cambiar los nombres de los módulos -->
            <router-link to="/monitoreo">
              <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
                {{ place }}
              </div>
            </router-link>
            <!-- Repite lo mismo para los otros módulos -->
          </div>
        </div>
        <!-- Div derecho con imagen semi transparente de fondo -->
        <div class="w-1/2 bg-opacity-20 bg-cover" style="position: relative;">
          <img src="@/assets/back.png" alt="Imagen de fondo"
            style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;" />
        </div>
      </div>
    </main>
  </BaseLayout>
</template>
