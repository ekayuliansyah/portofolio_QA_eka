from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

from openpyxl import load_workbook
import time

wb = load_workbook(filename=R"C:\Users\\User\\Documents\\Selenium\\AA.xlsx")

sheetRange = wb['Sheet1']
driver = webdriver.Chrome()
driver.get("https://google.com")
driver.maximize_window()
driver.implicitly_wait(10)

##i=2
#while i <= len(sheetRange['A']):
 #                       NomorPOD = sheetRange['C'+str(i)].value
   #                     NamaPenerima = sheetRange['D'+str(i)].value
  #                      StatusPOD = sheetRange['E'+str(i)].value
      #                  HubunganPenerima = sheetRange['F'+str(i)].value
                        