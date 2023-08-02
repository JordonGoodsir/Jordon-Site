<template>
    <div role="navigation" :class="['', headerDark ? 'bg-main' : 'bg-sky-blue']">
        <div @click="() => menuToggled = !menuToggled" :class="[
            'menu-toggle',
            headerDark ? 'menu-light' : 'menu-dark',
            menuToggled ? 'menu-active' : 'menu-inactive',

        ]">

            <span></span>
            <span></span>
            <span></span>

            <Transition name="menu-slide">
                <ul v-if="menuToggled" :class="['menu', headerDark ? 'bg-white text-main' : 'bg-main text-white']">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a class="cursor-no-drop opacity-50" href="#">
                        <li>About - (Coming soon)</li>
                    </a>
                    <a class="cursor-no-drop opacity-50" href="#">
                        <li>Skills - (Coming soon)</li>
                    </a>
                    <a class="cursor-no-drop opacity-50" href="#">
                        <li>Contact - (Coming soon)</li>
                    </a>

                </ul>
            </Transition>
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
.menu-toggle {
    @apply z-50 relative block top-14 left-14;

    a {
        text-decoration: none;
        transition: color 0.3s ease;
    }

    span {
        width: 33px;
        height: 4px;
        margin-bottom: 3px;
        @apply relative block;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 5px 2.5px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            opacity 0.55s ease;
    }
}

.menu-inactive {

    &.menu-light {
        span {
            @apply bg-white
        }
    }

    &.menu-dark {
        span {
            @apply bg-black
        }
    }

    span:first-child {
        transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
}

.menu-active {

    &.menu-light {
        span {
            @apply bg-black
        }
    }

    &.menu-dark {
        span {
            @apply bg-white
        }
    }

    span {
        transform: rotate(45deg) translate(-2px, -1px);
        @apply bg-main;
    }

    span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    span:nth-last-child(3) {
        @apply opacity-0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    ul {
        transform: none;
    }

}

.menu {
    @apply fixed list-none antialiased pl-14 pr-24 left-0 top-0 bottom-0 pt-[125px];

    li {
        padding: 10px 0;
        font-size: 22px;
    }
}

.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}



.menu-slide-enter-from,
.menu-slide-leave-to {
    transform: translateX(-100%) !important
}

.menu-slide-enter-to,
.menu-slide-leave-from {
    transform: translateX(0%)
}
</style>
  