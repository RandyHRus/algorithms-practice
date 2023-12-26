class Solution:
    def DFS(self, node, iVisited, visited, graph) -> bool:
        prereqs = graph[node]
        for i in prereqs:
            if i in iVisited:
                # Loop found
                return False
            if i in visited:
                continue
            iVisited.add(i)
            visited.add(i)
            if not self.DFS(i, iVisited, visited, graph):
                return False
            iVisited.remove(i)
        # No loop found
        return True

    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = {}
        for i in range(numCourses):
            graph[i] = []
        for prereq in prerequisites:  
            courseTo = prereq[0]
            courseFrom = prereq[1]
            graph[courseFrom].append(courseTo)
        visited = set()
        for i in range(numCourses):
            if i in visited:
                continue
            if not self.DFS(i, set(), visited, graph):
                return False
        return True



