"use client";

import StandardLayout from "@/components/StandardLayout";
import { Box, Stack } from "@mui/material";

import Image from "next/image";

import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import AllyButton from "@/components/AllyButton";

const Donate = () => {
  return (
    <Box sx={{ backgroundColor: "Blue", py: 8 }}>
      <StandardLayout>
        <TwoColumnLayout
          columnWrapOrderOnMobile={ColumnWrapOrder.REVERSE}
          leftCol={5}
          rightCol={6}
        >
          <Box
            sx={{
              img: { maxWidth: "100%", height: "auto", borderRadius: "16px" },
            }}
          >
            <Image
              src={"/images/temp.png"}
              alt={"temp"}
              width={456}
              height={390}
            />
          </Box>
          <Stack spacing={4} sx={{ mb: { xs: 4 } }}>
            <TitleAndParagraph
              title={"Partner with us to prevent the exploitation of minors."}
              paragraph={
                <>
                  We want to ensure that resources like The Prevention Project
                  are accessible to all—this means keeping them free. If you
                  would like to help support the creation and distribution of
                  more resources like this, we invite you to make a donation
                  through Ally Global Foundation.
                </>
              }
            />
            <AllyButton color={"PrimaryBlue"} text={"DONATE"} />
          </Stack>
        </TwoColumnLayout>
      </StandardLayout>
    </Box>
  );
};

export default Donate;
