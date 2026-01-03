export type AdminSignUpResponse = {
  success: boolean;
  message: string;
  data: AdminResponse;
};

export type AdminResponse = {
  id: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  ownerProfile: {
    name: string;
    phone: string;
    profilePicture: string;
    hotel: AdminHotel;
  };
};

export type AdminHotel = {
  id: string;
  name: string;
  address: string;
  division: string;
  district: string;
  upazila: string;
  hotline: string[];
  email: string;
  googleMapUrl: string;
  tradeLicense: string;
  tinCertificate: string;
  tinNumber: string;
  vatHotel: number;
  vatFood: number;
  clockInTime: string;
  clockOutTime: string;
  images: string[];
  ownerId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};
