import Nat "mo:base/Nat";
import Array "mo:base/Array";

actor Management {
  stable var transports : [Transport] = [];
  stable var resources : [Resource] = [];

  type Transport = {
    id: Nat;
    name: Text;
    status: Text;
  };

  type Resource = {
    id: Nat;
    name: Text;
    allocation: Text;
  };

  public query func getTransports() : async [Transport] {
    return transports;
  };

  public func addTransport(name: Text, status: Text) : async Transport {
    let newTransport = {
      id = Nat(transports.size() + 1);
      name = name;
      status = status;
    };
    transports := Array.append(transports, [newTransport]);
    return newTransport;
  };

  public query func getResources() : async [Resource] {
    return resources;
  };

  public func addResource(name: Text, allocation: Text) : async Resource {
    let newResource = {
      id = Nat(resources.size() + 1);
      name = name;
      allocation = allocation;
    };
    resources := Array.append(resources, [newResource]);
    return newResource;
  };
};
