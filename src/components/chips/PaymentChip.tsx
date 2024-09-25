import { Chip, ChipProps, styled } from "@mui/material";

interface Props {
  title: string;
  color?: string;
}

const CustomChip = styled(Chip)<ChipProps>(() => ({}));

export const PaymentChip = (props: Props) => {
  const { title, color } = props;
  return <CustomChip label={title} color={(color ?? "success") as any} />;
};
