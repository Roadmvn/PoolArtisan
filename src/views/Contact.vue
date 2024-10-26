<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simuler l'envoi du formulaire
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  isSubmitted.value = true
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="section-title">Contactez-nous</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulaire -->
        <div class="card">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full flex justify-center"
            >
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else>Envoyer</span>
            </button>
          </form>

          <div
            v-if="isSubmitted"
            class="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
          >
            Message envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais.
          </div>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8">
          <div class="card">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Nos coordonnées</h2>
            <div class="space-y-4 text-gray-600">
              <p>
                <strong>Adresse :</strong><br>
                123 Avenue des Piscines<br>
                75000 Paris
              </p>
              <p>
                <strong>Téléphone :</strong><br>
                01 23 45 67 89
              </p>
              <p>
                <strong>Email :</strong><br>
                contact@aquapiscines.fr
              </p>
            </div>
          </div>

          <div class="card">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h2>
            <div class="space-y-2 text-gray-600">
              <p>Lundi - Vendredi : 9h - 18h</p>
              <p>Samedi : 9h - 12h</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>