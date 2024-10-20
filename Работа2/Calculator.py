

class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, number1, number2):
        return number1 + number2
    
    def subtract(self, number1, number2):
        return number1 - number2
    
    def multiply(self, number1, number2):
        return number1 * number2
    
    def divide(self, number1, number2):
        return number1 / number2
    
    def reset(self):
        self.result = 0

if __name__ == "__main__":
    calc = Calculator()