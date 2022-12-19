import getDisplayName from "./getDisplayName";

describe("getDisplayName", () => {
  describe("given no specific city", () => {
    it("returns a '?' in [] if no city specified to the user", () => {
      expect(getDisplayName("Jane", "Doe")).toBe("[?] Jane Doe");
    });
  });

  describe("given a city name", () => {
    it("returns the city name in [] if a city is specified to the user", () => {
      expect(getDisplayName("John", "Doe", "Paris")).toBe("[Paris] John Doe");
    });
  });

  describe("given a student in workstudy", () => {
    it("returns adds '- WnS' after fullname", () => {
      expect(getDisplayName("Jane", "Doe")).toBe("[?] Jane Doe");
    });
  });

  describe("given a student in any curriculum", () => {
    it("returns city and fullname not followed by '- WnS'", () => {
      expect(getDisplayName("Jane", "Doe")).toBe("[?] Jane Doe");
    });
  });
});
