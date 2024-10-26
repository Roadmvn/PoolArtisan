<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    rating: 5,
    comment: 'Un travail remarquable ! Notre piscine est exactement comme nous l\'avions imaginée. L\'équipe a été très professionnelle du début à la fin.',
  },
  {
    id: 2,
    name: 'Pierre Dubois',
    rating: 5,
    comment: 'Excellent service client et réalisation impeccable. Je recommande vivement AquaPiscines pour leur expertise et leur sérieux.',
  },
  {
    id: 3,
    name: 'Marie Lambert',
    rating: 4,
    comment: 'Très satisfaite de ma nouvelle piscine. L\'équipe a su respecter les délais et le budget annoncés.',
  },
  {
    id: 4,
    name: 'Thomas Bernard',
    rating: 5,
    comment: 'Un grand merci à toute l\'équipe pour leur professionnalisme. Le résultat dépasse nos attentes !',
  },
]

const renderStars = (rating: number) => '★'.repeat(rating) + '☆'.repeat(5 - rating)
</script>

<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="section-title">Témoignages Clients</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="card"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <span class="text-xl text-primary-600">
                {{ testimonial.name.charAt(0) }}
              </span>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold">{{ testimonial.name }}</h3>
              <div class="text-yellow-400">{{ renderStars(testimonial.rating) }}</div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "{{ testimonial.comment }}"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>