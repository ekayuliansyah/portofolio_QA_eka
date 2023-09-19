#Casting tipe data
#Merubah dari satu tipe ke tipe yang lain
#tipe data int, float, str, bool

##INTEGER
print("integer dul")
data_int=9;
print("data = ", data_int, "type=", type(data_int))

data_float = float(data_int)
data_str   = str(data_int)
data_bool  = bool(data_int)#akan falsejika nilai integernya 0
print("data =", data_float, "type =", type(data_float))
print("data =", data_str, "type =", type(data_str))
print("data =", data_bool, "type =", type(data_bool))
##FLOAT
print("float dul")
data_float= 8.55;
print("data = ", data_float, "type=", type(data_float))

data_int = int(data_float)
data_str   = str(data_float)
data_bool  = bool(data_float)#akan falsejika nilai integernya 0
print("data =", data_int, "type =", type(data_int))
print("data =", data_str, "type =", type(data_str))
print("data =", data_bool, "type =", type(data_bool))
##BOOL
print("BOOL dul")
data_bool= False;
print("data = ", data_bool, "type=", type(data_bool))

data_int = int(data_bool)
data_str   = str(data_bool)
data_float  = float(data_bool)#akan falsejika nilai integernya 0
print("data =", data_int, "type =", type(data_int))
print("data =", data_str, "type =", type(data_str))
print("data =", data_float, "type =", type(data_float))