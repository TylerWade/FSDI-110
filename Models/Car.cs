namespace PROJECT.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        public int HP { get; set; }//HrsPrs
        public string RentPrice { get; set; }//Daily rate
        public string Picture { get; set; }
        public int Passengers { get; set; }
        public int GasMileage { get; set; }//MPG
        public int CargoSpace { get; set; }// cubic ft
        public string Description { get; set; }

    }
}