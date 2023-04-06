import useFetchWithCache from "~/composables/useFetchWithCache";


export default async (data:string) => {
    return data === 'inventory'? await useFetchWithCache<Array<{ equipment: string }>>(`/inventory`):
        await useFetchWithCache<{ Models: Array<{ model: string }>}>(`/inventory/${data}`);
}

