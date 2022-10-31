import * as React from "react";
import styled from "styled-components";
import Deleteimg from "../../../../asset/images/Deleteimg.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deArchiveTask } from "../../../../redux/actions/taskAction";
import { ITaskReq } from "../../../../interfaces/custemerTask";
import { useAppDispatch } from "../../../../redux/store";

const UnArchive:React.FC<{task: ITaskReq}>=({task})=> {
  // const [data, setData] = React.useState([]);
  // console.log("data", data);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const dispatch = useAppDispatch();
  const handleUnArchiveTash = (id: number) => {
    dispatch(deArchiveTask({ id }));
    handleClose();
  };
  //

  const Title = styled.div``;
  return (
    <div>
      <Button
        style={{ background: "white", color: "black" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        UnArchive
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <img
            alt=""
            style={{ height: "200px", marginLeft: "60px" }}
            src={`${Deleteimg}`}
          />
        </DialogTitle>

        <DialogContent sx={{ width: "400px", textAlign: "center" }}>
          <DialogContentText id="alert-dialog-description">
            <b style={{ fontSize: "30px" }}>Are you sure?</b>
            <Title>Delete project: "{task.name}"?</Title>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            style={{ backgroundColor: "#7cd1f9", color: "#fff" }}
            onClick={() => handleUnArchiveTash(task.id)}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default UnArchive;