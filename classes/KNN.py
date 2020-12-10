# -*- coding: utf-8 -*-
"""
Created on Sun Nov  1 11:25:25 2020

@author: nazxa
"""

import numpy as np

def Find_Neighbors(filt, elem, n, k):
    mn = 0
    m = filt.index(elem)
    l = m-1
    r = m+1
    neig_mat = []
    while mn < k:
        if l < 0:
            for item in filt[r:(r+(k-mn))]:
                neig_mat.append(item)
            break
        elif r >= n:
            for item in filt[(l-(k-mn)):l]:
                neig_mat.append(item)
            break
        else:
            if abs(filt[l]-elem) <= abs(filt[r]-elem):
                neig_mat.append(filt[l])
                mn += 1
                l -= 1
            else:
                neig_mat.append(filt[r])
                mn += 1
                r += 1
    
    return neig_mat

def avg(new_arr, item, k):
    return (sum(new_arr)+item)/(k+1)

def printArray(arr, n, m):
    for i in range(n):
        for j in range(m):
            print(arr[i][j], end=' ')
        print()

def KNN_algo(arr, n, m, k, x):
    for i in range(x//2, n-(x//2)):
        for j in range(x//2, m-(x//2)):
            a = i-(x//2)
            b = i+(x//2)
            c = j-(x//2)
            d = j+(x//2)
            t = arr[a:b+1, c:d+1]
            #print(t)
            new_arr = [t[g][h] for g in range(x) for h in range(x)]
            #print(new_arr)
            new_arr = sorted(new_arr)
            #print(new_arr)
            neig_mat = Find_Neighbors(new_arr, arr[i][j], x*x, k)
            
            #print(neig_mat)
            average = avg(neig_mat, arr[i][j], k)
            #print(average)
            arr[i][j] = round(average)

if __name__ == '__main__':
    n = int(input())
    m = int(input())
    arr = []
    for i in range(n):          
        a =[] 
        a = list(map(int, input().split())) 
        arr.append(a)
    matrix = np.array(arr)

    x = int(input())
    k = int(input())

    KNN_algo(matrix, n, m, k, x)
    printArray(matrix, n, m)
