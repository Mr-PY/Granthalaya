import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TelegramIcon from "@material-ui/icons/Telegram";

const ReplyMessage = ({ reply, setReply }) => {
  return (
    <Container maxWidth="md">
      <Box
        className="reply-message-box"
        boxShadow="5"
        textAlign="center"
        padding="2em"
        mt="1em"
        mb="1em"
        borderRadius="0.5em"
        style={{ backgroundColor: "#efefef" }}
      >
        <br />
        <div className="input-fields-arranger">
          <TextField
            label="Message Id"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
        <br />
        <br />
        <div className="input-fields-arranger">
          <TextField
            label="To"
            defaultValue="Pranay Prasad"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            size="medium"
            fullWidth
          />
          <TextField
            label="Email"
            defaultValue="pranayprasad@gmail.com"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            size="medium"
            fullWidth
          />
        </div>
        <br />
        <br />
        <TextField
          label="Message"
          defaultValue="Hello"
          InputProps={{
            readOnly: true,
          }}
          multiline
          rows={3}
          variant="filled"
          size="medium"
          fullWidth
        />
        <br />
        <br />
        <TextField
          label="Your Reply"
          multiline
          rows={4}
          variant="outlined"
          size="medium"
          fullWidth
        />
        <br />
        <br />
        <div className="button-input-fields-arranger">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<TelegramIcon />}
          >
            Send
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setReply(!reply)}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default ReplyMessage;
