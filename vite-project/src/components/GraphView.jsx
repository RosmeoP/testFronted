import React from 'react';
import Graph from 'react-vis-network-graph';

export default function GraphView() {
  const graph = { 
    nodes: [
        { id: 1, label: "Node 1", title: "Node 1", shape: "dot", x: 200, y: 400 },
      { id: 2, label: "Node 2", title: "Node 2", shape: "dot", x: 300, y: 200 },
      { id: 3, label: "Node 3", title: "Node 3", shape: "dot", x: 450, y: 200 },
      { id: 4, label: "Node 4", title: "Node 4", shape: "dot", x: 600, y: 400 },
      { id: 5, label: "Node 5", title: "Node 5", shape: "dot", x: 525, y: 600 },
      { id: 6, label: "Node 6", title: "Node 6", shape: "dot", x: 375, y: 700 },
      { id: 7, label: "Node 7", title: "Node 7", shape: "dot", x: 225, y: 600 },
      { id: 8, label: "Node 8", title: "Node 8", shape: "dot", x: 100, y: 400 },
      { id: 9, label: "Node 9", title: "Node 9", shape: "dot", x: 225, y: 200 },
      { id: 10, label: "Node 10", title: "Node 10", shape: "dot", x: 375, y: 100 },
      { id: 11, label: "Node 11", title: "Node 11", shape: "dot", x: 525, y: 100 },
      { id: 12, label: "Node 12", title: "Node 12", shape: "dot", x: 700, y: 200 },
      { id: 13, label: "Node 13", title: "Node 13", shape: "dot", x: 850, y: 400 },
      { id: 14, label: "Node 14", title: "Node 14", shape: "dot", x: 925, y: 600 },
      { id: 15, label: "Node 15", title: "Node 15", shape: "dot", x: 825, y: 800 },
      { id: 16, label: "Node 16", title: "Node 16", shape: "dot", x: 625, y: 900 },
      { id: 17, label: "Node 17", title: "Node 17", shape: "dot", x: 425, y: 900 },
      { id: 18, label: "Node 18", title: "Node 18", shape: "dot", x: 225, y: 800 },
      { id: 19, label: "Node 19", title: "Node 19", shape: "dot", x: 125, y: 600 },
      { id: 20, label: "Node 20", title: "Node 20", shape: "dot", x: 200, y: 300 },
    ], 
    edges: [
        { from: 1, to: 2, smooth: {type: "curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}} },
        { from: 2, to: 3, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "bar"}, to: {enabled: true, type: "bar"}} },
        { from: 3, to: 4, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}} },
        { from: 4, to: 5, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "bar"}, to: {enabled: true, type: "bar"}} },
        { from: 5, to: 6, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 6, to: 7, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 7, to: 8, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 8, to: 9, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 9, to: 10, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 10, to: 11, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },{ from: 11, to: 12, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 12, to: 13, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },{ from: 13, to: 14, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },{ from: 14, to: 15, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 15, to: 16, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 16, to: 17, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 17, to: 18, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 18, to: 19, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
        { from: 19, to: 20, smooth: {type: "curvedCW"},arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}} },
       // Aquí puedes agregar las configuraciones de las aristas
    ]
  };

  const options = {
    physics:{
        enabled: false //permite mover los nodos
    },
    interaction: {
      navigationButtons: true,
      zoomView: true,
    },
    nodes: {
      borderWidth: 2,
      size: 30,
      color: {
        border: "#0b2725",  //color del borde del nodo
        background: "#e8f8f7" //color de los nodos
      },
      font: {
        color: "#0b2725" //color del font de los nodos
      }
    },
    edges: {
      color: 'black', //color of the arrow
      arrows: {
        to: { enabled: true, scaleFactor: 1.5},
        from: { enabled: true, scaleFactor: 1.5 },
        length: 20, // Adjust the length of the arrow's line
          width: 10, // Adjust the width of the arrow's line
      },
      smooth: {
        enabled: true,
        type: "dynamic"
      }
    },
    shadow: true,
    height: '900px'
  };

  return (
    <div>
      <Graph
        graph={graph}
        options={options}
      />
    </div>
  );
}
