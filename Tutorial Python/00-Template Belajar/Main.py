data_integer = 1
print("data : ", data_integer)
print("- bertipe: ", type(data_integer))
#data float
data_float = 2.9
print("data : ", data_float)
print("- bertipe: ", type(data_float))
#tipe data string
data_string = "Pecandu Narkoba Sintetis"
print("data : ", data_string)
print("- bertipe: ", type(data_string))
#Tipe data boolean ( true/false)
data_bool = True
print("data : ", data_bool)
print("- bertipe: ", type(data_bool))

##Tipe data khusus
#bilangan complex
data_complex = complex(7,3)
print("data : ", data_complex)
print("- bertipe: ", type(data_complex))
#Tipe data menggunakan bashas C

from ctypes import c_double, c_char
data_c_double = c_double(18.19)
print("data : ", data_c_double)
print("- bertipe: ", type(data_c_double))

