from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


class DynLoadingPage:
    def __init__(self, driver):
        self._driver = driver

    def go(self):
        self._driver.get("https://the-internet.herokuapp.com/dynamic_loading/2")
        return self

    def click_start(self):
        self._driver.find_element_by_css_selector('#start > button').click()
        return self

    def get_helloworld_text(self):
        return self._get_helloworld_element().text

    def _get_helloworld_element(self):
        wait = WebDriverWait(self._driver, 10)
        return wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, '#finish > h4')))

    def __exit__(self):
        self._driver.close()
