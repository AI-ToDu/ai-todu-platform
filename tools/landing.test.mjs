import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
test("Landing languages cover every visible translation target", async () => {
  const html = await readFile(
    new URL("../index.html", import.meta.url),
    "utf8",
  );
  const locales = JSON.parse(
    await readFile(new URL("../translations.json", import.meta.url), "utf8"),
  );
  const keys = [...html.matchAll(/data-i18n(?:-aria|-alt)?="([^"]+)"/g)].map(
    (x) => x[1],
  );
  assert.deepEqual(
    keys.filter((k) => !(k in locales)),
    [],
  );
  assert.ok(keys.length > 25);
});
test("Landing anchors point to real sections and local assets exist", async () => {
  const html = await readFile(
    new URL("../index.html", import.meta.url),
    "utf8",
  );
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((x) => x[1]));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.has(id), id);
  for (const [, path] of html.matchAll(/(?:src|href)="((?:assets\/)[^"]+)"/g))
    await readFile(new URL("../" + path, import.meta.url));
});
