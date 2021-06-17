package main

import (
  "encoding/json"
  "fmt"
)

type message map[string]interface{}


func main() {

  message := &message{
    "action": "block",
    "arguments": map[string]interface{}{
      "ip": "1.1.1.1",
    },
  }
  b, _ := json.Marshal(message)
  fmt.Println(string(b) + "\n")
}
