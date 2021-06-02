import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router'
import { computed, nextTick } from "vue";
import User, { Role } from "@/app/shared/models/User";
import HomePage from "@/app/components/home-page/HomePage.vue";
import LoginForm from "@/app/components/login-page/components/LoginForm.vue";
import AuthorizationPage from "@/app/components/login-page/AuthorizationPage.vue";
import RegisterForm from "@/app/components/login-page/components/RegisterForm.vue";
import { store } from "@/store";

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

const routes: Array<RouteRecordRaw & { meta: RouteMeta }> = [
    {
        path: '',
        name: "Root",
        redirect: () => isAuthenticated.value ? '/home' : '/authorization/login',
        meta: {
            title: "Корень"
        }
    }, {
        path: '/authorization',
        name: 'Authorisation',
        component: AuthorizationPage,
        children: [
            {
                path: 'login',
                component: LoginForm,
                meta: {
                    title: "Вход"
                }
            },
            {
                path: 'register',
                component: RegisterForm,
                meta: {
                    title: "Регистрация"
                }
            }
        ],
        meta: {
            title: "Авторизация",
        }
    }, {
        path: '/home',
        name: "Home",
        component: HomePage,
        meta: {
            title: "TODO",
            requiredAuth: true
        }
    }, {
        path: '/administration',
        name: "Administration",
        component: HomePage,
        meta: {
            title: "TODO",
            requiredRole: Role.ADMIN
        }
    }
]

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
