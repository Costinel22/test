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
    let index = Array.findIndex<Product>(products, func (p) { p.id == id });
    switch (index) {
      case (?i) {
        products[i].quantity := quantity;
        return ?products[i];
      };
      case null {
        return null;
      };
    };
  };

  public func deleteProduct(id: Nat) : async ?Product {
    let index = Array.findIndex<Product>(products, func (p) { p.id == id });
    switch (index) {
      case (?i) {
        let deletedProduct = products[i];
        products := Array.filter<Product>(products, func (p) { p.id != id });
        return ?deletedProduct;
      };
      case null {
        return null;
      };
    };
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
};
