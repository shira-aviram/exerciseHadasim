using System;

class Program
{
    static void Main(string[] args)
    {
        while (true)
        {
            Console.WriteLine("Please choose an option:");
            Console.WriteLine("1. Rectangular tower");
            Console.WriteLine("2. Triangular tower");
            Console.WriteLine("3. Exit");

            int choice = int.Parse(Console.ReadLine());

            if (choice == 1)
            {
                Console.Write("Enter the height of the tower: ");
                int height = int.Parse(Console.ReadLine());
                Console.Write("Enter the width of the tower: ");
                int width = int.Parse(Console.ReadLine());

                if (height == width)
                {
                    Console.WriteLine("The tower is a square.");
                    Console.WriteLine("Area: " + (height * width));
                }
                else if (Math.Abs(height-width) > 5)
                {
                    Console.WriteLine("The tower is a rectangle.");
                    Console.WriteLine("Area: " + (height * width));
                }
                else
                {
                    Console.WriteLine("The tower is a rectangle.");
                    Console.WriteLine("Perimeter: " + (2 * (height + width)));
                }
            }
            else if (choice == 2)
            {
                Console.Write("Enter the height of the tower: ");
                int height = int.Parse(Console.ReadLine());
                Console.Write("Enter the width of the tower: ");
                int width = int.Parse(Console.ReadLine());

                 Console.WriteLine("Please choose an option:");
                 Console.WriteLine("1. Calculate perimeter");
                 Console.WriteLine("2. Print triangle");

                    int triangleChoice = int.Parse(Console.ReadLine());

                    if (triangleChoice == 1)
                    {
                        int perimeter = (height * width)/2;
                        Console.WriteLine("Perimeter: " + perimeter);
                    }
                    else if (triangleChoice == 2)
                    {
                    if (width % 2 == 0 || width > 2 * height)
                    {
                        Console.WriteLine("The triangle cannot be printed.");
                    }
                    else { printTriangle(height, width); }
                    }
                    else
                    {
                        Console.WriteLine("Invalid choice.");
                    }
                
            }
            else if (choice == 3)
            {
                break;
            }
            else
            {
                Console.WriteLine("Invalid choice.");
            }
        }
    }
    public static void printTriangle(int height,int width)
    {
       
        int asterisks = 1;
        int spaces = (width - asterisks) / 2;
        int op = width / 2 - 1;//מספר האופציות לכוכביות
        int h = (height - 2) / op;//מספר החזרות
        int s = (height - 2) % op;
        string row = new string(' ', spaces);
        row += new string('*', asterisks);
        Console.WriteLine(row);
        for (int i = 0; i < op; i++)
        {
            asterisks += 2;
            if (spaces > 0)
            { spaces -= 1; }
            for(int j=0; j < (h+s); j++)
            {
            row = new string(' ', spaces);
            row += new string('*', asterisks);
            Console.WriteLine(row);
            }
            s = 0;
            
        }
        row = new string('*', asterisks+2);
        Console.WriteLine(row);

    }
}