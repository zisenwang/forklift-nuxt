import { CourseOurline } from "~~/server/routes/course/meta.get";
export default async () => useFetchWithCache<CourseOurline>("/api/course/meta");
