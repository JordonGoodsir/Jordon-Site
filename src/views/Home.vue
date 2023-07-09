<template>
    <PageWrapper :scroll="false">
        <div :class="[`flex flex justify-center items-center h-full w-full`, powerGenerated ? 'bg-white' : 'bg-main']">

            <ul class='moving_shapes overflow-hidden'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div
                :class="['flex flex-col border-4 px-10 py-36 text-center text-white gap-10', powerGenerated ? 'border-black text-sky-blue' : 'border-white']">
                <h1>Welcome, <br> I'm <span
                        :class="[`text-${powerGenerated ? '!text-black' : 'highlight-dark'}`]">Jordon</span>
                </h1>
                <h2>A Software Developer</h2>

                Looks like this sites going to need some power

                <div class="container-knob-2 flex gap-20">
                    <div id="progress-bar-2"></div>
                    <div id="box-2" class="box">
                        <div class="circle">
                            <div id="dot-2" class="dot"></div>
                        </div>
                    </div>
                    <div id="progress-bar-2-b"></div>
                </div>
            </div>

            <!-- <div class="handle-container ">
                <div class="handle bg-white h-24 w-5 relative">
                    <div class="knob h-5 w-10 bg-green-500 top-0 -left-1/2 absolute" />
                </div>
            </div> -->




        </div>
    </PageWrapper>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import PageWrapper from "@/components/PageWrapper.vue"

export default defineComponent({
    name: 'App',
    components: {
        PageWrapper
    },
    mounted() {
        const box2 = document.getElementById("box-2");
        const progressBar2 = document.getElementById("progress-bar-2");
        const progressBar4 = document.getElementById("progress-bar-2-b");

        this.cummulativeSpin = 0

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
                const generatorGoal = 200;


                // active status
                if (active) {
                    this.cummulativeSpin += 1
                    rotate = angle + startAngle;

                    box.style.transform = `rotate(${rotate}deg)`;


                    const progress = this.cummulativeSpin < generatorGoal ? (this.cummulativeSpin / generatorGoal) * 180 : 180
                    progressBar.style.boxShadow = `inset 0 -${progress}px cyan`;

                    if (this.cummulativeSpin >= generatorGoal) this.powerGenerated = true
                    // title animation
                    // document.getElementById("title").style.backgroundImage = `linear-gradient(90deg, cyan ${progress - 100}%, lightsalmon)`

                    // }


                }

            });
        }

        run(box2, progressBar2);
        run(box2, progressBar4);

    },
    data() {
        return ({
            name: 'doggie',
            cummulativeSpin: 0,
            powerGenerated: false,
        } as {
            name: string,
            cummulativeSpin: number,
            powerGenerated: boolean
        })
    },
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
</style>
  