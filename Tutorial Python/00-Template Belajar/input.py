#input data by user
data = input("Masukkan data = ")

print("data = ",data,"type = ",type(data))
#Jika kita ingin casting type data
integer = int(input("Masukkan angka = "))
angka = float(input("Masukkan angka = "))
print("data = ",integer,"type = ",type(integer))
print("data = ",angka,"type = ",type(angka))

#Untuk data bool sedikit ada penambahan
biner = bool(int(input("Masukkan perintah biner =")))
print("data =", biner,"type = ",type(biner))