package main

import (
	"math/rand"
	"net"
	"time"
)

func random(min int, max int) int {
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(max-min) + min
}

func main() {
	var localaddr net.TCPAddr
	var remoteaddr net.TCPAddr

	localaddr.IP = net.ParseIP("localhost")
	localaddr.Port = random(4000, 7000)
	remoteaddr.IP = net.ParseIP("localhost")
	remoteaddr.Port = 6001

	// Connect to the detector
	connection, _ := net.DialTCP("tcp", &localaddr, &remoteaddr)

	msg := ("128.0.1.1" + string('\n'))

	_, _ = connection.Write([]byte(msg))

}
