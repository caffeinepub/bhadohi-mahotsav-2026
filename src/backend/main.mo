import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Event = {
    id : Nat;
    title : Text;
    date : Time.Time;
    description : Text;
    category : Text;
    imageUrl : Text;
  };

  module Event {
    public func compare(e1 : Event, e2 : Event) : Order.Order {
      Text.compare(e1.title, e2.title);
    };
  };

  type StallBooking = {
    id : Nat;
    name : Text;
    email : Text;
    company : Text;
    stallType : Text;
    message : Text;
  };

  module StallBooking {
    public func compare(s1 : StallBooking, s2 : StallBooking) : Order.Order {
      Text.compare(s1.name, s2.name);
    };
  };

  type Exhibitor = {
    id : Nat;
    name : Text;
    company : Text;
    email : Text;
    productCategory : Text;
    description : Text;
  };

  module Exhibitor {
    public func compare(e1 : Exhibitor, e2 : Exhibitor) : Order.Order {
      Text.compare(e1.name, e2.name);
    };
  };

  let events = Map.empty<Nat, Event>();
  let stallBookings = Map.empty<Nat, StallBooking>();
  let newsletterSignups = Map.empty<Text, ()>();
  let exhibitors = Map.empty<Nat, Exhibitor>();

  var nextEventId = 1;
  var nextStallId = 1;
  var nextExhibitorId = 1;

  // Event APIs
  public shared ({ caller }) func addEvent(event : Event) : async Nat {
    let id = nextEventId;
    nextEventId += 1;
    let newEvent : Event = { event with id };
    events.add(id, newEvent);
    id;
  };

  public query ({ caller }) func getEvents() : async [Event] {
    events.values().toArray().sort();
  };

  public query ({ caller }) func getEvent(id : Nat) : async Event {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found") };
      case (?event) { event };
    };
  };

  // Stall Booking APIs
  public shared ({ caller }) func submitStallBooking(booking : StallBooking) : async Nat {
    let id = nextStallId;
    nextStallId += 1;
    let newBooking : StallBooking = { booking with id };
    stallBookings.add(id, newBooking);
    id;
  };

  public query ({ caller }) func getStallBookings() : async [StallBooking] {
    stallBookings.values().toArray().sort();
  };

  // Newsletter Signup
  public shared ({ caller }) func newsletterSignup(email : Text) : async () {
    newsletterSignups.add(email, ());
  };

  public query ({ caller }) func getNewsletterSignups() : async [Text] {
    newsletterSignups.keys().toArray();
  };

  // Exhibitor Registration
  public shared ({ caller }) func registerExhibitor(exhibitor : Exhibitor) : async Nat {
    let id = nextExhibitorId;
    nextExhibitorId += 1;
    let newExhibitor : Exhibitor = { exhibitor with id };
    exhibitors.add(id, newExhibitor);
    id;
  };

  public query ({ caller }) func getExhibitors() : async [Exhibitor] {
    exhibitors.values().toArray().sort();
  };
};
