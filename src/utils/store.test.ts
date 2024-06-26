import test from "node:test";
import assert = require("node:assert");
import dataStore from "./store";

test("test data store", async (t) => {
  await t.test("returns empty store", (t) => {
    const store = dataStore.getStore();
    assert.notEqual(store, null);
    assert.equal(store.size, 0);
  });

  await t.test("adds item to store", (t) => {
    const store = dataStore.getStore();
    dataStore.set("hello", "world");

    assert.equal(store.has("hello"), true);
    assert.equal(dataStore.get("hello"), "world");
  });

  await t.test("removes item from store", (t) => {
    const store = dataStore.getStore();

    dataStore.del("hello");
    assert.equal(store.size, 0);
  });
});
