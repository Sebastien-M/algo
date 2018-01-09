inp = raw_input("text : ")


def str_reverse(text):
    new_str = []
    i = len(text) - 1
    while i >= 0:
        new_str.append(text[i])
        i -= 1
    new_str = ''.join(new_str)
    return new_str


def compare(string):
    i = 0

    while i < len(string):
        k = len(string) - 1
        while k >= 0:
            if k > 0:
                if len(string[i:-k]) == 1:
                    pass
                elif not string[i:-k]:
                    pass
                elif string[i:-k] == str_reverse(string[i:-k]):
                    print "palindrome: {}".format(string[i:-k])
                # print string[i:-k]
            else:
                if len(string[i:]) == 1:
                    pass
                elif not string[i:]:
                    pass
                elif string[i:] == str_reverse(string[i:]):
                    print "palindrome: {}".format(string[i:])
                # print string[i:]
            k -= 1
        i += 1


compare(inp)
