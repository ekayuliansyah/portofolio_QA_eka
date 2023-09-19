#Konversi Temperatur
print("\nPROGRAM KONVERSI TEMPERATURE\n")

celcius = float(input('Masukkan suhu dalam celcius :'))
print("Suhu",celcius, "Celcius")

#Ubah ke Reeamur
reamur = (4/5)*celcius
print("Suhu Reamur :",reamur,"Reamur")

#Ubah ke fahrenheit
fahrenheit = (9/5)*celcius +32
print("Suhu Fahrenheit :",fahrenheit, "Fahrenheit")

#Ubah ke Kelvin
kelvin = celcius+273
print("Suhu Kelvin :",kelvin, "Kelvin")