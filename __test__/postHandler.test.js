import { handlePost } from "../src/client/js/postHandler";

describe("Testing the handlePost function", () => {
  test("The handlePost function should be defined", async () => {
    await expect(handlePost).toBeDefined();
  });
});
