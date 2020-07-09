import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import { CREATE_VERTEX } from "../cache/mutations";
import { GET_GRAPH } from "../cache/queries";

import Map from "../components/Map";
import Loader from "../components/Loader";
import { parseVertices } from "../utils/index";

export default function MapCreator() {
  const [parsedData, setParsedData] = useState();
  const graphId = useParams().id;

  //fetch graph
  const { data: graphData, loading, client } = useQuery(GET_GRAPH, {
    variables: { id: graphId },
  });

  const [createVertex, { data: createdVertex }] = useMutation(CREATE_VERTEX);

  if (createdVertex) console.log(createdVertex);

  /* thunk for creating vertices */
  const createVertexThunk = (x, y) => (data) => {
    createVertexThunk({ variables: { data, x, y } });
  };

  return loading && !graphData ? (
    <Loader open={loading} />
  ) : (
    <div>
      <Map vertexData={graphData.graph.vertices} createVertex={createVertex} />
    </div>
  );
}
