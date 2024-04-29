import {createWebHashHistory, createRouter} from 'vue-router'

import Home from '@/components/Home.vue';
import UnknownRoute from "@/components/UnknownRoute.vue";
import GalleryOverview from "@/components/Portfolio/GalleryOverview.vue";
import GalleryPaintings from "@/components/Portfolio/Gallery/GalleryPaintings.vue";
import GalleryPhotography from "@/components/Portfolio/Gallery/GalleryPhotography.vue";
import GallerySketches from "@/components/Portfolio/Gallery/GallerySketches.vue";
import About from "@/components/Portfolio/About.vue";
import Contact from "@/components/Portfolio/Contact.vue";
import GalleryDetail from "@/components/Portfolio/Gallery/GalleryDetail.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: "Home", component: Home},
        {path: '/home', name: "Home", component: Home},
        {path: '/:pathMatch(.*)*', component: UnknownRoute},
        {
            path: '/Gallery', name: "Gallery", component: GalleryOverview,
            children: [
                {
                    path: 'paintings', component: GalleryPaintings,
                    children: [{path: ':id', component: GalleryDetail}]
                },
                {
                    path: 'photography', component: GalleryPhotography,
                    children: [{path: ':id', component: GalleryDetail}]
                },
                {
                    path: 'sketches', component: GallerySketches,
                    children: [{path: ':id', component: GalleryDetail}]
                }
            ]
        },
        {path: '/about', name: "About", component: About},
        {path: '/contact', name: "Contact", component: Contact},
    ]
})

export default router