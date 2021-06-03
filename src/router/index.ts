import { createRouter, createWebHistory } from 'vue-router'
import { computed, nextTick } from "vue";
import User, { Role } from "@/app/shared/models/User";
import { store } from "@/store";
import { routes } from "@/router/routes";

declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        requiredAuth?: boolean
        requiredRole?: Role
    }
}

const user = computed<User>(
    () => store.getters["auth/authorisedUser"])
const isAuthenticated = computed<boolean>(
    () => store.getters["auth/isAuthenticated"])

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(
    (
        to,
        from
    ) => nextTick(() => {
        document.title = to.meta.title
        if (to.meta.requiredAuth) {
            if (!isAuthenticated.value)
                router.push('/authorization/login')
        }
        if (to.meta.requiredRole) {
            if (to.meta.requiredRole !== user.value.role)
                router.push(from.path)
        }
    })
)

export default router
