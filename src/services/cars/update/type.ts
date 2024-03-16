export interface UpdateCarProps {
  id: string;
  body: UpdateCarDataBody;
}

export interface UpdateCarDataBody {
  _id?: string;
  qcStatus?: string;
  status?: string;
  bidStartTime?: string;
  bidEndTime?: string;
  realValue?: string;
}
