
            
<template>
    <svg width="597" height="608" viewBox="0 0 597 608" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="line"
            d="M329.51 6C487.524 315.541 477.078 414.931 298.171 304.171C190.902 246.918 180.456 346.309 266.832 602.342"
            stroke="black" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <div id="box" class="h-5 w-5 bg-red-500" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- gasp scroll trigger line -->
        <!-- https://gsap.com/docs/v3/Plugins/ScrollTrigger/ -->

        <!-- grasp flip -->
        <!-- https://gsap.com/docs/v3/Plugins/Flip/ -->

        <img src="@/assets/ProjectImages/Together/icons.png" alt="Always here's app icons" />

        <div class="flex flex-col justify-center gap-5">
            <h3 class="text-3xl font-bold">How it started</h3>
            <p>After completing a bootcamp at CoderAcademy, I was set up with a slew of interviews. However
                by far the best interview was at Always here, a technical test that I flew through and the
                best interviewers bringing forward amazing energy. Not only this, the company was founded on
                the basis to help families mental health post Covid-19, one couldn't ask for a better cause.
            </p>
        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">

        <div class="order-2 md:order-1 flex flex-col justify-center gap-5">
            <h3 class="text-3xl font-bold">My Approach</h3>
            <p>Being completely new to the workforce and to coding, aside form my bootcamp, I saw only one
                approach, learn. Myself along with 2 other interns embarked on hours of trial and error,
                thrown thoroughly in the deep end, learning from our mentors as best we could. Although
                imposter syndrome may have kicked in a few times in those early days, I feel as though it
                only made me stronger and better developer.</p>
        </div>



        <img class="h-auto order-1 md:order-2" src="@/assets/ProjectImages/Together/onboarding.png"
            alt="Always here's onboarding process" />

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex h-96 justify-center">
            <img class="rotate-12" src="@/assets/ProjectImages/Together/chat.png" alt="Always here's app in phone frame" />
            <img class="rotate-12 -ml-10 md:-ml-5" src="@/assets/ProjectImages/Together/companionChat.png"
                alt="Always here's app in phone frame" />
        </div>

        <div class="flex flex-col justify-center gap-5">
            <h3 class="text-3xl font-bold">Learning Experiences</h3>
            <p>I learned a lot at my time with the Always Here team not only technically, but how to truly
                collaborate as a team.
                <br>
                <br>
                Technically speaking, some of the things I learned include a completely new stack, the
                importance of building reusable components and
                How to develop on IOS/Android and all the annoying nuances
                that came with them (like having your app rejected from the store over one word).
                <br>
                <br>

                More broadly I learned to be even more curious about how things work and to ask questions in
                bulk, doing the things you can do and saving up a few questions for when someones free. Oh
                and I also learned that having an office dog is amazing (miss you axe). <img
                    class="rounded h-8 inline-block" src="@/assets/axe.png" alt="a picture of Axe, the office dog" />
            </p>

        </div>
    </div>
</template>

 


<script setup lang="ts">





</script>