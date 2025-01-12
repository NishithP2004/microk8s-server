# microk8s-server

## Project Description
This project sets up a server using Node.js and Express to manage a MicroK8s cluster. It includes a bash script to install and configure MicroK8s, and uses Ngrok to expose the server to the internet.

## Prerequisites
- Node.js and npm installed
- MicroK8s installed
- Ngrok installed

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/NishithP2004/microk8s-server.git
    cd microk8s-server
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Set up environment variables:
    Create a `.env` file in the root directory of the project and add the following:
    ```env
    PORT=3000
    ```

2. Run the server:
    ```sh
    node index.js
    ```

3. Use the bash script:
    The server provides an endpoint `/join` which returns a bash script to join a new node to the MicroK8s cluster. You can use this script as follows:
    ```sh
    curl http://<your-server-url>/join -o join_node.sh
    chmod +x join_node.sh
    ./join_node.sh
    ```

## Installing and Configuring Ngrok
1. Download and install Ngrok from the official website: https://ngrok.com/download
2. Connect your account using your auth token:
    ```sh
    ngrok authtoken <your-auth-token>
    ```
