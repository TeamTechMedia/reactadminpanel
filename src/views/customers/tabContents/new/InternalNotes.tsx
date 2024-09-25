import { Card, CardContent, Divider, Grid } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import { useContext, useState } from "react";
import { UpdateDealerModal } from "../../modals/UpdateDealerModal";
import { NotesDisplayContainer } from "@/components/ui/containers/NoteDisplayContainer";
import { DealerContext } from "../CustomerTabs";
import { Dealer } from "@/types/customers/get";
import { formatDateAndTime } from "@/utils/format-date-and-time";

export const InternalNotes = () => {
  const [open, setOpen] = useState(false);
  function handleNotes() {
    setOpen(!open);
  }
  const data = useContext(DealerContext) || ({} as Dealer);
  const { internalNotes } = data || {};
  return (
    <>
      <Card>
        <CardContent>
          <DealerCardContent
            heading="Internal Notes"
            subHeading="If you want to add any notes click the button here"
            btnText="Add Notes"
            handleBtnClick={handleNotes}
          />
          {internalNotes.length ? <Divider sx={{ my: 3 }} /> : <></>}
          {internalNotes.length ? (
            internalNotes.map((note: { note: string; time: Date }) => {
              return (
                <Grid my={2} key={note.note}>
                  <NotesDisplayContainer
                    notes={note.note}
                    time={formatDateAndTime(note.time)}
                  />
                </Grid>
              );
            })
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
      <UpdateDealerModal open={open} handleClose={handleNotes} type="notes" />
    </>
  );
};
