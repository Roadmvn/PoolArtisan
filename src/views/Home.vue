<template>
  <div>
    <!-- Hero Section avec Parallax -->
    <section class="relative h-[90vh] bg-primary-900 overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7')] bg-cover bg-center bg-fixed"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div class="text-white max-w-2xl" v-motion-slide-visible-once-bottom>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre piscine de rêve devient réalité
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            Experts en construction et rénovation de piscines depuis plus de 30 ans
          </p>
          <router-link to="/contact" class="btn-primary text-lg group">
            Contactez-nous
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section avec Animation -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">Pourquoi nous choisir ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card group" v-for="(feature, index) in features" :key="index"
               v-motion-slide-visible-once-bottom
               :delay="index * 100">
            <div class="feature-icon">
              <span class="text-3xl text-primary-600">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">{{ feature.title }}</h3>
            <p class="text-gray-600 text-center">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistiques Section -->
    <section class="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.value" 
               class="p-6 rounded-lg backdrop-blur-sm bg-white/10"
               v-motion-slide-visible-once-bottom>
            <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section avec Parallax -->
    <section class="relative py-24 bg-primary-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="max-w-3xl mx-auto" v-motion-slide-visible-once-bottom>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Prêt à réaliser votre projet de piscine ?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <router-link to="/contact" class="btn-primary text-lg group">
            Demander un devis gratuit
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-primary-50/50"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '🏆',
    title: 'Expertise',
    description: '30 ans d\'expérience dans la construction de piscines de qualité'
  },
  {
    icon: '⭐',
    title: 'Qualité',
    description: 'Matériaux premium et finitions soignées pour une durabilité maximale'
  },
  {
    icon: '🤝',
    title: 'Service',
    description: 'Accompagnement personnalisé et suivi détaillé de votre projet'
  }
]

const stats = [
  { value: '500+', label: 'Piscines réalisées' },
  { value: '30+', label: 'Années d\'expérience' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '10+', label: 'Prix d\'excellence' }
]
</script>