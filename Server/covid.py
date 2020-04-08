from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
import time
from bs4 import BeautifulSoup
from datetime import date, datetime
from selenium.webdriver.common.keys import Keys
from html5lib import html5parser

def main(url, driver):
    driver.get(url)
    timeout = 60
    try:
        element_present = EC.presence_of_element_located((By.ID, 'ember1049'))
        WebDriverWait(driver, timeout).until(element_present)
    except TimeoutException:
        print("Timed out waiting for page to load")
        return {
            'error':'page load needs more time :( \n  please try again'
        }
    finally:
        print("Page loaded")
    more_buttons = driver.find_elements_by_class_name("moreLink")
    for x in range(len(more_buttons)):
        if more_buttons[x].is_displayed():
            driver.execute_script("arguments[0].click();", more_buttons[x])
            time.sleep(1)
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'html.parser')
    total_confirmed = soup.find_all('text', attrs={'vector-effect':'non-scaling-stroke'})
    # <text vector-effect="non-scaling-stroke" style="fill: rgb(230, 0, 0); stroke-width: 2px; font-size: 160px; line-height: normal;">685,623</text>
    # for i in total_confirmed:
    #     #     print('---' , i)
    # print('--- Total confirmed ----', total_confirmed[1].text)
    # print('--- Total Recovered ----', total_confirmed[-1].text)
    # print('--- Total Death ----', total_confirmed[-3].text)
    confirmed = total_confirmed[1].text
    recovere = total_confirmed[-1].text
    death = total_confirmed[-3].text
    total_fig = []
    for item in  total_confirmed:
        total_fig.append(item.text)
    payload = []
    list_of_confirmed_country = soup.find_all('span', attrs={'class': 'flex-horizontal feature-list-item ember-view'})
    # print('---- now print left admin 1 panel ---')
    for data in list_of_confirmed_country[:]:
        item = data.text.strip()
        payload.append(str(item))
        # if(len(item.split()) == 2):
        #     print('-----', item)
    return {
        'confirmed': confirmed,
        'recovere': recovere,
        'death': death,
        'payload': payload,
        'totalFigure': total_fig
    }
    # print('final response', response)
    # print('----- now print confirmed Province/State/Dependency ---')
    # for data in list_of_confirmed_country[:]:
    #     item = data.text.strip()
    #     if (len(item.split()) > 2 and item.split()[1] == 'confirmed'):
    #         print('-----', item)
    #
    # print('----- now print death Province/State/Dependency ---')
    # for data in list_of_confirmed_country[:]:
    #     item = data.text.strip()
    #     if (len(item.split()) > 2 and item.split()[1] == 'deaths'):
    #         print('-----', item)
    #
    # print('----- now print Recovered Province/State/Dependency ---')
    # for data in list_of_confirmed_country[:]:
    #     item = data.text.strip()
    #     if (len(item.split()) > 2 and item.split()[1] == 'recovered'):
    #         print('-----', item)

    # print('--- list of confirmed country ---',list_of_confirmed_country[0])
    # driver.quit()
#
# options = webdriver.ChromeOptions()
# options.add_argument('--ignore-certificate-errors')
# options.add_argument('--incognito')
# options.add_argument('--headless')
# options.add_argument('--lang=en-us')
# options.add_argument('--log-level=3')
#
# driver = webdriver.Chrome("./chromedriver", chrome_options=options)
#
# url = "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
# main(url, driver)
