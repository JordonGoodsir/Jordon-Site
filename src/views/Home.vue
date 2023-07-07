<template>
    <PageWrapper>
        <div class="flex flex justify-center items-center bg-main h-full w-full">
            <!-- <div class="border-white flex flex-col border-4 px-10 py-52 text-center text-white gap-5">
                <h1>Welcome, <br> I'm <span class="text-highlight-dark">Jordon</span></h1>
                <h2>A Software Developer</h2>
            </div>

            <div class="handle-container ">
                <div class="handle bg-white h-24 w-5 relative">
                    <div class="knob h-5 w-10 bg-green-500 top-0 -left-1/2 absolute" />
                </div>
            </div> -->

            <div class="flex">
                <div class="container-knob-2">
                    <div id="progress-bar-2"></div>
                    <div id="progress-bar-2-b"></div>
                    <div id="box-2" class="box">
                        <div class="circle">
                            <div id="dot-2" class="dot"></div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    </PageWrapper>
</template>
  
<script lang="ts">

import PageWrapper from "@/components/PageWrapper.vue"

export default {
    name: 'App',
    components: {
        PageWrapper
    },
    mounted() {
        const box2 = document.getElementById("box-2");
        const progressBar2 = document.getElementById("progress-bar-2");
        const progressBar4 = document.getElementById("progress-bar-2-b");

        //@ts-ignore
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
                    //@ts-ignore
                    this.cummulativeSpin += 1
                    rotate = angle + startAngle;

                    box.style.transform = `rotate(${rotate}deg)`;

                    if (box == box2 && progressBar == progressBar2 || progressBar == progressBar4) {
                        //@ts-ignore
                        const progress = this.cummulativeSpin < generatorGoal ? (this.cummulativeSpin / generatorGoal) * 180 : 180
                        //@ts-ignore
                        console.error(this.cummulativeSpin)
                        progressBar.style.boxShadow = `inset 0 -${progress}px cyan`;
                        // title animation
                        // @ts-ignore
                        // document.getElementById("title").style.backgroundImage = `linear-gradient(90deg, cyan ${progress - 100}%, lightsalmon)`

                        // }
                    }


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
        } as {
            name: string,
            cummulativeSpin: number
        })
    },
    created() {
        console.error('ello')
    },
}
</script>
  
<style lang="scss" scoped>
.container-knob-2 {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 20%;
    left: 38%;
}

.box {
    width: 200px;
    height: 200px;
    background-color: transparent;
    position: absolute;
    left: 25%;
    top: 25%;
    transform-origin: center center;
    z-index: 1;
    border-radius: 50%;
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
    position: absolute;
    bottom: 100px;
    left: 40px;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
}

#progress-bar-2-b {
    background-color: rgba(255, 255, 255, 0.4);
    height: 180px;
    width: 40px;
    position: absolute;
    bottom: 100px;
    left: 320px;
    clip-path: polygon(0 0, 100% 100%, 100% 0);
}

#white-circle {
    position: absolute;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    left: 25px;
    top: 25px;
    border: 25px solid #c2c0bc;
    border-top-color: transparent;
    border-right-color: transparent;
    z-index: 1;
    transform: rotate(135deg);
}

#yellow-circle {
    position: absolute;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    left: 25px;
    top: 25px;
    border: 25px solid lightgreen;
}


#title {
    background-image: linear-gradient(90deg, white, white);
    background-clip: text;
    -webkit-background-clip: text;
    text-transform: capitalize;
    text-align: center;
    line-height: 250px;
}
</style>
  