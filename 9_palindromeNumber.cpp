#include <cmath>

class Solution
{
public:
    bool isPalindrome(int x)
    {
        std::string string = std::to_string(x);
        int str_length = string.length();
        for (int i = 0; i < str_length / 2; i++)
        {
            if (string[i] != string[str_length - i - 1])
            {
                return false;
            }
        }
        return true;
    }
};