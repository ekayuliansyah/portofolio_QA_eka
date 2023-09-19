#Operasi logika dan boolean.py
#NOT// OR // XOR

#NOT
print('====NOT===')
a=False
c=not a
print('data a=', a)
print('--------------NOT')
print('data c=',c)


#OR (JIKA SALAH SATU TRUE MAKA HASILNYA TRUE)
print('====ORTF===')
a=True
b=False
c= a or b
print(a,'OR',b,'=',c)

print('====ORFT===')
a=False
b=True
c= a or b
print(a,'OR',b,'=',c)

print('====ORTT===')
a=True
b=True
c= a or b
print(a,'OR',b,'=',c)

print('====ORFF===')
a=False
b=False
c= a or b
print(a,'OR',b,'=',c)

#AND
print('====ANDTF===')
a=True
b=False
c= a and b
print(a,'AND',b,'=',c)

print('====ANDFT===')
a=False
b=True
c= a and b
print(a,'AND',b,'=',c)

print('====ANDTT===')
a=True
b=True
c= a and b
print(a,'AND',b,'=',c)

print('====ANDFF===')
a=False
b=False
c= a and b
print(a,'AND',b,'=',c)

