from unittest import TestCase

import conf
import pages


class DynamicLoading2(TestCase):
    def setUp(self):
        self.page = pages.DynLoadingPage(conf.get_driver())

    def test_finds_element_after_clicking_start(self):
        self.page.go().click_start()
        self.assertIn("Hello World!", self.page.get_helloworld_text())

    def tearDown(self):
        self.page.__exit__()
