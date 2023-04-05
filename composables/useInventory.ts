// import { } from "~~/server/routes"
import useFetchWithCache from "~/composables/useFetchWithCache";
import {computed} from "@vue/reactivity";

export default async (data) => {
    return data === 'inventory'? await useFetchWithCache<Array<{ equipment: string }>>(`/inventory`):
        await useFetchWithCache<{ Models: Array<{ model: string }>}>(`/inventory/${data}`);
}

