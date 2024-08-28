actor SimulatedData {
    public func getLineChartData() : async [Record { name : Text; value : Nat }] {
      return [
        { name = "Ian"; value = 100 };
        { name = "Feb"; value = 200 };
        { name = "Mar"; value = 150 };
        // ... adăugați mai multe date
      ];
    }
  
    public func getBarChartData() : async [Record { name : Text; value : Nat }] {
      return [
        { name = "Produs A"; value = 100 };
        { name = "Produs B"; value = 200 };
        { name = "Produs C"; value = 150 };
        // ... adăugați mai multe date
      ];
    }
  };
  