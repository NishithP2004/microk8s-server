const express = require("express")
require("dotenv").config()
const { execSync } = require("node:child_process")
const ngrok = require("ngrok")
const fs = require("node:fs")

const script = fs.readFileSync("./bash_script.sh", "utf-8")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/join", (req, res) => {
    try {
        const str = execSync("microk8s add-node", { encoding: "utf-8" })
        const join_cmd = str.substring(str.indexOf("microk8s"), str.indexOf("Use")).split(" ").slice(0, 3).join(" ").trim() + " --worker";

        res.set("Content-Type", "text/plain")
        res.status(201).send(script.replaceAll("{{ join_cmd }}", join_cmd))
    } catch(err) {
        console.error("Error executing `microk8s add-node` command:", err.message);
        res.status(500).send("Error executing `microk8s add-node` command")
    }
})

app.listen(PORT, async () => {
    console.log(`Listening on port: ${PORT}`)
    const url = await ngrok.connect({
        proto: "http",
        addr: PORT
    })

    console.log("Ngrok URL:", url)
})