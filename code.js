function augmentingPath(graph, start, end) {
    var augPath = [];
    if (start == end) {
        augPath.push(start);
        return augPath;
    } 
    else {
        var visited = [];
        var stack = [];
        var node;

        stack.push([start]);
        
        while (stack.length > 0) {
            augPath = stack.pop();
            node = augPath[augPath.length - 1];
            if (node == end) {
                return augPath;
            }
            else {
                if (visited.includes(node) == false) {
                    visited.push(node);
                    for (var x in graph[node]) {
                        if (fraph[node][x] > 0 && visited.includes(x) == false) {
                            stack.push(augPath.concat([x]))
                        }
                    }
                }
            }
        }
    }
    return [];
}
