import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const FooterItem = ({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    style={{
      textDecoration: "none",
      whiteSpace: "nowrap",
      margin: "2px",
    }}
    onClick={onClick}
  >
    <Typography variant="caption" color={`Grey800`}>
      {text}
    </Typography>
  </Link>
);

const Footer = () => {
  return (
    <Box mb={10}>
      <Box
        sx={{ borderBottom: "1px solid #673BDC", pb: { xs: 6, sm: 6, md: 4 } }}
      >
        <Grid
          container
          spacing={{
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
          }}
          columns={{ xs: 4, sm: 4, md: 12, lg: 12, xl: 12 }}
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
          style={{
            marginTop: "0px",
            minHeight: "250px",
          }}
        >
          <Grid item xs={4} sm={4} md={8} lg={8} xl={8}>
            <Grid
              container
              spacing={{
                xs: 4,
                sm: 3,
                md: 3,
                lg: 3,
                xl: 3,
              }}
              columns={{ xs: 4, sm: 4, md: 8, lg: 8, xl: 8 }}
              justifyContent="flex-start"
              alignItems="flex-start"
              height="100%"
              style={{
                marginTop: "0px",
              }}
            >
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    HUMAN TRAFFICKING
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <FooterItem text={"Get help now"} href="#what-to-do" />
                </Stack>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    ABOUT US
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <FooterItem text={"Who we are"} href="/about#who-we-are" />
                  <FooterItem
                    text={"Book a presentation"}
                    href="/about#book-a-presentation"
                  />
                  <FooterItem text={"Donate"} href="/about#donate" />
                </Stack>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    LIBRARY
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <FooterItem text="Grades 3-5" href="/grades3-5" />
                  <FooterItem text="Grades 6-7" href="/grades6-7" />
                  <FooterItem text="Grades 8-12" href="/grades8-12" />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 1,
        }}
      >
        <Typography variant={"caption"} color={"Grey800"}>
          © 2024 Ally Global Foundation and Exploitation Education Institute
        </Typography>
        <Typography variant={"caption"} color={"Grey800"}>
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
