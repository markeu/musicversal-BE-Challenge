import supertest from "supertest";

import { SetupServer } from "../../src/server";
import { URL, CONFIG } from "../../src/config/constants";

let app;
let server;
beforeAll(async () => {
  server = new SetupServer();
  await server.init();
  app = supertest(server.getApp());
});

afterAll(async () => await server.close());

describe("Functional tests", () => {
  describe("Assessment Challenge", () => {
    it("Should successfully create a compilation audion", async () => {
      const data = {
        name: "Uche",
        length: 50,
        parts: [
          { name: "Vocals", duration: 11 },
          { name: "Bass", duration: 3.3 },
          { name: "Drums", duration: 9.9 },
          { name: "Silence", duration: 8 },
          { name: "Hammond", duration: 3.3 },
          { name: "Silence", duration: 2 },
          { name: "Silence", duration: 2 },
          { name: "blaze", duration: 10 },
          { name: "Silence", duration: 2 },
          { name: "Silence", duration: 2 },
          { name: "Silence", duration: 2 },
          { name: "Silence", duration: 2 },
          { name: "Silence", duration: 2 },
        ],
      };

      const response = await app.post(`${URL.DEFAULT}${URL.SAVE}`).send(data);
      expect(response.status).toBe(200);

      await expect(response.body).toEqual("Compilation Successful");
    });

    it("Should get all sample audios", async () => {
      const response = await app.get(
        `${URL.DEFAULT}/${CONFIG.SAMPLE.SERVE_URL}`
      );
      expect(response.status).toBe(200);
    });

    it("Should get all sample tracks", async () => {
      const response = await app.get(
        `${URL.DEFAULT}/${CONFIG.TRACK.SERVE_URL}`
      );
      expect(response.status).toBe(200);
    });
  });
});
