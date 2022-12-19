import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { StoreHours } from "../../data/store";
import { getFormattedHour } from "../../utils/time";

interface RowProps {
  day: string;
  open: number;
  close: number;
}

function Row({ day, open, close }: RowProps) {
  return (
    <Grid gridTemplateColumns="1fr 4fr">
      <Text>{day}</Text>
      <Text>
        {getFormattedHour(open)} - {getFormattedHour(close)}
      </Text>
    </Grid>
  );
}

export default function BusinessHours() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Box>
      {days.map((day) => {
        if (day in StoreHours) {
          const { open, close } = StoreHours[day];
          return <Row day={day} key={day} open={open} close={close} />;
        }
      })}
    </Box>
  );
}
