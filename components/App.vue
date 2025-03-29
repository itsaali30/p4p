<template>
    <div>
        <div class="header">P3P Project</div>
        <LeftMenu />
        <RightMenu />
        <ProfileMenu />
        <router-view></router-view>
        <BottomNavbar />
    </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import RightMenu from './components/RightMenu.vue';
import ProfileMenu from './components/ProfileMenu.vue';
import BottomNavbar from './components/BottomNavbar.vue';

export default {
    components: {
        LeftMenu,
        RightMenu,
        ProfileMenu,
        BottomNavbar
    }
};
</script>
