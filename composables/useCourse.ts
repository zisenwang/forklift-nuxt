import { CourseOurline } from "~~/server/api/course/meta.get";
export default async () => useFetchWithCache<CourseOurline>("/api/course/meta");
