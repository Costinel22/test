import Nat "mo:base/Nat";
import Array "mo:base/Array";

actor ProductManagement {
  stable var products : [Product] = [];
  stable var damageReports : [DamageReport] = [];

  type Product = {
    id: Nat;
    name: Text;
    quantity: Nat;
  };

  type DamageReport = {
    id: Nat;
    productId: Nat;
    quantity: Nat;
    reason: Text;
  };

  public query func getProducts() : async [Product] {
    return products;
  };

  public func addProduct(name: Text, quantity: Nat) : async Product {
    let newProduct = {
      id = Nat(products.size() + 1);
      name = name;
      quantity = quantity;
    };
    products := Array.append(products, [newProduct]);
    return newProduct;
  };

  public func updateProduct(id: Nat, quantity: Nat) : async ?Product {
    var updatedProduct : ?Product = null;
    products := Array.map<Product, Product>(products, func (p) {
      if (p.id == id) {
        updatedProduct := ?{ id = p.id; name = p.name; quantity = quantity };
        return { id = p.id; name = p.name; quantity = quantity };
      } else {
        return p;
      }
    });
    return updatedProduct;
  };

  public func deleteProduct(id: Nat) : async ?Product {
    var deletedProduct : ?Product = null;
    products := Array.filter<Product>(products, func (p) {
      if (p.id == id) {
        deletedProduct := ?p;
        return false;
      } else {
        return true;
      }
    });
    return deletedProduct;
  };

  public query func getDamageReports() : async [DamageReport] {
    return damageReports;
  };

  public func reportDamage(productId: Nat, quantity: Nat, reason: Text) : async DamageReport {
    let newReport = {
      id = Nat(damageReports.size() + 1);
      productId = productId;
      quantity = quantity;
      reason = reason;
    };
    damageReports := Array.append(damageReports, [newReport]);
    return newReport;
  };

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
