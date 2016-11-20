from selenium import webdriver


def get_driver():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--incognito')
    return webdriver.Chrome(chrome_options=chrome_options)
