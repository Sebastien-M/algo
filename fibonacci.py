target = 20
index = 0


def fibo(num):
    if num <= 1:
        return num
    else:
        return fibo(num - 1) + fibo(num - 2)


while index < target:
    print fibo(index)
    index += 1
