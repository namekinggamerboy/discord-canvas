const Greeting = require("./Base");
const fetch = require("node-fetch");
module.exports = class Post extends Greeting {
    constructor(client){
        super();
        if (!this.token) return console.log("Invalid token provided!");
    if (!this.client)
      return console.log("Make sure you provided your bot's instance");
    const headers = {
      "Content-Type": "application/json",
      authorization: `${this.token}`
    };
    if (this.client.guilds.cache !== undefined) {
      const body = {
        server_count: this.client.guilds.cache.size
      };
      const response = await fetch(`${url}/${this.client.user.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
      const jsonResponse = await response.json();
      if (jsonResponse.success == true)
        return console.log("Server count posted!");
      else return console.log("Error while posting server count");
    } else if (this.client.guilds.cache == undefined) {
      const body = {
        server_count: this.client.guilds.size
      };
      const response = await fetch(`${url}/${this.client.user.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
      const jsonResponse = await response.json();
      if (jsonResponse.success == true)
        return console.log("Server count posted!");
      else return console.log("Error while posting server count");
    } else return console.log("Make sure you provided your bot's instance");
  }
    }
};
