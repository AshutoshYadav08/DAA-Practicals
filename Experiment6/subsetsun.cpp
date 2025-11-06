#include<vector>
#include <bits/stdc++.h> 
using namespace std;

class Solution {
  public:
  
    
    
    bool solve(vector<int> & arr,int i ,int sum,vector<vector<int>> &dp){
        
        if(sum == 0 ) return 1;
        if(i == arr.size()) return false;
        
        if(dp[i][sum] != -1) return dp[i][sum];
        
        
        
        
        bool not_pick = solve(arr,i+1,sum,dp);
        bool pick = 0;
        
        if(arr[i] <= sum ){
            pick = solve(arr,i+1,sum-arr[i],dp);
        }
        
        
        
        return dp[i][sum] = (pick || not_pick);
        
        
    }
  
    bool isSubsetSum(vector<int>& arr, int sum) {
        // code here
        vector<vector<int>> dp(arr.size(),vector<int>(10000,-1));
        return solve(arr,0,sum,dp);
        
    }
};