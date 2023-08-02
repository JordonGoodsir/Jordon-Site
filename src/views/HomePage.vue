<template>
    <PageWrapper :scroll="false" :headerDark="!generatorData.powerGenerated">
        <div
            :class="[`flex transition flex justify-center items-center h-full w-full`, generatorData.powerGenerated ? 'bg-sky-blue' : 'bg-main']">
            <ul v-if="!generatorData.powerGenerated" id="moving-shapes" class='overflow-hidden'>
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
                                <div :class="'flex items-end'">
                                    <div id="tree_001" :class="'mr-5'">
                                        <div class="bg-green-500 h-56 w-56 rounded-md"></div>
                                        <div class="bg-tree-brown w-12 h-80 ml-20"></div>
                                    </div>
                                    <div id="tree_001" :class="`mr-5 pr-[${Math.floor(Math.random() * 60) + 10}px]`">
                                        <div class="bg-green-500 h-56 w-56 rounded-md"></div>
                                        <div class="bg-tree-brown w-12 h-96 ml-20"></div>
                                    </div>
                                    <div id="tree_001" :class="`mr-5 pr-[${Math.floor(Math.random() * 60) + 10}px]`">
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
                :class="[' z-50 flex flex-col border-4 px-10 py-28 text-center gap-10 select-none', generatorData.powerGenerated ? 'border-black' : 'border-white text-white']">
                <h1 class="pointer-events-none">Welcome, <br> I'm <span :class="['text-highlight']">Jordon</span>
                </h1>
                <h2 class="pointer-events-none">A Software Developer</h2>

                <p class="pointer-events-none">
                    {{
                        generatorData.powerGenerated ?
                        generatorMessages[generatorMessages.length - 1].message :
                        generatorMessages[generatorData.generatorMessageIndex].message
                    }}
                </p>

                <div v-if="!generatorData.powerGenerated" class="flex gap-20">
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
import { onMounted, nextTick, onUnmounted, reactive, watch } from 'vue'
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
    powerGenerated: false,
    generatorMessageIndex: 0
})

let cummulativeSpin = 0
const generatorMessages: { message: string, appendDots: number }[] = [
    { message: 'This sites gonna need power, spin that  ⬇️', appendDots: 0 },
    { message: 'This thing actually works!', appendDots: 13 },
    { message: 'This is hard work', appendDots: 14 },
    { message: 'Just a little more', appendDots: 27 },
    { message: 'Wow, awesome', appendDots: 0 },
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
                    progressBar.style.boxShadow = `inset 0 -${progress}px #ffa449`;

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

    //moving shapes code 
    const dotsPhase1 = (amount: number) => {
        let dots = document.getElementById("moving-shapes");


        for (let i = 0; i <= amount; i++) {
            let size = Math.floor(Math.random() * 3) + 1;

            let newDot = document.createElement("LI");
            newDot.style.width = `${size}rem`;
            newDot.style.height = `${size}rem`;
            newDot.style.bottom = `-${size}rem`;
            newDot.style.position = 'relative';
            newDot.style.left = `${Math.floor(Math.random() * 100)}%`;
            newDot.style.clipPath = "circle(50% at 50% 50%)";
            newDot.style.animationDuration = `${Math.floor(Math.random() * 10) + 10}s`;
            newDot.style.animationDelay = `${Math.floor(Math.random() * 2) + 0.2}s`;
            // newDot.style.position = 'absolute';
            // newDot.style.listStyle = 'none';
            // newDot.style.display = 'block';
            // newDot.style.backgroundColor = 'whitesmoke';
            // newDot.style.opacity = '0';
            // newDot.style.animation = 'float infinite';
            // newDot.style.transitionTimingFunction = 'linear';
            // newDot.style.clipPath = 'polygon(20 % 0 %, 0 % 20 %, 30 % 50 %, 0 % 80 %, 20 % 100 %, 50 % 70 %, 80 % 100 %, 100 % 80 %, 70 % 50 %, 100 % 20 %, 80 % 0 %, 50 % 30 %)';
            if (dots) {
                dots.appendChild(newDot);
            }
        }
    };

    watch(() => generatorData.generatorMessageIndex, (newVal) => {
        if (newVal) {
            console.error(window)
            dotsPhase1(generatorMessages[newVal].appendDots)
        }
    })

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
    box-shadow: 0 0 10px #ffa449, inset 0 0 10px 5px #ffa449;
    filter: drop-shadow(0 0 11px #ffa449);
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

#moving-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

#moving-shapes li {
    position: absolute;
    list-style: none;
    display: block;
    background-color: whitesmoke;
    opacity: 0;
    bottom: 1%;
    -webkit-animation: float infinite;
    animation: float infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

#moving-shapes li:nth-child(1) {
    width: 3em;
    height: 3em;
    left: 12.5%;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-duration: 21s;
    animation-duration: 21s;
    bottom: -3rem;
}

#moving-shapes li:nth-child(2) {
    width: 2em;
    height: 2em;
    left: 25%;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    bottom: -2rem;
}

#moving-shapes li:nth-child(3) {
    width: 1em;
    height: 1em;
    left: 37.5%;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    bottom: -1rem;
}

#moving-shapes li:nth-child(4) {
    width: 2em;
    height: 2em;
    left: 50%;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 26s;
    animation-duration: 26s;
    bottom: -2rem;
}

#moving-shapes li:nth-child(5) {
    width: 1.9em;
    height: 1.9em;
    left: 62.5%;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    bottom: -1.9rem;
}

#moving-shapes li:nth-child(6) {
    width: 1.8em;
    height: 1.8em;
    left: 75%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-duration: 19s;
    animation-duration: 19s;
    bottom: -1.8rem;
}

#moving-shapes li:nth-child(7) {
    width: 1em;
    height: 1em;
    left: 87.5%;
    -webkit-animation-delay: 1.4s;
    animation-delay: 1.4s;
    -webkit-animation-duration: 18s;
    animation-duration: 18s;
    bottom: -1.8rem;
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