import Nat "mo:base/Nat";
import Array "mo:base/Array";

actor TransportManagement {
  stable var transportHistory : [Transport] = [];
  stable var realTimeData : [RealTimeData] = [];

  type Transport = {
    id: Nat;
    startTime: Text;
    endTime: Text;
    issues: Text;
  };

  type RealTimeData = {
    vehicleId: Nat;
    location: Text;
    estimatedArrivalTime: Text;
  };

  public query func getTransportHistory() : async [Transport] {
    return transportHistory;
  };

  // public func addTransportHistory(startTime: Text, endTime: Text, issues: Text) : async Transport {
  //   let newTransport = {
  //     id = Nat(transportHistory.size() + 1);
  //     startTime = startTime;
  //     endTime = endTime;
  //     issues = issues;
  //   };
  //   transportHistory := Array.append(transportHistory, [newTransport]);
  //   return newTransport;
  // };

  public query func getRealTimeData() : async [RealTimeData] {
    return realTimeData;
  };

  // public func addRealTimeData(vehicleId: Nat, location: Text, estimatedArrivalTime: Text) : async RealTimeData {
  //   let newData = {
  //     vehicleId = vehicleId;
  //     location = location;
  //     estimatedArrivalTime = estimatedArrivalTime;
  //   };
  //   realTimeData := Array.append(realTimeData, [newData]);
  //   return newData;
  // };
};
