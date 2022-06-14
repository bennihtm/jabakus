<template>
    <div class="w-full max-w-xl p-3">
        <h1 class="font-bold text-5xl text-center text-red-500">
          {{message}}
        </h1>
        <p class="font-bold text-1xl text-center text-blue-400">{{toast}}</p>
        <div class="bg-slate-900 p-12 rounded-lg shadow-lg w-full mt-8">
            <div class="p-6 rounded-b">
                <button @click="countGuess(0)" class="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {{buttonlayout[0]}}
                </button>
                <button @click="countGuess(1)" class="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {{buttonlayout[1]}}
                </button>
                <button @click="countGuess(2)" class="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {{buttonlayout[2]}}
                </button>
                <button @click="countGuess(3)" class="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {{buttonlayout[3]}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://ugfpdmiudzqmhftaexoq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZnBkbWl1ZHpxbWhmdGFleG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA2NDMyODAsImV4cCI6MTk2NjIxOTI4MH0.9bsS1kxOmoSjOx3cY2if2AaVmVKe4mx-ZlncGDzn4gc')

export default {
    data() {
        return {
        message: 'Was ist 1 * 1?',
        toast: "",
        num0: 1,
        num1: 1,
        correctAnswer: 0,
        buttonlayout: [2,4,20,1],
        highscore: 0,
        }
    },
    methods: {
    rng() {
        this.num0 = Math.floor(Math.random() * 10 + 1);
        this.num1 = Math.floor(Math.random() * 10 + 1);
        this.correctAnswer = Math.floor(Math.random() * 4)
    },
    main() {
        this.rng();
        // Populate Buttons
        for (var step = 0; step < 4; step++) {
            if(step == this.correctAnswer){
            this.buttonlayout[step] =  this.num0 * this.num1;
            }else{
            this.buttonlayout[step] = this.num0 * Math.floor(Math.random() * 10)
            }
        };
    this.message = "Was ist "+this.num0+" * "+this.num1+"?"
    },
    countGuess (Guessed){
        if(this.num0 * this.num1 == this.buttonlayout[Guessed]){
            this.highscore++
            this.toast = "Wow! Richtig! Dein Highscore ist "+this.highscore+"."

            this.main()
        } else {
            this.toast = "Oops, das war's nicht. Probier's nochmal!"
        }
    }
  }
}
</script>