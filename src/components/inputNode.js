import React, { memo, useEffect } from "react";
import { Handle } from "react-flow-renderer";

import InputBase from "@material-ui/core/InputBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import Editable from "./Editable";
import useNode from "../hooks/useNode";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  node: {
    background: "rgb(193,193,193)",
    border: "2px",
    borderRadius: "5px",
    padding: "5%",
    boxShadow: "2px 2px 2px rgba(160,160,160,0.8)",
  },
  newNode: {
    border: "2px",
    height: "100%",
    width: "auto",
    borderRadius: "5px",
    padding: "5%",
  },
  selected: { border: "2px solid rgba(32, 146, 223, 0.5)" },
  paper: {
    height: "50%",
    margin: "2%",
  },
}));

export default memo(({ id, data, selected }) => {
  const classes = useStyles();
  const { updateVertexData, setSelectedNode } = useNode();

  useEffect(() => {
    if (selected) {
      setSelectedNode(id);
    }
    return () => {
      setSelectedNode(null);
    };
  }, [id, selected, setSelectedNode]);

  const handleChange = (event) => {
    updateVertexData({
      variables: { id, data: { label: event.target.value } },
    });
  };

  return (
    <>
      <Card className={selected ? classes.selected : null} elevation={5}>
        <Handle
          type="default"
          postion="top"
          style={{ background: "rgba(80,80,80,0.2)" }}
        />
        <CardContent>
          <Editable text={data.label} type="textarea">
              <InputBase
                value={data.label}
                onChange={handleChange}
                multiline={true}
                type="textarea"
              ></InputBase>
          </Editable>
        </CardContent>
        <Handle
          type="default"
          position="bottom"
          style={{ background: "rgba(80,80,80,0.2)" }}
        />
      </Card>
    </>
  );
});
