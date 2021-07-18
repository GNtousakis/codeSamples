package main

import "net"

func main() {
	var localaddr net.TCPAddr
	var remoteaddr net.TCPAddr

	localaddr.IP = net.ParseIP("localhost")
	localaddr.Port = 6006
	remoteaddr.IP = net.ParseIP("localhost")
	remoteaddr.Port = 6001

	// Connect to the detector
	connection, _ := net.DialTCP("tcp", &localaddr, &remoteaddr)

	msg := ("128.0.1.1" + string('\n'))

	_, _ = connection.Write([]byte(msg))

}
