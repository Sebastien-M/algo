s = "lalopallalali"
p = "lala"


def indexof(sentence, pattern):
    i = 0
    while i + 1 != len(sentence):
        j = 0
        while pattern[j] == sentence[i + j - 1]:
            if j + 1 == len(pattern):
                return i
            j += 1
        i += 1
    return None


print indexof(s, p)
