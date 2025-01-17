"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";

import { Chapter as ChapterType } from "@/content/chapters";
import ExpandedChapter from "@/components/ExpandedChapter";

const Chapter = ({
  number,
  title,
  content,
  chapterDownloadUrl,
}: {
  number: number;
  title: string;
  chapterDownloadUrl?: string;
  content: {
    title: string;
    vimeoId?: string;
    externalLinks?: { name: string; caption?: string; href: string }[];
  }[];
}) => {
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: fullWidth ? "100%" : "50%",
        },
      }}
    >
      <Accordion
        onChange={() => {
          setFullWidth(!fullWidth);
        }}
        expanded={fullWidth}
        sx={{
          margin: 1,
          borderRadius: "20px !important",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "Grey900" }} />
          }
          sx={{
            padding: 4,
            height: { xs: "108px", sm: "135px" },
            mt: fullWidth ? 1 : 0,
          }}
        >
          <Stack spacing={1}>
            {number > 0 ? (
              <Typography color={"PrimaryBlue"} variant="button">
                {`CHAPTER ${number}`}
              </Typography>
            ) : (
              <></>
            )}
            <Typography
              color={"black"}
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "Grey900",
              }}
            >
              {title}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <ExpandedChapter
            content={content}
            chapterDownloadUrl={chapterDownloadUrl}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const LibraryChapters = ({ chapters }: { chapters: ChapterType[] }) => {
  return (
    <>
      <Stack sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {chapters.map((chapter, index) => {
          return (
            <Chapter
              key={index}
              number={index}
              title={chapter.title}
              content={chapter.content}
              chapterDownloadUrl={chapter.downloadUrl}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default LibraryChapters;
