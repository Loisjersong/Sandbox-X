const Graph = require('./Graph.js');

// creating Graph instance
const trainNetwork = new Graph(true, true);

// adding 6 vertex to trainNetwork
const losAngeles = trainNetwork.addVertex('Los Angeles');
const sanFrancisco = trainNetwork.addVertex('San Francisco');
const newYork = trainNetwork.addVertex('New York');
const atlanta = trainNetwork.addVertex('Atlanta');
const denver = trainNetwork.addVertex('Denver');
const calgary = trainNetwork.addVertex('Calgary');

// adding edges between vertex with weight
trainNetwork.addEdge(sanFrancisco, losAngeles, 400);
trainNetwork.addEdge(losAngeles, sanFrancisco, 400);
trainNetwork.addEdge(newYork, denver, 1800);
trainNetwork.addEdge(denver, newYork, 1800);
trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);
trainNetwork.addEdge(losAngeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losAngeles, 2100);

// removing edge/route to and from calgary
trainNetwork.removeEdge(calgary, denver);
trainNetwork.removeEdge(denver, calgary);
trainNetwork.removeEdge(newYork, denver);

// removing calgary since calgary is disconnected in the graph
trainNetwork.removeVertex(calgary);

// logging trainNetwork
trainNetwork.print();
