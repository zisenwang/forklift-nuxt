// import { } from "~~/server/routes"
import useFetchWithCache from "~/composables/useFetchWithCache";

export default async () => useFetchWithCache<Array<{equipment:string}>>("/api/inventory");