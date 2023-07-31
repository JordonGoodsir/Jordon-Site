<template>
    <PageWrapper :scroll="false" :headerDark="!generatorData.powerGenerated">
        <div
            :class="[`flex transition flex justify-center items-center h-full w-full`, generatorData.powerGenerated ? 'bg-sky-blue' : 'bg-main']">
            <ul class='moving_shapes overflow-hidden'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div v-if="generatorData.powerGenerated" class="fixed inset-0 z-10 pointer-events-none">
                <div v-if="bird" class="bird flex left-[60px]"
                    :style="{ '--animationTime': `${birdAnimation?.animationTime}s` }">
                    <div class="left-wing bird-part rotate-[30deg]" />

                    <div class="body flex">
                        <div class="left-body bird-part rotate-[152deg]" />
                        <div class="right-body bird-part rotate-[30deg]" />
                    </div>
                    <div class="right-wing bird-part -rotate-[30deg]" />
                </div>
                <div class="flex flex-col h-full w-full justify-between">
                    <div class="flex justify-evenly gap-10">
                        <div id="cloud_001" class="flex">
                            <div class="opacity-90 bg-white w-40 h-40"
                                style="border-bottom-left-radius:0.5em 0.5em; float: left;">
                            </div>
                            <div class="opacity-90 bg-white w-40 h-52"
                                style="border-bottom-right-radius:1em 0.75em; border-bottom-left-radius:0.5em 0.5em; float: left;">
                            </div>
                            <div class="opacity-90 bg-white w-40 h-32"
                                style="border-bottom-right-radius:0.5em 0.5em; float: left;">
                            </div>
                        </div>
                        <div id="cloud_002" class="flex">
                            <div class="opacity-90 bg-white w-40 h-32"
                                style="border-bottom-left-radius:0.5em 0.5em; float: left;">
                            </div>
                            <div class="opacity-90 bg-white w-40 h-64"
                                style="border-bottom-left-radius:0.85em 1em; border-bottom-right-radius:0.5em 0.85em; float: left;">
                            </div>
                            <div class="opacity-90 bg-white w-40 h-52"
                                style="border-bottom-right-radius:1em 0.75em; border-bottom-left-radius:0.5em 0.5em; float: left;">
                            </div>
                            <div class="opacity-90 bg-white w-40 h-32"
                                style="border-bottom-right-radius:0.5em 0.5em; float: left;">
                            </div>
                        </div>
                    </div>

                    <div class="flex items-end">
                        <div class="flex-co w-full">

                            <div class="flex items-end justify-between">
                                <Crane />
                                <div :class="['flex items-end', `mr-[${(Math.floor(Math.random() * 60) + 10)}px]`]">
                                    <div id="tree_001" :class="`pr-[${Math.floor(Math.random() * 60) + 10}px]`">
                                        <div class="bg-green-500 h-56 w-56 rounded-md"></div>
                                        <div class="bg-tree-brown w-12 h-80 ml-20"></div>
                                    </div>
                                    <div id="tree_001" :class="`pr-[${Math.floor(Math.random() * 60) + 10}px]`">
                                        <div class="bg-green-500 h-56 w-56 rounded-md"></div>
                                        <div class="bg-tree-brown w-12 h-96 ml-20"></div>
                                    </div>
                                    <div id="tree_001" :class="`pr-[${Math.floor(Math.random() * 60) + 10}px]`">
                                        <div class="bg-green-500 h-48 w-56 rounded-md"></div>
                                        <div class="bg-tree-brown w-12 h-72 ml-20"></div>
                                    </div>
                                </div>
                            </div>


                            <div class="flex w-full">
                                <div class="bg-gray-500 h-5 w-1/2" />
                                <div class="bg-green-700 h-5 w-1/2" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div
                :class="[' z-50 flex flex-col border-4 px-10 py-36 text-center gap-10 select-none', generatorData.powerGenerated ? 'border-black' : 'border-white text-white']">
                <h1 class="pointer-events-none">Welcome, <br> I'm <span :class="['text-highlight']">Jordon</span>
                </h1>
                <h2 class="pointer-events-none">A Software Developer</h2>

                <p class="pointer-events-none">
                    {{
                        generatorData.powerGenerated ?
                        generatorMessages[generatorMessages.length - 1] :
                        generatorMessages[generatorData.generatorMessageIndex]
                    }}
                </p>

                <div v-if="!generatorData.powerGenerated" class="container-knob-2 flex gap-20">
                    <div id="progress-bar-2"></div>
                    <div id="box-2" class="box">
                        <div class="circle">
                            <div id="dot-2" class="dot"></div>
                        </div>
                    </div>
                    <div id="progress-bar-2-b"></div>
                </div>
            </div>

        </div>
    </PageWrapper>
</template>
  
<script setup lang="ts">
import { onMounted, nextTick, onUnmounted, reactive } from 'vue'
import PageWrapper from "@/components/PageWrapper.vue"
import Crane from "@/components/Crane.vue"


// bird code
let birdTimeout: any = null;
const birdAnimation: any = {}
let bird: boolean = false

const birdTiming = () => {
    birdTimeout = setTimeout(() => {
        nextTick(() => bird = false)

        setTimeout(() => {
            bird = true
            birdTiming()

        }, (((Math.floor(Math.random() * 6) + 3)) * 1000))


    }, ((birdAnimation?.animationTime || 1) * 1000));
}

onMounted(() => {
    bird = generatorData.powerGenerated
    birdAnimation.animationTime = screen.width / 150


    if (generatorData.powerGenerated) {
        birdTiming()
    }
})

onUnmounted(() => {
    clearTimeout(birdTimeout)
})

//generator code
const generatorData = reactive({
    powerGenerated: true,
    generatorMessageIndex: 0
})

let cummulativeSpin = 0
const generatorMessages = [
    'Looks like this sites going to need some power',
    'This thing actually works!',
    'This is hard work',
    'Just a little more',
    'Wow, awesome',
]

onMounted(() => {
    cummulativeSpin = 0;

    if (!generatorData.powerGenerated) {
        const box2 = document.getElementById("box-2");
        const progressBar2 = document.getElementById("progress-bar-2");
        const progressBar4 = document.getElementById("progress-bar-2-b");


        const run = (box: any, progressBar: any) => {
            let active = false;
            // start
            box.addEventListener("mousedown", () => {
                active = true;
            });
            // stop
            document.addEventListener("mouseup", () => {
                active = false;
            });
            // run
            window.addEventListener("mousemove", (e: any) => {
                // mouse position
                let mX = e.clientX;
                let mY = e.clientY;
                // element data
                let boxData = box.getBoundingClientRect();
                let boxWidth = boxData.width;
                let boxHeight = boxData.height;
                let l = boxData.left;
                let t = boxData.top;

                // rotation
                let rotate = 0;
                let radians = 180 / Math.PI;
                let center = {
                    x: l + (boxWidth / 2),
                    y: t + (boxHeight / 2)
                };
                // arc points
                let x = mX - center.x;
                let y = mY - center.y;
                let angle = Math.floor(Math.atan2(y, x) * radians);
                let startAngle = 180;
                const generatorGoal = 700;


                // active status
                if (active) {
                    cummulativeSpin += 1
                    rotate = angle + startAngle;

                    box.style.transform = `rotate(${rotate}deg)`;

                    if (cummulativeSpin === 1 ||
                        cummulativeSpin === ((generatorGoal * 0.5)) ||
                        cummulativeSpin === ((generatorGoal * 0.75)) ||
                        cummulativeSpin === ((generatorGoal * 1))) {
                        generatorData.generatorMessageIndex++
                    }


                    const progress = cummulativeSpin < generatorGoal ? (cummulativeSpin / generatorGoal) * 180 : 180
                    progressBar.style.boxShadow = `inset 0 -${progress}px cyan`;

                    if (cummulativeSpin >= generatorGoal && !generatorData.powerGenerated) {
                        generatorData.powerGenerated = true
                        bird = true
                        birdTiming()
                    }

                }

            });
        }

        run(box2, progressBar2);
        run(box2, progressBar4);
    }

})

</script>
  
<style lang="scss" scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: transparent;
    transform-origin: center center;
    border-radius: 50%;
    transform: rotate(0deg)
}

.circle {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(70px);
}

#box-2 .circle {
    box-shadow: 0 0 10px cyan, inset 0 0 10px 5px cyan;
    filter: drop-shadow(0 0 11px lightblue);
}


.dot {
    width: 10px;
    height: 10px;
    box-shadow: inset 0 0 7px 1px yellow;
    position: absolute;
    top: 80px;
    left: 20px;
    border-radius: 50%;
}

#progress-bar-2 {
    background-color: rgba(255, 255, 255, 0.4);
    height: 180px;
    width: 40px;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
}

#progress-bar-2-b {
    background-color: rgba(255, 255, 255, 0.4);
    height: 180px;
    width: 40px;
    clip-path: polygon(0 0, 100% 100%, 100% 0);
}

#title {
    background-image: linear-gradient(90deg, white, white);
    background-clip: text;
    -webkit-background-clip: text;
    text-transform: capitalize;
    text-align: center;
    line-height: 250px;
}

.moving_shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.moving_shapes li {
    position: absolute;
    list-style: none;
    display: block;
    background-color: #eeeeee;
    opacity: 0;
    bottom: -13%;
    -webkit-animation: float infinite;
    animation: float infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
}

.moving_shapes li:nth-child(1) {
    width: 5em;
    height: 5em;
    left: 12.5%;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-duration: 21s;
    animation-duration: 21s;
}

.moving_shapes li:nth-child(2) {
    width: 2em;
    height: 2em;
    left: 25%;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
}

.moving_shapes li:nth-child(3) {
    width: 1em;
    height: 1em;
    left: 37.5%;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
}

.moving_shapes li:nth-child(4) {
    width: 6.5em;
    height: 6.5em;
    left: 50%;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 26s;
    animation-duration: 26s;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.moving_shapes li:nth-child(5) {
    width: 1.9em;
    height: 1.9em;
    left: 62.5%;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.moving_shapes li:nth-child(6) {
    width: 1.8em;
    height: 1.8em;
    left: 75%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-duration: 19s;
    animation-duration: 19s;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.moving_shapes li:nth-child(7) {
    width: 1em;
    height: 1em;
    left: 87.5%;
    -webkit-animation-delay: 1.4s;
    animation-delay: 1.4s;
    -webkit-animation-duration: 18s;
    animation-duration: 18s;
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

@-webkit-keyframes float {
    0% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 0.5;
    }

    80% {
        -webkit-transform: translateY(-100vh) rotate(630deg);
        transform: translateY(-100vh) rotate(630deg);
        opacity: 0;
    }
}

@keyframes float {
    0% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 0.5;
    }

    80% {
        -webkit-transform: translateY(-100vh) rotate(630deg);
        transform: translateY(-100vh) rotate(630deg);
        opacity: 0;
    }
}

.bird {
    @apply absolute top-1/4;
    animation: screen-fly var(--animationTime) linear infinite alternate;

    .bird-part {
        @apply w-2 h-10 bg-black rounded-md
    }

    .left-wing {
        @apply mt-1;
        transform-origin: top right;
        animation: fly-left 0.5s ease-in-out infinite;
    }

    .body {
        .left-body {
            @apply mr-2
        }

        .right-body {}

    }

    .right-wing {
        @apply mt-1;
        transform-origin: top left;
        animation: fly-right 0.5s ease-in-out infinite;
    }
}

@keyframes fly-left {
    0% {
        transform: rotateZ(30deg);
    }

    50% {
        transform: rotateZ(10deg);
    }

    100% {
        transform: rotateZ(30deg);
    }
}

@keyframes fly-right {
    0% {
        transform: rotateZ(-30deg);
    }

    50% {
        transform: rotateZ(-10deg);
    }

    100% {
        transform: rotateZ(-30deg);
    }
}

@keyframes screen-fly {
    0% {
        left: -60px;
    }

    100% {
        left: calc(100% + 60px);
    }
}
</style>