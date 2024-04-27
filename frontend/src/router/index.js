import {createMemoryHistory, createRouter} from 'vue-router'

import Home from '@/components/Home.vue';
import UnknownRoute from "@/components/UnknownRoute.vue";
import GalleryOverview from "@/components/Portfolio/GalleryOverview.vue";
import GalleryPaintings from "@/components/Portfolio/Gallery/GalleryPaintings.vue";
import GalleryPhotography from "@/components/Portfolio/Gallery/GalleryPhotography.vue";
import GallerySketches from "@/components/Portfolio/Gallery/GallerySketches.vue";
import About from "@/components/Portfolio/About.vue";
import Contact from "@/components/Portfolio/Contact.vue";

const routes = [
    {path: '/', name: "Home",  component: Home},
    {path: '/home', name: "Home", component: Home},
    {path: '/:pathMatch(.*)*', component: UnknownRoute},
    {
        path: '/gallery', name: "Gallery", component: GalleryOverview,
        children: [
            {path: '/paintings', component: GalleryPaintings},
            {path: '/photography', component: GalleryPhotography},
            {path: '/sketches', component: GallerySketches}
        ]
    },
    {path: '/about', name: "About", component: About},
    {path: '/contact', name: "Contact", component: Contact},

    // new routes here
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router