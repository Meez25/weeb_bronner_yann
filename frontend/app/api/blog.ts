import { protectedApi } from "./axios"

interface CreatePostPayload {
  title: string;
  excerpt?: string;
  content: string;
  is_published: boolean;
}

export const createPost = async (payload: CreatePostPayload) => {
  const response = await protectedApi.post("posts/", payload);
  return response.data;
}
