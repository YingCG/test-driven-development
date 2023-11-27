# this is calculator
# Add fucntion: put two number, a & b, --> a + b 
# Minus fucntion: put two number, a & b, --> a - b 
# Multiply fucntion: put two number, a & b, --> a * b 
# Devide fucntion: put two number, a & b, --> a / b 

import calculator
import unittest


class TestCalculator(unittest.TestCase):
    
    def test_add(self):
        result = calculator.add(10, 5)
        self.assertEqual(result, 15)
        
    def test_minus(self):
        result = calculator.minus(10, 5)
        self.assertEqual(result, 5)
        
    def test_multiply(self):
        result = calculator.multiply(10, 5)
        self.assertEqual(result, 50)
        
    def test_divide(self):
        result = calculator.divide(10, 5)
        self.assertEqual(result, 2)
    
if __name__ == '__main__':
    unittest.main()
