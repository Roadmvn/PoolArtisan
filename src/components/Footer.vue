<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">AquaPiscines</h3>
          <p class="text-gray-400">
            Votre expert en construction et entretien de piscines depuis 1990.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-400">
            <li>123 Avenue des Piscines</li>
            <li>75000 Paris</li>
            <li>Tél: 01 23 45 67 89</li>
            <li>Email: contact@aquapiscines.fr</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Horaires</h3>
          <ul class="space-y-2 text-gray-400">
            <li>Lundi - Vendredi: 9h - 18h</li>
            <li>Samedi: 9h - 12h</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ currentYear }} AquaPiscines. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>