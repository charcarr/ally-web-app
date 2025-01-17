"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Box, Stack, IconButton, Modal } from "@mui/material";
import ChooseYourGradeSection from "@/sections/ChooseYourGradeSection";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import useDevice from "@/hooks/useDevice";
import {
  positions,
  mobilePositions,
  tabletPositions,
  mobileTextStyle,
  tabletTextStyles,
  textStyles,
} from "./VideoHeroPositions";
import ChapterCardSection, { GradeGroup } from "../ChapterCardSection";

const style = {
  position: "absolute" as "absolute",
  top: { xs: "40%", md: "50%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "340px", sm: "550px", md: "792px" },
  height: { xs: "219px", sm: "355px", md: "511px" },
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "16px",
  p: { xs: 4, sm: 6, md: 10 },
};

const VideoHero = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeGradeGroup, setActiveGradeGroup] = useState<null | GradeGroup>(
    null
  );
  const { xsScreen: isMobile, smScreen: isTablet } = useDevice();

  const responsivePositions = (position: string) =>
    isMobile
      ? mobilePositions[position]
      : isTablet
      ? tabletPositions[position]
      : positions[position];

  const responsiveTextStyles = isMobile
    ? mobileTextStyle
    : isTablet
    ? tabletTextStyles
    : textStyles;

  const handlePlayClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Hero
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, 80%, white), linear-gradient(to right, #673BDC, #00B8C5)",
          height: {
            xs: "auto",
          },
        }}
      >
        <Box sx={{ py: { xs: 0, sm: 2 } }}>
          <StandardLayout>
            <Modal open={modalIsOpen} onClose={() => setIsOpen(false)}>
              <Box sx={style}>
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "0", sm: "6px", md: "12px" },
                    right: { xs: "0", sm: "6px", md: "12px" },
                    zIndex: 2,
                  }}
                >
                  <IconButton
                    onClick={() => setIsOpen(false)}
                    sx={{
                      backgroundColor: "transparent",

                      color: "PrimaryPurple",
                      "&:hover": {
                        backgroundColor: "PrimaryPurple",
                        color: "white",
                      },
                    }}
                  >
                    <CloseIcon fontSize={isMobile ? "medium" : "large"} />
                  </IconButton>
                </Box>
                <iframe
                  id="vimeo"
                  style={{
                    borderRadius: "16px",
                  }}
                  src="https://player.vimeo.com/video/1004156625?h=41da92eefc&amp;badge=0&amp;autopause=0&amp;transparent=0&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  height="100%"
                  frameBorder=""
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="The Prevention Project | Main Promo Video"
                ></iframe>
              </Box>
            </Modal>
            <Stack
              display="flex"
              flexDirection="column"
              alignItems="center"
              spacing={{ xs: 2, sm: 4, md: 4 }}
            >
              <Text
                variant="h3"
                sx={{
                  maxWidth: "900px",
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "32px", md: "50px" },
                }}
              >
                Welcome to The Prevention Project
              </Text>
              <Stack
                direction="row"
                justifyContent="center"
                sx={{ width: "100%", padding: { xs: 2, md: 4 } }}
              >
                <Box
                  sx={{
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      ...responsivePositions("topLeft"),
                      position: "absolute",
                    }}
                  >
                    <Text
                      variant="h6"
                      sx={{
                        backgroundColor: "PrimaryBlue",
                        ...responsiveTextStyles,
                      }}
                    >
                      What&apos;s the problem with information sharing online?
                    </Text>
                  </span>
                  <span
                    style={{
                      ...responsivePositions("middleLeft"),
                      position: "absolute",
                    }}
                  >
                    <Text
                      variant="h6"
                      sx={{
                        backgroundColor: "Blue",
                        ...responsiveTextStyles,
                      }}
                    >
                      Is sugar dating online safe?
                    </Text>
                  </span>
                  <span
                    style={{
                      ...responsivePositions("bottomLeft"),
                      position: "absolute",
                    }}
                  >
                    <Text
                      variant="h6"
                      sx={{
                        backgroundColor: "PrimaryPurple",
                        ...responsiveTextStyles,
                      }}
                    >
                      How can AI be used against me?
                    </Text>
                  </span>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "100%", sm: "80%" },
                    maxWidth: "600px",
                    position: "relative",
                  }}
                >
                  {!isMobile ? (
                    <video
                      loop
                      autoPlay
                      muted
                      width={"100%"}
                      style={{
                        borderRadius: 15,
                      }}
                      poster="/images/desktop-video-poster.jpg"
                    >
                      <source
                        src={"/videos/TPP-Header-Reel.mp4"}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <Image
                      src={"/images/mobile-hero-fallback.jpg"}
                      alt={"TPP-Header-Reel"}
                      width={300}
                      height={180}
                      style={{
                        borderRadius: 15,
                      }}
                    />
                  )}
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "PrimaryPurple",
                      border: "2px solid white",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "PurpleDark",
                      },
                    }}
                    onClick={handlePlayClick}
                  >
                    <PlayArrowIcon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      ...responsivePositions("topRight"),
                      position: "absolute",
                    }}
                  >
                    <Text
                      variant="h6"
                      sx={{
                        backgroundColor: "Blue",
                        ...responsiveTextStyles,
                      }}
                    >
                      What does consent really look like?
                    </Text>
                  </span>
                  <span
                    style={{
                      ...responsivePositions("middleRight"),
                      position: "absolute",
                    }}
                  >
                    <Text
                      variant="h6"
                      sx={{
                        backgroundColor: "PrimaryPurple",
                        ...responsiveTextStyles,
                      }}
                    >
                      Is my online romance real?
                    </Text>
                  </span>
                  <span
                    style={{
                      ...responsivePositions("bottomRight"),
                      position: "absolute",
                    }}
                  >
                    <Text
                      variant="h6"
                      sx={{
                        backgroundColor: "PrimaryBlue",
                        ...responsiveTextStyles,
                      }}
                    >
                      Is sharing nudes really a crime?
                    </Text>
                  </span>
                </Box>
              </Stack>
            </Stack>
          </StandardLayout>
          <StandardLayout sx={{ pt: { xs: 4, sm: 4, md: 6 } }}>
            <Stack
              spacing={4}
              alignItems={"center"}
              sx={{ mb: { xs: 2, md: 4 } }}
            >
              <Text
                variant="body1"
                color="PurpleDark"
                sx={{
                  maxWidth: { xs: "90%", md: "700px" },
                  textAlign: "center",
                  marginX: "auto",
                }}
              >
                Let&apos;s learn together, so that we can create a safer world
                for ourselves and for others — both online and face to face.
              </Text>
              <Text
                color="PurpleDark"
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                Choose a grade below to get started.
              </Text>
            </Stack>
          </StandardLayout>
        </Box>
      </Hero>
      <StandardLayout sx={{ mb: 8 }}>
        <Stack gap={8}>
          <ChooseYourGradeSection setActiveGradeGroup={setActiveGradeGroup} />
          <ChapterCardSection showChapters={activeGradeGroup} />
        </Stack>
      </StandardLayout>
    </>
  );
};

export default VideoHero;
