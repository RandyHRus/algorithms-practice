class TimeMap:

    def __init__(self):
        # key: string, value: List[(timestamp: int, value: string)]
        # value is sorted in nondecresing order of the timestamp
        self.dictionary = {}

    # O(1)
    def set(self, key: str, value: str, timestamp: int) -> None:
        array = self.dictionary.get(key, None)
        if array:
            array.append([timestamp, value])
        else:
            self.dictionary[key] = [[timestamp, value]]

    # O(logn)
    def get(self, key: str, timestamp: int) -> str:

        array = self.dictionary.get(key, None)

        def search(start, end, timestamp):
            if start == end:
                return array[start][1] if array[start][0] <= timestamp else ""
            mid = start + floor((end - start) / 2) + 1
            if array[mid][0] <= timestamp:
                return search(mid, end, timestamp)
            return search(start, mid-1, timestamp)

        if not array:
            return ""
        return search(0, len(array)-1, timestamp)


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)