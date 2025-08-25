

class Solution {
  public:
    vector<vector<int>> countFreq(vector<int>& arr) {
        // code here
        
        map<int, int> mp;
        for (int num : arr) {

        mp[num]++;
        }
    vector<vector<int>> result;

   
    for (const auto pair : mp) {
      result.push_back({pair.first, pair.second});
    }

    return result;
    }
};