package main

import (
  "fmt"
  "strings"
)

func main() {
  var args []string = []string{ 
    "pizza",
  }
  var modArgs []string = append([]string{
		"-c",
		" \"cp /sys/class/net/eth0/address /home/net/dionaea_mac &&",
		"hostname -i > /home/net/dionaea_ip &&",
		"/opt/dionaea/bin/dionaea "},
		args...)
	modArgs = append(modArgs, []string{" && sleep infinity\""}...)
        	var stringArgs string = strings.Join(modArgs, " ")
fmt.Println(modArgs)
  fmt.Println(stringArgs)
}
