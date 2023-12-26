import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Text, TextSize } from "@/components/shared/Text/Text";

interface BundleDetailsProps {
  bundle?: string[];
}

export const BundleDetails = (props: BundleDetailsProps) => {
  const { bundle } = props;

  if (!bundle) return null;

  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          bgcolor: "background.default",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Text text={`What's in my package:`} size={TextSize.XS} />
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "info.main" }}>
        <List sx={{ width: "100%", padding: 0, listStyleType: "disc" }}>
          {bundle.map((item, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <ListItemText
                primary={<Text text={item} size={TextSize.XS} />}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "& .MuiListItemText-primary": {
                    display: "list-item",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
