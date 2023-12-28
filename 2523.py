class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        primes = []
        limit = right
        marked = [False] * (limit+1)
        # SieveOfEratosthenes
        for i in range(2, limit):
            if not marked[i]:
                primes.append(i)
            if (i * i) > limit:
                # All unmarked numbers are prime.
                for j in range(i, limit+1):
                    if not marked[j]:
                        primes.append(j)
                break
            if marked[i]: # Multiples of i will already be marked, so continue.
                continue
            j = i
            while j <= limit:
                marked[j] = True
                j += i

        minPair = [-1, -1]
        minPairDifference = float("inf")
        lastPrimeNumber = -float("inf")

        if len(primes) <= 1:
            return minPair

        startIdx = 0
        while (primes[startIdx] < left):
            startIdx+=1
            if (len(primes) == startIdx+1):
                break

        for i in range(startIdx, len(primes)):
            num = primes[i]
            difference = num - lastPrimeNumber
            if difference < minPairDifference:
                minPairDifference = difference
                minPair = [lastPrimeNumber, num]
            lastPrimeNumber = num
        return minPair
