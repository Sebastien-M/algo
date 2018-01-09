sentence = "Le chien marche vers sa niche et trouve une limace de chine nue pleine de malice qui lui fait du charme";
tableau = sentence.split();
temp = []
anagrams = []
i = 0
print(tableau)
print('\n')
for word in tableau:
    temp.append(sorted(word))
while i < len(temp):
    j = 0
    while j < len(temp):
        if (i == j):
            pass
        elif (temp[i] == temp[j]):
            tableau[i] = tableau[j]
            anagrams.append(temp[i])
        j += 1
    i += 1

print(tableau)