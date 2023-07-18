<template>
    <div id="crane">
        <div id="peak">
            <section id="light"></section>
            <section id="first"></section>
            <section id="second"></section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <section id="line1"></section>
            <section id="line2"></section>
        </div>
        <div id="arm">
            <span id="connector1"></span>
            <span id="connector2"></span>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <span id="nose"></span>
            <span id="shine"></span>
            <span id="shadow"></span>
        </div>
        <div id="tail">
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <span id="end"></span>
            <span id="weight"></span>
        </div>
        <div id="cable">
            <section id="line"></section>
            <section id="hook">?</section>
        </div>
        <div id="name">
            <section id="tethers"></section>

            <div id="skill-load" class="h-24 flex flex-col">
                <div class="flex flex-col items-center gap-px">
                    <div class="brick">
                        Vue.js
                    </div>
                    <div class="flex justify-center gap-x-px">
                        <div class="brick">
                            JavaScript
                        </div>
                        <div class="brick">
                            TypeScript
                        </div>
                    </div>
                    <div class="flex justify-center gap-x-px">
                        <div class="brick">React</div>
                        <div class="brick">Node.js</div>
                        <div class="brick">Scss</div>
                    </div>

                </div>
                <div class="w-full bg-black h-5 flex text-white items-center justify-center text-[9px]">
                    My skills
                </div>
            </div>
        </div>
        <div id="control-center">
            <section id="body"></section>
            <section id="cabin">
                <span id="window1"></span>
                <span id="window2"></span>
                <span id="window3"></span>
            </section>
            <section id="barrier">
                <span style="margin-left: -0.1px;"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span style="margin-right: 0px;"></span>
            </section>
        </div>
        <div id="neck">
            <span class="shine"></span>
            <span class="shadow"></span>
            <section id="one"></section>
            <section id="two"></section>
        </div>
        <div id="tower">
            <span class="shine"></span>
            <span class="shadow"></span>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section><span></span></section>
            <section style="margin-bottom: -10px;"><span></span></section>
        </div>
    </div>
</template>
  
<script lang="ts">

export default {
    name: 'App',
    components: {
    },
    props: {
        headerDark: {
            default: true,
            type: Boolean,
        }
    },
    data() {
        return ({
            menuToggled: false
        })
    },
}

</script>
  
<style lang="scss" scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

$bgColour: #666666;
$craneColour: #ffa449;
$craneSecondaryColour: #1e1b35;

body {
    background-color: $bgColour;
}

#crane {
    transform: scale(2);
    margin-left: 330px;
    margin-bottom: 115px;
}

#peak {
    height: 0px;

    #first {
        border: 3px solid #ffa449;
        display: block;
        height: 18px;
        left: 7px;
        position: absolute;
        top: -16px;
        width: 18px;

        &::before {
            background: linear-gradient(to right, rgba(248, 183, 75, 1) 0%, rgba(252, 165, 70, 1) 50%, rgba(255, 128, 54, 1) 100%);
            content: "";
            display: block;
            height: 20px;
            left: 5px;
            position: relative;
            top: -4px;
            transform: rotate(45deg);
            width: 3px;
            z-index: -1;
        }

        &::after {
            background: linear-gradient(to right, rgba(248, 183, 75, 1) 0%, rgba(252, 165, 70, 1) 50%, rgba(255, 128, 54, 1) 100%);
            content: "";
            display: block;
            height: 20px;
            left: 4px;
            position: relative;
            top: -24px;
            transform: rotate(135deg);
            width: 3px;
            z-index: -1;
        }
    }

    #second {
        background-color: #ffa449;
        height: 26px;
        left: 13px;
        position: absolute;
        top: -42px;
        width: 6px;

        &::before {
            background-color: #ffa449;
            content: "";
            display: block;
            height: 16px;
            left: -4px;
            position: absolute;
            top: 10px;
            width: 14px;
            border-left: 2px solid lighten($craneColour, 10%);
            border-right: 2px solid darken($craneColour, 15%);
            border-style: none solid;
            border-width: medium 2px;
        }
    }

    #light {
        background-color: red;
        border-radius: 50% 50% 0 0;
        height: 4px;
        left: 14px;
        position: absolute;
        top: -46px;
        width: 4px;
        animation: lightFlash 2s linear infinite;
    }

    span {
        background-color: $bgColour;
        display: block;
        height: 2px;
        left: 15px;
        position: relative;
        top: -39px;
        width: 2px;
        margin-bottom: 3px;
    }

    #line1 {
        background-color: black;
        height: 1px;
        left: 19px;
        position: absolute;
        top: -42px;
        transform: rotate(6deg);
        transform-origin: left center 0;
        width: 185px;
    }

    #line2 {
        background-color: black;
        height: 1px;
        left: 12px;
        position: absolute;
        top: -42px;
        transform: rotate(155deg);
        transform-origin: left center 0;
        width: 93px;
        z-index: -1
    }
}

#arm {
    width: 260px;

    #connector1 {
        background-color: $craneColour;
        display: block;
        height: 6px;
        left: 35px;
        position: absolute;
        top: -11px;
        transform: skewX(-45deg);
        width: 10px;
        border-left: 2px solid darken($craneColour, 15%);
    }

    #connector2 {
        border-color: transparent transparent $craneColour;
        border-style: solid;
        border-width: 0 0 17px 17px;
        display: block;
        height: 0;
        left: 38px;
        position: absolute;
        top: -24px;
        width: 0;
    }

    section {
        border: 3px solid #ffa449;
        float: left;
        height: 16px;
        left: 58px;
        margin-left: -3px;
        position: relative;
        top: -23px;
        width: 16px;

        &::after {
            background: linear-gradient(to right, #f8b74b 0%, #fca546 50%, #ff8036 100%) repeat scroll 0 0 transparent;
            content: "";
            display: block;
            height: 16px;
            left: 4px;
            position: relative;
            top: -3px;
            transform: rotate(135deg);
            width: 3px;
            z-index: -1;
        }
    }

    #nose {
        border-color: transparent $bgColour transparent transparent;
        border-style: solid;
        border-width: 0px 14px 15px 0;
        display: block;
        height: 0;
        left: 252px;
        position: absolute;
        top: -23px;
        width: 0;
    }

    #shine {
        background-color: lighten($craneColour, 5%);
        display: block;
        height: 2px;
        left: 54px;
        position: absolute;
        top: -23px;
        width: 199px;
        z-index: 1;
    }

    #shadow {
        background-color: darken($craneColour, 15%);
        display: block;
        height: 2px;
        left: 43px;
        position: absolute;
        top: -8px;
        width: 223px;
        z-index: 1;
    }
}

#tail {
    border-color: $craneColour transparent darken($craneColour, 15%);
    border-image: none;
    border-style: solid;
    border-width: 3px 0px 2px;
    height: 12px;
    left: -75px;
    position: absolute;
    top: -3px;
    width: 85px;
    z-index: -1;

    section {
        background: linear-gradient(to right, #fb7e00 0%, #fb7e00 33%, #ffa449 33%, #ffa449 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
        float: left;
        height: 7px;
        margin-right: 3px;
        width: 6px;
    }

    #end {
        border-color: transparent $craneColour transparent transparent;
        border-style: solid;
        border-width: 0 13px 12px 0;
        display: block;
        height: 0;
        left: -13px;
        position: absolute;
        top: -3px;
        width: 0;

        &::after {
            border-color: transparent #666666 transparent transparent;
            border-style: solid;
            border-width: 0 7px 6px 0;
            content: "";
            display: block;
            height: 0;
            left: 5px;
            position: absolute;
            top: 3px;
            width: 0;
        }
    }

    #weight {
        background: none repeat scroll 0 0 $craneColour;
        border-radius: 25%;
        border-top: 2px solid lighten($craneColour, 10%);
        display: block;
        height: 16px;
        left: -17px;
        position: absolute;
        top: -17px;
        width: 18px;

        &::after {
            background-color: $craneSecondaryColour;
            border-radius: 0 0 25% 25%;
            content: "";
            display: block;
            height: 5px;
            position: relative;
            top: 9px;
            width: 18px;
        }
    }
}

#cable {
    #line {
        background: none repeat scroll 0 0 black;
        height: 115px;
        left: 200px;
        position: absolute;
        top: -7px;
        width: 1px;
    }

    #hook {
        font-family: "Rokkitt", sans-serif;
        font-size: 1.25em;
        left: 195px;
        position: absolute;
        top: 96px;
        transform: rotate(182deg) rotateY(180deg);
    }
}

#name {
    #tethers {
        &:before {
            width: 140px;
            height: 1px;
            background: black;
            left: 180px;
            display: block;
            content: "";
            position: absolute;
            top: 167px;
            transform: rotate(45deg);
        }

        &:after {
            width: 138px;
            height: 1px;
            background: black;
            left: 83px;
            display: block;
            content: "";
            position: absolute;
            top: 166px;
            transform: rotate(-45deg);
        }
    }

    #skill-load {
        font-size: 2.25em;
        left: 102px;
        position: absolute;
        top: 150px;
        width: 200px;
        display: block;
    }

    .brick {
        @apply h-5 w-12 bg-brick-brown flex justify-center items-center text-[8px] text-black;
        box-shadow: 0 0 4px 1px darken(#bd5858, 20%) inset;

    }
}

#control-center {
    #body {
        border-top: 2px solid #fb7e00;
        background-color: $craneColour;
        height: 25px;
        left: -10px;
        position: relative;
        transform: skewX(-10deg);
        width: 50px;

        b {
            color: #af5800;
            font-family: verdana;
            font-size: 0.75em;
            font-weight: bold;
            opacity: 0.5;
            padding-left: 4px;
        }
    }

    #cabin {
        background-color: $craneColour;
        border-left: 2px solid darken($craneColour, 15%);
        height: 25px;
        left: 25px;
        position: absolute;
        top: -5px;
        width: 17px;

        &::before {
            border-bottom: 10px solid #ffa449;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            content: "";
            display: block;
            height: 0;
            left: 7px;
            position: relative;
            top: 7.5px;
            transform: rotate(90deg) scale(1.01) translateZ(1px);
            width: 25px;
        }

        #window1 {
            background: none repeat scroll 0 0 black;
            display: block;
            height: 18px;
            left: 5px;
            position: relative;
            top: -6px;
            width: 6px;
        }

        #window2 {
            border-color: transparent transparent transparent black;
            border-style: solid;
            border-width: 9px 0 0 9px;
            display: block;
            height: 0;
            left: 13px;
            position: absolute;
            top: 3px;
            width: 0;
        }

        #window3 {
            border-color: black transparent transparent;
            border-style: solid;
            border-width: 9px 9px 0 0;
            display: block;
            height: 0;
            left: 13px;
            position: absolute;
            top: 14px;
            width: 0;
        }

        #window1,
        #window2,
        #window3 {
            opacity: 0.85;
        }
    }

    #barrier {
        background-color: darken(gray, 25%);
        display: block;
        height: 2px;
        left: -14px;
        position: absolute;
        top: 19px;
        width: 45px;

        &::before {
            background-color: darken($craneColour, 20%);
            content: "";
            display: block;
            height: 2px;
            left: -2px;
            position: absolute;
            top: 4px;
            width: 48px;
        }

        &::after {
            background-color: darken(gray, 15%);
            content: "";
            display: block;
            height: 2px;
            left: 0px;
            position: absolute;
            top: -4px;
            width: 45px;
        }

        span {
            background-color: darken(gray, 25%);
            display: inline-block;
            height: 7px;
            left: 0px;
            margin: 0 1.3px;
            position: relative;
            top: -10px;
            width: 2px;
            z-index: 1;
        }
    }
}

#neck {
    height: 20px;
    width: 16px;
    margin: 0 7px;
    display: block;
    background-color: $craneColour;

    #one {
        border-bottom: 6px solid #ffa449;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        height: 0;
        left: 3px;
        position: absolute;
        top: 39px;
        width: 24px;
    }

    #two {
        border-bottom: 5px solid #1e1b35;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        height: 0;
        left: 3px;
        position: absolute;
        top: 38px;
        width: 24px;
    }

    .shine {
        background-color: lighten($craneColour, 10%);
        display: block;
        float: left;
        height: 15px;
        left: 7px;
        position: absolute;
        width: 2px;
    }

    .shadow {
        background-color: darken($craneColour, 15%);
        display: block;
        float: left;
        height: 15px;
        left: 21px;
        position: absolute;
        width: 2px;
    }
}

#tower {
    section {
        border: 4px solid #ffa449;
        height: 30px;
        margin-bottom: -8px;
        position: relative;
        top: -3px;
        transform: scale(0.8);
        width: 30px;

        &::before {
            background: linear-gradient(to right, rgba(248, 183, 75, 1) 0%, rgba(252, 165, 70, 1) 50%, rgba(255, 128, 54, 1) 100%);
            content: "";
            display: block;
            height: 38px;
            left: 9px;
            position: relative;
            top: -8px;
            transform: rotate(45deg);
            width: 4px;
            z-index: -1;
        }

        &::after {
            background: linear-gradient(to right, rgba(248, 183, 75, 1) 0%, rgba(252, 165, 70, 1) 50%, rgba(255, 128, 54, 1) 100%);
            content: "";
            display: block;
            height: 38px;
            left: 9px;
            position: relative;
            top: -46px;
            transform: rotate(135deg);
            width: 4px;
            z-index: -1;
        }

        span {
            background-color: darken($craneColour, 30%);
            display: block;
            float: left;
            height: 1px;
            left: 4px;
            position: relative;
            top: -38px;
            width: 14px;
        }
    }

    .shine {
        background-color: lighten($craneColour, 10%);
        display: block;
        float: left;
        height: 224px;
        left: 3px;
        position: absolute;
        width: 2px;
        z-index: 5;
        top: 43px;
    }

    .shadow {
        background-color: darken($craneColour, 15%);
        display: block;
        float: left;
        height: 224px;
        left: 25px;
        position: absolute;
        width: 2px;
        z-index: 5;
        top: 43px;
    }
}

#base {
    border-bottom: 10px solid #1e1b35;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: relative;
    left: -2px;
    top: 4px;
    height: 0;
    width: 34px;
}

@keyframes lightFlash {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.25;
    }

    100% {
        opacity: 1;
    }
}
</style>
  