<template>
    <PageWrapper>
        <div class="bg-main flex items-center justify-center min-h-screen">
            <h1 class="text-highlight">-My Path-</h1>
        </div>
            <div class="flex flex-col items-center relative">
                <div class="w-2 h-full bg-black absolute"/>
                <div v-for="experience in path" :key="experience.title" class="z-10 h-screen bg-blue-200 w-full flex items-center justify-center">
                    <img class="h-40 w-40 mr-5" :src="experience.img"/>
                    <div class="flex flex-col w-[450px]">
                        <h1>{{ experience.title }}</h1>
                        <p>{{ experience.description }}</p>
                    </div>
                    <div class="flex flex-col w-[450px]">
                       <ul>
                            <li v-for="skill in experience.skills" :key="skill">{{ skill }}</li>
                       </ul>
                    </div>
                </div>
            </div>
    </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'

const path = [
  {
    img: 'https://www.hollywoodreporter.com/wp-content/uploads/2017/08/screen_shot_2017-08-29_at_10.06.38_am_-_h_2017.jpg?w=1296',
    title: 'kermit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium dapibus rutrum. Morbi ligula turpis, ultrices quis felis nec, mattis tempus est. Praesent pharetra ante massa, id dignissim eros egestas at. Mauris vestibulum dolor vel metus rhoncus, id elementum metus eleifend. Aliquam id suscipit ipsum. Integer elementum ipsum ac enim pulvinar condimentum. Nulla lobortis libero vitae dui consequat interdum. Sed a sem augue. Phasellus eu eros ullamcorper arcu lobortis semper. In ultrices placerat elit et iaculis. Nulla commodo neque nec dui tempus ornare. Ut ut odio mi. Etiam eget egestas turpis. Nullam nunc felis, molestie a sem a, volutpat commodo mauris. Pellentesque consequat nisl ut justo malesuada, sed accumsan nibh molestie. Aliquam non ligula felis. Nam venenatis elit elementum vehicula euismod. Ut at varius est. Nullam aliquet orci et ante iaculis, ac molestie mauris sollicitudin. Praesent ultricies turpis eros, ut luctus dui gravida pulvinar. Nunc faucibus auctor erat, id suscipit augue faucibus non.',
    bgTransition: 'red',
    skills: ['frog', 'tadpole', 'muppet']
  },
  {
    img: 'https://www.hollywoodreporter.com/wp-content/uploads/2017/08/screen_shot_2017-08-29_at_10.06.38_am_-_h_2017.jpg?w=1296',
    title: 'kermit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium dapibus rutrum. Morbi ligula turpis, ultrices quis felis nec, mattis tempus est. Praesent pharetra ante massa, id dignissim eros egestas at. Mauris vestibulum dolor vel metus rhoncus, id elementum metus eleifend. Aliquam id suscipit ipsum. Integer elementum ipsum ac enim pulvinar condimentum. Nulla lobortis libero vitae dui consequat interdum. Sed a sem augue. Phasellus eu eros ullamcorper arcu lobortis semper. In ultrices placerat elit et iaculis. Nulla commodo neque nec dui tempus ornare. Ut ut odio mi. Etiam eget egestas turpis. Nullam nunc felis, molestie a sem a, volutpat commodo mauris. Pellentesque consequat nisl ut justo malesuada, sed accumsan nibh molestie. Aliquam non ligula felis. Nam venenatis elit elementum vehicula euismod. Ut at varius est. Nullam aliquet orci et ante iaculis, ac molestie mauris sollicitudin. Praesent ultricies turpis eros, ut luctus dui gravida pulvinar. Nunc faucibus auctor erat, id suscipit augue faucibus non.',
    bgTransition: 'red',
    skills: ['frog', 'tadpole', 'muppet']
  },
  {
    img: 'https://www.hollywoodreporter.com/wp-content/uploads/2017/08/screen_shot_2017-08-29_at_10.06.38_am_-_h_2017.jpg?w=1296',
    title: 'kermit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium dapibus rutrum. Morbi ligula turpis, ultrices quis felis nec, mattis tempus est. Praesent pharetra ante massa, id dignissim eros egestas at. Mauris vestibulum dolor vel metus rhoncus, id elementum metus eleifend. Aliquam id suscipit ipsum. Integer elementum ipsum ac enim pulvinar condimentum. Nulla lobortis libero vitae dui consequat interdum. Sed a sem augue. Phasellus eu eros ullamcorper arcu lobortis semper. In ultrices placerat elit et iaculis. Nulla commodo neque nec dui tempus ornare. Ut ut odio mi. Etiam eget egestas turpis. Nullam nunc felis, molestie a sem a, volutpat commodo mauris. Pellentesque consequat nisl ut justo malesuada, sed accumsan nibh molestie. Aliquam non ligula felis. Nam venenatis elit elementum vehicula euismod. Ut at varius est. Nullam aliquet orci et ante iaculis, ac molestie mauris sollicitudin. Praesent ultricies turpis eros, ut luctus dui gravida pulvinar. Nunc faucibus auctor erat, id suscipit augue faucibus non.',
    bgTransition: 'red',
    skills: ['frog', 'tadpole', 'muppet']
  }
]
</script>

<style lang="scss"></style>
