class Graph {
    constructor(vertices) {
        this.v = vertices
        this.graph = Array(vertices).fill(null)
    }
    addEdges(src, des) {
        if (this.graph[src] == null) {
            this.graph[src] = []
            this.graph[src].push(des)
        } else {
            this.graph[src].push(des)
        }
    }
    bfs(start){
        visited = Array(this.v).fill(false)
        queue = []
        queue.push(this.graph[start])
        while(queue){
            ele = queue.shift()
            visited[ele] = true
            for(x in this.graph[ele]){
                if(visited)
            }
        }
    }
}

const g = new Graph(5)
g.addEdges(0, 1)
g.addEdges(1, 0)
g.addEdges(0, 2)
g.addEdges(2, 0)
g.addEdges(1, 2)
g.addEdges(2, 1)
g.addEdges(2, 4)
g.addEdges(2, 3)
g.addEdges(3, 4)
g.addEdges(3, 2)
g.addEdges(4, 3)
console.log(g)

