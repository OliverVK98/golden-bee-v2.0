import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { address, footerLinks } from "@/const";
import { Text } from "@/components/shared/Text/Text";

export const FooterLinks = () => {
  const router = useRouter();
  const onLinkClick = (url: string) => {
    router.push(url);
  };

  return (
    <Stack
      sx={{ bgcolor: "accent.main", height: "150px" }}
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <Stack
        sx={{ width: "1220px" }}
        direction="row"
        gap="150px"
        justifyContent="center"
      >
        <Stack>
          {footerLinks.slice(0, 3).map((link, index) => (
            <Text
              text={link.text}
              key={index}
              clickable
              onClick={() => onLinkClick(link.url)}
            />
          ))}
        </Stack>
        <Stack>
          {footerLinks.slice(3, 6).map((link, index) => (
            <Text
              text={link.text}
              key={index}
              clickable
              onClick={() => onLinkClick(link.url)}
            />
          ))}
        </Stack>
        <Stack>
          {address.map((line, index) => (
            <Text text={line} key={index} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
