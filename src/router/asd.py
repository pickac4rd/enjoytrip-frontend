import heapq

def dfs(field, tmp, target):
    global c
    global result
    if sum(tmp)> c: #최대양을 넘어가면 넣었던 값 빼기
        result=max(result,target-(tmp[-1]**2))
        return
  
    for i in range(len(field)):
        if visited[i]==0:
            visited[i]=1
            dfs(field, tmp+[field[i]] , target+(field[i]**2))
            visited[i]=0

T=int(input())
for tc in range(1, T+1):
    #벌통크기, 선택벌통개수, 벌꿀 최대양
    n,m,c=map(int,input().split())
    graph=[list(map(int,input().split())) for _ in range(n)]
    heap=[]
  
    for r in range(n):
        for c2 in range(n-m+1):
            result=0
            arr=graph[r][c2:c2+m]
            if sum(arr)<=c: #모든 벌통 꿀 채취가능한 경우
                for a in arr:
                    result+=a**2
            else:
                visited=[0]*m
                dfs(arr, [], 0)
            heapq.heappush(heap, (-result, r,c2)) #가장 큰값 2개빼기 위해서 최대힙
  
    answer=[]
    while heap:
        num, row, col=heapq.heappop(heap)
        if len(answer)==2: break
        if len(answer)==1 and answer[0][1]==row:
            if abs(answer[0][2] -col)<= m-1:
                continue
        answer.append((num, row, col))

    print(f'#{tc} {-answer[0][0]-answer[1][0]}')