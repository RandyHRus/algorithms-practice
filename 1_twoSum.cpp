#include <map>

class Solution
{
public:
    std::vector<int> twoSum(std::vector<int> &nums, int target)
    {

        std::map<int, int> dictionary;

        for (int i = 0; i < nums.size(); i++)
        {
            dictionary[nums[i]] = i;
        }

        std::vector<int> result;
        for (int i = 0; i < nums.size(); i++)
        {
            int desired = target - nums[i];
            if (dictionary.count(desired) > 0)
            {
                if (i != dictionary[desired])
                {
                    result.push_back(dictionary[desired]);
                    result.push_back(i);
                    return result;
                }
            }
        }
        return result;
    }
};