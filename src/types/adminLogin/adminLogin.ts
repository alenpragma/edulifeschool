export type StepProps = {
  next?: () => void;
  prev?: () => void;
};

export type District = {
  id: string;
  division_id: string;
  name: string;
  bn_name: string;
  lat: string;
  lon: string;
  url: string;
};

export type Division = {
  id: string;
  name: string;
  bn_name: string;
  url: string;
};
export type Upozila = {
  id: string;
  district_id: string;
  name: string;
  bn_name: string;
  url: string;
};
