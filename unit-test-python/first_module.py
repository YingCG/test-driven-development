def enterNumber():
    num = int(input("enter a number"))
    print(num)

def main():
    print("First Module's Main method!")
    result = enterNumber()
    print(result)
    
if __name__ == "__main__":
    main()