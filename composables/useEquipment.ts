import useFetchWithCache from "~/composables/useFetchWithCache";
import Models from "@prisma/client"

export default async (
    parentPath:string,
    path: string
) => (await useFetchWithCache<Models>(`/inventory/${parentPath}/${path}`));
