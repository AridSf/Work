import unittest

from Calculator import Calculator

class TestCalculator(unittest.TestCase):

    # Создание рабочей области из класса
    def setUp(self) -> None:
        self.calculator = Calculator()
    
    # Проверка метода add на соответсвие значение
    def test_add(self):
        self.assertEqual(self.calculator.add(1,2), 3)
    
    # Проверка методва subtract на соответсвие значение
    def test_subtract(self):
        self.assertEqual(self.calculator.subtract(5, 4), 1)
    
    # Проверка методва multiply на соответсвие значение
    def test_multiply(self):
        self.assertEqual(self.calculator.multiply(5, 5.5), 25)
    
    # Проверка методва divide на соответсвие значение
    def test_divide(self):
        self.assertEqual(self.calculator.divide(9, 3.3), 9)


if __name__ == "__main__":
    unittest.main()