# <h1 align="center">Computer Network</h1>


---
- **Network:**
       A network is a set of devices connected by communication meduim.
- **Computer Network:** A computer network is a system that connects multiple devices—like computers, servers, or smartphones—so they can communicate, share data, and resources efficiently. It is the backbone of the digital world. Every time you send a WhatsApp message, stream Netflix, or make a UPI payment, you’re using a computer network.
        
- **Data Communications:**
    exchange of data between two 
devices via  transmission medium.

## Communication Protocol
<div style="display: flex; justify-content: center;"> 
  <div class="mermaid" style="display: flex; justify-content: center; width: 800px; height: 200px; font-size: 22px;">
    flowchart LR
      Sender[Sender] <------->| Communication Medium | Receiver[Receiver]
  </div>
</div>

<div style="background-color: #b15b21; padding: 10px; border-radius: 8px; font-weight: bold; width: fit-content; margin: 20px auto; text-align: center;">
  Both sender and receiver follow the protocol.
</div>

---
> ### Five Components of Data Communication
1. Message  
2. Sender  
3. Receiver  
4. Medium  
5. Protocol

- **Protocol:** A protocol is set of rules that govern data communications. It is like an agreement  between communicating devices.
Without a protocol, two devices may 
be connected but cannot communicate, just like a person cannot understand 
Assamese who speaks only Tamil

> ### During data communication, data flow is of 3 type:

<p align="center">
  <img src="image.png" alt="alt text" />
</p>
  
- type of connection between them : point to point, multipoint  

| Connection Type  | Description                                                                 | Real-life Example                |
|------------------|-----------------------------------------------------------------------------|----------------------------------|
| Point-to-Point   | Entire capacity of the link is reserved for transmission between two devices | Telephone call between two people |
| Multipoint       | More than two devices share a common link                                   | Classroom with one teacher and many students |






> ### Goals of the network
1. Performance  
2. Reliability  
3. Security  


---
>  # but how the network in real life look likes

*  **Physical Topology**: The term physical topology refers to the way in which a network is laid 
out physically.

<p align="center">
  <img src="image-1.png" alt="alt text" />
</p>
  

- **Mesh Topology**  
  Every device has a dedicated point-to-point link to every other device.

- **Star Topology**  
   - Each device has a dedicated point-to-point link only to a central controller, 
usually called a hub.
   - If a device wants to send data to 
another device, it sends the data to 
hub, which relays the data to another 
connected device.

- **Bus Topology**  
   - Bus topology uses multipoint connections.
   - Nodes are connected to the bus cable by drop lines (connection running 
between device and the main cable)and taps (connector).

- **Ring Topology**  
  Each device has a dedicated point-to
point with only two devices on either 
side of it.


---
> ### Categories of Networks
  ### Types of Networks

| Network Type | Description | Example |
|--------------|-------------|---------|
| Local Area Network (LAN) | Usually privately owned and links devices in a single office, building, or campus. | Our campus network |
| Metropolitan Area Network (MAN) | Covers a town or a city, designed for customers who need high-speed connectivity. | Cable TV network |
| Wide Area Network (WAN) | Provides long-distance transmission of data, image, audio, and video over large geographic areas (country, continent, or even the planet). | Internet backbone, telecom networks |
| Internet | When two or more networks (LAN, MAN, WAN) are connected, they become an internetwork or Internet. | The global Internet |


* **👉 Standard:** A set of agreed rules or guidelines made by organizations(like IEEE, ISO, ITU, ANSI) so that different devices and systems can work together


---

# <P align="center">OSI Model</P>

*  ISO is the organization. OSI is the model.
*  An ISO standard
 that covers all aspects ofnetwork communications is the Open Systems Interconnection
 model. 

* An **open system** lets two different computers talk to each other using common rules.
The **OSI model** explains how this communication works without changing their hardware or software.

> ### Layered Architecture of OSI Model
 <P align="center">
 <img src="image-3.png" alt="alt text" />
 </P>

  * Each layer in the sending device adds its own information
 to the message it receives from the layer just above it and passes the whole package to
 the layer just below it.

> ### Physical Layer

 * Main Responsibility: The physical layer is concerned with
transmitting raw bits over a communication medium/channel.

*
*
*
