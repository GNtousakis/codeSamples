package main

import (
	"bufio"
	"log"
	"net"
)

func main() {
	listener, err := net.Listen("tcp", "127.0.0.1:6001")
	if err != nil {
		log.Fatal(err)
	}
	defer listener.Close()

	for {
		c, err := listener.Accept()
		if err != nil {
			log.Println(err)
			return
		}
		reader := bufio.NewReader(c)
		for {
			netData, err := reader.ReadString('\n')
			if err != nil {
				log.Println(err)
				break
			}

			netIP := string(netData)
			log.Println("Received IP from ", c.RemoteAddr().String(), ": ", netIP)

		}
	}

}
