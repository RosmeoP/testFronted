import React, { useState } from "react";
import Graph from "react-vis-network-graph";
import axios from "axios";
const viewportWidth = window.innerWidth;
const useGraphData = () => {
	const [graphData, setGraphData] = React.useState({ nodes: [], edges: [] });

	React.useEffect(() => {
		axios
			.get("http://localhost:3001/api/tema")
			.then((response) => {
				// response.data follows this structure
				/**
				 * [{
				 *  "_id": string,
				 *  "title": string,
				 * "introduccion": string,
				 * requisitos: string[]
				 * materialClase: [],
				 * materialRecomendado: []
				 * orden: Number
				 * }]
				 */
				console.log(viewportWidth);
				const data = {
					// nodes: [],
					nodes: response.data.map((tema, index) => ({
						id: tema.title,
						label: tema.title,
						title: tema.title,
						color: {
							background: index === 0 ? "#ffcc00" : "#b3b3b3",
						},
						originalColor: {
							background: "#b3b3b3",
						},
						shape: "dot",
						x: Math.random() * (200 - -400) + -400,
						y: Math.random() * (200 - -400) + -400,
					})),
					edges: [],
				};
				response.data.forEach((tema, i) => {
					if (!tema.requisitos) return;
					tema.requisitos.forEach((req) => {
						if (data.nodes.find((node) => node.id === req)) {
							data.edges.push({
								from: req,
								to: tema.title,
								arrows: {
									from: { enabled: false },
									to: { enabled: true },
								},
							});
						}
					});
				});
				setGraphData(data);
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	}, []);

	return [graphData, setGraphData];
};

export default function GraphView() {
	const [graphData, setGraphData] = useGraphData();
	const [network, setNetwork] = useState();

	const events = {
    selectNode: (event) => {
      console.log("Node selected: ", event);
    },
		hoverNode: (event) => {
			const nodeId = event.node;
			const connectedNodes = network.getConnectedNodes(nodeId);

			// setGraphData((prevGraph) => {
			// 	const updatedNodes = prevGraph.nodes.map((node) => {
			// 		if (node.id === nodeId) {
			// 			// Highlight hovered node
			// 			return {
			// 				...node,
			// 				color: {
			// 					background: "orange",
			// 					border: "darkorange",
			// 				},
			// 			};
			// 		} else if (connectedNodes.includes(node.id)) {
			// 			// Highlight neighbor nodes
			// 			return {
			// 				...node,
			// 				color: {
			// 					background: "lightgreen",
			// 					border: "green",
			// 				},
			// 			};
			// 		} else {
			// 			// Dim other nodes
			// 			return {
			// 				...node,
			// 				color: {
			// 					background: "lightgray",
			// 					border: "gray",
			// 				},
			// 			};
			// 		}
			// 	});

			// 	return {
			// 		...prevGraph,
			// 		nodes: updatedNodes,
			// 	};
			// });
		},
		blurNode: () => {
			// setGraphData((prevGraph) => ({
			// 	...prevGraph,
			// 	nodes: prevGraph.nodes.map((node) => ({
			// 		...node,
			// 		color: {
			// 			background: node.originalColor.background,
			// 		},
			// 	})),
			// }));
		},
	};
	const options = {
		physics: {
			enabled: true, //permite mover los nodos
		},
		interaction: {
			// navigationButtons: true,
			zoomView: true,
			hover: true,
		},
		nodes: {
			borderWidth: 2,
			size: 30,
			color: {
				border: "#0b2725", //color del borde del nodo
				background: "#e8f8f7", //color de los nodos
			},
			font: {
				color: "#333", //color del font de los nodos
			},
		},
		edges: {
			color: "black", //color of the arrow
			arrows: {
				to: { enabled: true, scaleFactor: 1.5 },
				from: { enabled: true, scaleFactor: 1.5 },
				// length: 20, // Adjust the length of the arrow's line
				// width: 10, // Adjust the width of the arrow's line
			},
			smooth: {
				enabled: true,
				type: "dynamic",
			},
		},
		// shadow: true,
		height: "900px",
	};

	return (
		<div>
			<Graph
				graph={graphData}
				options={options}
				events={events}
				getNetwork={(network) => {
					setNetwork(network);
				}}
			/>
		</div>
	);
}
