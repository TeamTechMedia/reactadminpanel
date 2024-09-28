import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { ButtonIcon } from "../buttons/ButtonIcon";
import fileThumbnail from "../../../../public/assets/file-thumbnail.svg";
import ConfirmModal from "../modals/ConfirmModal";

interface UploadBodyProps {
  handleBtnUpload?: (file: File) => void;
}

interface Props {
  url: string;
  handleBtnUpload?: (file: File) => void;
  handleOnClick?: () => void;
}

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/gif"];

const UploadBody = (props: UploadBodyProps) => {
  const { handleBtnUpload } = props;
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [error, setError] = useState<null | string>(null);
  const [previewUrl, setPreviewUrl] = useState<null | string>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    // File type validation
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setError("Invalid file type. Please upload a JPEG, PNG, or GIF image.");
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }

    // File size validation
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(
        `File size exceeds ${MAX_FILE_SIZE_MB} MB. Please choose a smaller file.`,
      );
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }

    setSelectedFile(file);
    setError(null);
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  return (
    <Grid p={3}>
      <Box p={3} border="1px dashed #ccc" borderRadius={2} textAlign="center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="image-file-input"
        />
        <label htmlFor="image-file-input">
          <Button variant="outlined" component="span">
            Select Image
          </Button>
        </label>
        {previewUrl && (
          <Box mt={2}>
            <img
              src={previewUrl}
              alt="Selected preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}
        {selectedFile && (
          <div>
            <Typography variant="subtitle1" mt={2}>
              Selected Image: {selectedFile.name}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleBtnUpload && handleBtnUpload(selectedFile)}
              sx={{ mt: 2 }}
            >
              Upload
            </Button>
          </div>
        )}
        {error && (
          <Typography variant="body2" color="error" mt={2}>
            {error}
          </Typography>
        )}
      </Box>
    </Grid>
  );
};

export const ImageTile = (props: Props) => {
  const { url, handleBtnUpload, handleOnClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  function handleUpload() {
    setOpenUpload(!openUpload);
  }

  function handleClick() {
    if (url) {
      window.open(url, "_blank");
    } else {
      handleUpload();
    }
  }
  const opacity = isHovered ? 1 : "";
  const backgroundColor = isHovered ? "#000" : "";
  const transition = isHovered ? "background-color 0.3s ease" : "";
  return (
    <>
      <Box
        display={"flex"}
        padding={1}
        border={2}
        borderColor={"#D9D9D9"}
        borderRadius={1}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleOnClick}
      >
        <Grid
          position={"relative"}
          display={"flex"}
          sx={{ opacity, backgroundColor, transition, border: "1px " }}
        >
          <Image
            loading="lazy"
            src={url ? url : fileThumbnail}
            alt={"file"}
            width={100}
            height={100}
          />
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <ButtonIcon
              onClick={() => {
                handleClick();
              }}
              icon={url ? "tabler:eye" : "tabler:plus"}
              color="white"
              fontSize={30}
            />
          </Grid>
        </Grid>
      </Box>

      <ConfirmModal
        icon="tabler:upload"
        iconSize={"1rem"}
        ContentComponent={<UploadBody handleBtnUpload={handleBtnUpload} />}
        dailogueTitle="Media Upload"
        handleClose={handleUpload}
        open={openUpload}
        hideActions
        maxWidth={"sm"}
        titleFont={14}
      />
    </>
  );
};
