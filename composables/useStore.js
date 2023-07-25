import projects from "@/data/projects.json";
import videos from "@/data/videos.json";
import careers from "@/data/career.json";
import recommendations from "@/data/recommendations.json";


export const useStore = () => {
    return {projects, videos, careers, recommendations};
};
