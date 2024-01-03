class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        laserCount = 0
        lastDeviceCount = 0
        for row in bank:
            deviceCount = 0
            num = int(row, 2)
            power = 0
            while num > 0:
                toSubtract = num % pow(2, power)
                if not toSubtract == 0:
                    deviceCount += 1
                    num -= toSubtract
                power += 1
            if deviceCount > 0:
                laserCount += lastDeviceCount * deviceCount
                lastDeviceCount = deviceCount
        return laserCount
