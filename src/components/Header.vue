<template>
    <div role="navigation" :class="['', headerDark ? 'bg-main' : 'bg-white']">
        <div @click="() => menuToggled = !menuToggled"
            :class="['menu-toggle', menuToggled ? 'menu-active' : 'menu-inactive']">

            <span></span>
            <span></span>
            <span></span>

            <Transition name="menu-slide">
                <ul v-if="menuToggled" class="menu">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Info</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                    <a href="https://erikterwan.com/" target="_blank">
                        <li>Show me more</li>
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
        @apply text-main;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    span {
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        @apply bg-white relative block;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            opacity 0.55s ease;
    }
}

.menu-inactive {

    span:first-child {
        transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
}

.menu-active {
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
    @apply bg-white fixed list-none antialiased pl-14 pr-24 left-0 top-0 bottom-0 pt-[125px];

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
  