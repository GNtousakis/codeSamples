package main

import (
	"fmt"

	"github.com/hpcloud/tail"
)

func run() {
	t, _ := tail.TailFile("tailme.txt", tail.Config{Follow: true})
	for line := range t.Lines {
		fmt.Println(line.Text)
	}
}
func main() {
	go run()
}
