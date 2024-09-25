import BarGraph from "@/components/ui/charts/BarGraph";
import LineChart from "@/components/ui/charts/LineChart";
import { PieChart } from "@/components/ui/charts/PieChart";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  data: any;
}

export default function DealerPerformance(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = props;
  return (
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
                Total Purchase: 50
              </Typography>
              {typeof window !== "undefined" && <PieChart />}
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
                Total Purchase: 50
              </Typography>
              <Grid display={"flex"} justifyContent={"space-between"} my={3}>
                <Typography fontSize={24} color={"Highlight"} fontWeight={600}>
                  Revenue: ₹5,00,0000.00
                </Typography>
                <Typography fontSize={22} color={"GrayText"} fontWeight={400}>
                  Average Price: ₹1,000.00
                </Typography>
              </Grid>
              {typeof window !== "undefined" && <BarGraph />}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
