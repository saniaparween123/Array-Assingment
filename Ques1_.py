arr=[1,2,2,1,3,6,4,5,6]
dub=" "
for i in arr:
    c=0
    for j in arr:
        if(j==i):
            c+=1
        
    if c>1:
        if str(i) not in dub :
            dub+=str(i)+" "
        
print(dub)