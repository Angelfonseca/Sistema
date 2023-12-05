import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useData() {
  const sistemas = ref([]);
  const place = ref('');

  return {
    sistemas,
    place
  };
}

export function plantasData() {
  const plantas = ref([]);

  return {
    plantas
  };
}

export default {
  setup() {
    const { sistemas, place } = useData();
    const { plantas } = plantasData();

    onMounted(async () => {
      try {

        const sistemasResponse = await axios.get('http://localhost:3000/Api/sistemas');
        sistemas.value = sistemasResponse.data;
        place.value = sistemasResponse.data.map(item => item.place);
        console.log(sistemas.value);

        const plantasResponse = await axios.get('http://localhost:3000/Api/plantas');
        plantas.value = plantasResponse.data;
        console.log(plantas.value);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    });
  },
};

