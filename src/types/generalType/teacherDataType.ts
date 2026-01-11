export interface Teacher {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeachersApiResponse {
  success: boolean;
  message: string;
  data: Teacher[];
}
