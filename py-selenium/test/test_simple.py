from selenium import webdriver
from unittest import TestCase


class SimpleTests(TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_google_title(self):
        driver = self.driver
        driver.get("http://www.google.com")
        self.assertIn("Google", driver.title)

    def tearDown(self):
        self.driver.close()
