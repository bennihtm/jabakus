<template>
      <div class="w-full max-w-xl p-3">
        <h1 class="font-bold text-5xl text-center text-red-500">
          Jabakus 🧮
        </h1>
        <p class="font-bold text-1xl text-center text-red-400">Das coole Rechengame</p>
        <div class="bg-slate-900 p-12 rounded-lg shadow-lg w-full mt-8">
          <h2 class="font-bold text-2xl text-center text-red-300">2. Spielmodus auswählen</h2>
          <div class="flex p-6 space-x-2 rounded-b">
            <router-link to="/game" class="w-full text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
              Normales Spiel
            </router-link>
          </div>
          <div class="flex items-center text-center p-6 space-x-2 rounded-b">
            <router-link to="/lobby" class="w-full text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
              Mehrspieler
            </router-link>
          </div>
        </div>
      </div>
</template>