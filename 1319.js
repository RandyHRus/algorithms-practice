/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {

    if (n > connections.length + 1) {
        return -1
    }
  
    let graph = {};
  
    for (let i = 0; i < n; i++) {
        graph[i] = { num: i, neighbours: []}
    }
  
      // construct graph
      for (let i = 0; i < connections.length; i++) {
          let c = connections[i];
          let a = c[0];
          let b = c[1];
          graph[a].neighbours.push(b);
          graph[b].neighbours.push(a);
      }
  
      // Find number of islands.
      let numIslands = 0;
      let visited = new Set();
      for (let i = 0; i < n; i++) {
          if (!visited.has(i)) {
              numIslands += 1;
              dfs(graph, i, visited);
          }
      };
  
      return numIslands - 1;
  };
  
  let dfs = function(graph, source, visited) {
  
      let stack = [];
      stack.push(graph[source]);
  
      while (stack.length > 0) {
          let node = stack.pop();
          visited.add(node.num)
          node.neighbours.forEach((n) => {
              if (!visited.has(n)) {
                  stack.push(graph[n]);
              }
          })
      }
  }