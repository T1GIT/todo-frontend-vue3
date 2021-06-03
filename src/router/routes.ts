import { RouteMeta, RouteRecordRaw } from "vue-router";
import AuthorizationPage from "@/app/components/login-page/AuthorizationPage.vue";
import LoginForm from "@/app/components/login-page/components/LoginForm.vue";
import RegisterForm from "@/app/components/login-page/components/RegisterForm.vue";
import HomePage from "@/app/components/home-page/HomePage.vue";
import { Role } from "@/app/shared/models/User";
import { computed } from "vue";
import { store } from "@/store";

const isAuthenticated = computed<boolean>(
    () => store.getters["auth/isAuthenticated"])

export const routes: Array<RouteRecordRaw & { meta: RouteMeta }> = [
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
