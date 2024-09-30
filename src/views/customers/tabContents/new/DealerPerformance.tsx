import BarGraph from "@/components/ui/charts/BarGraph";
import LineChart from "@/components/ui/charts/LineChart";
import { PieChart } from "@/components/ui/charts/PieChart";
import FallbackSpinner from "@/components/ui/spinner/fallback";
import { useGetDealerPerformance } from "@/services/dealers/performance/get";
import { CarsByBodyType } from "@/services/dealers/performance/type";
import { numberToINR } from "@/utils/convert-to-rs";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  data: any;
}

export default function DealerPerformance(props: Props) {
  const { data } = props;
  const router = useRouter();
  const { data: dealerPerformance, isLoading } = useGetDealerPerformance({
    id: String(router.query.id),
  });
  const performanceData = dealerPerformance?.data?.data;
  console.log(performanceData, data, "dataCheck");
  return isLoading ? (
    <FallbackSpinner />
  ) : (
    <Grid>
      <Typography paddingBottom={3} fontWeight={700} fontSize={18}>
        Engagement Metrics
      </Typography>
      <Card>
        <CardContent>
          <Grid>
            <Typography fontWeight={600}>Time Spent</Typography>
            <Typography color={"Highlight"} fontSize={24} fontWeight={600}>
              5hr 30min
            </Typography>
            {typeof window !== "undefined" && <LineChart />}
          </Grid>
        </CardContent>
      </Card>
      <Grid container display={"flex"} justifyContent={"space-between"} mt={5}>
        <Grid item xs={4}>
          <Typography fontWeight={700} fontSize={18} marginBottom={2}>
            Sales Metrics
          </Typography>
          <Card>
            <CardContent>
              <Typography fontWeight={700} fontSize={16}>
                Total Purchase: {performanceData?.totalCarsBought}
              </Typography>
              {typeof window !== "undefined" &&
              performanceData?.carsByBodyType.length ? (
                <PieChart
                  data={performanceData?.carsByBodyType as CarsByBodyType[]}
                />
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={7.5}>
          <Typography fontWeight={700} fontSize={18} marginBottom={2}>
            Sales Metrics
          </Typography>
          <Card>
            <CardContent>
              <Typography fontWeight={700} fontSize={16}>
                Total Purchase: {performanceData?.totalCarsBought}
              </Typography>
              <Grid display={"flex"} justifyContent={"space-between"} my={3}>
                <Typography fontSize={24} color={"Highlight"} fontWeight={600}>
                  Revenue: {numberToINR(Number(performanceData?.totalRevenue))}
                </Typography>
                <Typography fontSize={22} color={"GrayText"} fontWeight={400}>
                  Average Price:{" "}
                  {numberToINR(Number(performanceData?.averagePrice))}
                </Typography>
              </Grid>
              {typeof window !== "undefined" && (
                <BarGraph
                  data={performanceData?.carsByBodyType as CarsByBodyType[]}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
