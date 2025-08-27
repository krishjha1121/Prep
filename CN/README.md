# <h1 align="center">Computer Network</h1>

### Auther: Anil Kumar
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
 <P align="center">
 <img src="image-4.png" alt="alt text" />
 </P>

* It also define the type of transmission media.
* The physical layer data consists of a stream of
bits (sequence of 0s and 1s) with no interpretation(explanation).
* **Data Rate**: The number of bits transmitted per second is also specified
by the physical layer.
* Bit synchronization at the physical layer ensures sender and receiver agree on timing so that each bit (0 or 1) is correctly recognized. Without it, bits would get misread, causing data corruption.
* It also defines the Line configuration, Physical topology,Transmission mode.

> ### Data Link Layer

* **Main Responsibility**: It makes 
physical layer appear error-free to the network layer.

<P align="center">
 <img src="image-5.png" alt="alt text" />
 </P>


| Feature              | Hop-to-Hop Delivery                          | End-to-End Delivery                        |
|-----------------------|----------------------------------------------|--------------------------------------------|
| **OSI Layer**        | Data Link Layer                              | Network Layer                              |
| **Scope**            | Delivery from one node(router,switch..) to the next (one link) | Delivery from source device to destination device |
| **Responsibility**   | Ensures a frame is delivered to the next hop | Ensures a packet is delivered across the entire path |
| **Unit of Data**     | Frame                                        | Packet                                     |
| **Reliability**      | Checks errors at each link (e.g., CRC)       | Ensures packet reaches the correct destination |
| **Example**          | PC → Switch, Switch → Router                 | Client → Web Server across the Internet    |

> Why Both Hop-to-Hop and End-to-End Delivery are Needed?
> * We need both because hop-to-hop checks each step of the journey, while end-to-end makes sure the whole message reaches the destination. Together, they keep communication reliable and complete.


* **Framing**: The data link layer divides the stream of bits received from 
the network layer into manageable data units called frames.

* **Flow control**: If the rate at which the data are absorbed by the receiver is 
less than the rate at which data are produced in the sender, the data link 
layer imposes a flow control mechanism to avoid overloading of receiver. 

 * A trailer is added to the end of frame for error control.
 * **Access control**: When two or more devices are connected to the same link, 
data link layer protocols determine which device has control over the link at 
any given time.


> ### Network Layer
 * **MainResponsibility**: The network is responsible for the source-to
destination delivery of packet, possibly across multiple networks 
(links).


<P align="center">
 <img src="image-6.png" alt="alt text" />
 </P>

* **Logical Addressing**: If packet passes the network boundary, we need another addressing system to help 
distinguish the source and destination systems.

>Q: If the Data Link layer can deliver packets using MAC addresses, why do we need logical addressing (IP addresses) in the Network layer?
> * MAC addresses work only inside a local network (e.g., your laptop to a printer via a switch). But if you send data to a server in another country, the packet must cross many networks. Here, the IP address (logical address) guides routers to deliver data end-to-end, just like a full postal address across cities.