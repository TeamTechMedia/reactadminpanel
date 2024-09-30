export interface DealerPerformance {
  status: string;
  message: string;
  data: DealerPerformanceData;
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface DealerPerformanceData {
  averagePrice: number;
  totalRevenue: number;
  totalCarsBought: number;
  carsByBodyType: CarsByBodyType[];
}

export interface CarsByBodyType {
  _id: string;
  count: number;
  totalAmount: number;
  procuredDates: any[];
}
