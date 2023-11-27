const request = require("supertest");

const server = require("./server");

test("GET /about return correct response", (done) => {
  request(server)
    .get("/about")
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      console.log(res);
      expect(res.text).toMatch("love fruits");
      done();
    });
});

test("GET /fruits/:id return correct fruit", (done) => {
  const fruitId = 5;

  request(server)
    .get(`/fruits/${fruitId}`)
    .expect(200)
    .end((err, res) => {
      const expectedId = fruitId;
      expect(res.body.id).toBe(expectedId);
      done();
    });
});

test("POST /favFruit redirects to fruits details", (done) => {
  request(server)
    .post("/favFruit")
    .send({ fruitName: "Broccoli head" })
    .expect(302)
    .then((res) => {
      expect(res.header.location).toBe("/fruits/2");
    });
  done();
});
