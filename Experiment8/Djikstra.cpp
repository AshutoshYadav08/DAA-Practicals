#include<vector>
#include <bits/stdc++.h> 
using namespace std;

// User Function Template
class Solution {
  public:
    
    typedef pair<int,int> Pair;
  
    vector<int> dijkstra(int V, vector<vector<int>> &edges, int src) {
        // Code here
        
        vector<vector<Pair>> adj_list(V,vector<Pair>());
        
        for(auto &edge : edges){
            adj_list[edge[0]].push_back({edge[2],edge[1]});
            adj_list[edge[1]].push_back({edge[2],edge[0]});
        }
        
            
        vector<int> ans(V,INT_MAX);
        
        
        
        
        priority_queue<Pair,vector<Pair>,greater<Pair>> pq;
        
        pq.push({0,src});
        ans[src] = 0;
        
        
        while(!pq.empty()){
            
            
            Pair top = pq.top();
            // cout<<top.first<<" "<<top.second<<endl;
            pq.pop();
            
            for(auto &edge : adj_list[top.second]){
                int new_dist = top.first + edge.first;
                if(ans[edge.second] > new_dist ){
                    ans[edge.second] = new_dist;
                    pq.push({new_dist,edge.second});
                    
                }
                
                
            }
            
            
        }
        
        return ans;
        
        
    }
};