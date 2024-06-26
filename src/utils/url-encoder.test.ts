import test from "node:test";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { encoder, decoder } from "./url-encoder";
import dataStore from "./store";
import { EncodingTestConfig } from "src/types";

test("encode and decode urls", async (t) => {
  const store = dataStore.getStore();

  const urls: string[] = [];
  for (let i = 0; i < 10; i++) {
    urls.push(faker.internet.url());
  }

  assert.equal(urls.length, 10);

  const encodingConfigs: EncodingTestConfig[] = [];

  await t.test("encode urls", async (t) => {
    for await (const url of urls) {
      const key = encoder(url);

      assert.notEqual(key, "");
      assert.notEqual(key, null);
      assert.equal(key.length, 32);

      dataStore.set(key, url);
      encodingConfigs.push({ encodingKey: key, url });
    }

    assert.equal(store.size, 10);
  });

  await t.test("decode urls", async (t) => {
    for await (const encodingConfig of encodingConfigs) {
      assert.equal(encodingConfig.url, decoder(encodingConfig.encodingKey));
    }
  });
});
