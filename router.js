import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
import Profile from '@/components/Profile.vue';
import EditProfile from '@/components/EditProfile.vue';
import Settings from '@/components/Settings.vue';
import More from '@/components/More.vue';
import AddBank from '@/components/AddBank.vue';
import AddUPI from '@/components/AddUPI.vue';
import Complaint from '@/components/Complaint.vue';
import KYC from '@/components/Kyc.vue';
import StarWallet from '@/components/StarWallet.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/profile', component: Profile },
    { path: '/edit-profile', component: EditProfile },
    { path: '/settings', component: Settings },
    { path: '/more', component: More },
    { path: '/add-bank', component: AddBank },
    { path: '/add-upi', component: AddUPI },
    { path: '/complaint', component: Complaint },
    { path: '/kyc', component: KYC },
    { path: '/star-wallet', component: StarWallet }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

