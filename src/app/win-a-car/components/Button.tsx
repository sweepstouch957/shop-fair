import { Button } from "@mui/material";

type CustomButtonProps = React.ComponentProps<typeof Button>;

export default function CustomButton(props: CustomButtonProps) {
  const {
    variant = "contained",
    sx,
    ...rest
  } = props;

  return (
    <Button
      variant={variant}
      size="large"
      sx={[
        {
          borderRadius: "20px",
          textTransform: "none",
          ...(variant === "contained" && {
            backgroundColor: "#D71A21",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#D71A21",
            },
          }),
          ...(variant === "outlined" && {
            backgroundColor: "#fff",
            color: "#D71A21",
            border: "2px solid #D71A21",
            "&:hover": {
              backgroundColor: "#eeeeee",
              border: "2px solid #D71A21",
            },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {props.children}
    </Button>
  );
}
