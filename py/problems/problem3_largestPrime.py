# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
# The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.


def largestPrime():
    target = 600851475143
    primeNumber = 1
    prevPrimeNumber = 1

    while True:
        prevPrimeNumber = primeNumber
        for x in range(2, target):
            if target % x == 0:
                primeNumber = x
                break
        print("-------------------------------")
        print("primeNumber", primeNumber)
        print("prevPrimeNumber", prevPrimeNumber)
        print("target", target)
        if target % primeNumber == 0:
            target = target // primeNumber
        if prevPrimeNumber == primeNumber:
            break

    print("Result is: ", target)
