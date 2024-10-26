<script setup lang="ts">
const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7', alt: 'Piscine moderne' },
  { id: 2, src: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc', alt: 'Piscine de luxe' },
  { id: 3, src: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd', alt: 'Piscine familiale' },
  { id: 4, src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', alt: 'Piscine d\'intérieur' },
  { id: 5, src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd', alt: 'Piscine avec vue' },
  { id: 6, src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a', alt: 'Piscine contemporaine' },
]
</script>

<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="section-title">Notre Galerie</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="image in images"
          :key="image.id"
          class="relative aspect-square overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">{{ image.alt }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>