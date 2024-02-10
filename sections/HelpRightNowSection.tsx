import ExternalLinkTile, { tiles } from "@/components/ExternalLinkTile";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Box, Stack } from "@mui/material";

const HelpRightNowSection = () => {
  return (
    <StandardLayout
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          variant="h4"
          sx={{ textAlign: "center" }}
          sxMobile={{ textAlign: "left" }}
        >
          What if I need help right now?
        </Text>
        <Text
          variant="body1"
          sx={{ textAlign: "center", maxWidth: "800px" }}
          sxMobile={{ textAlign: "left" }}
        >
          If you suspect that you’re being exploited, you can report it to one
          of the resources below. However, if you are in immediate danger, call
          9-1-1.
        </Text>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1048px",
          paddingTop: 6,
          paddingBottom: 9,
          gap: 1,
        }}
      >
        {tiles.map((tile, index) => {
          return (
            <ExternalLinkTile
              key={index}
              name={tile.name}
              caption={tile.caption}
              href={tile.href}
            />
          );
        })}
      </Box>
    </StandardLayout>
  );
};

export default HelpRightNowSection;