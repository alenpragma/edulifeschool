export interface IGalleryItem {
  id: number;
  url: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface IGalleryResponse {
  success: boolean;
  message: string;
  data: IGalleryItem[];
}
