package main

import (
  "fmt"
)

func main() {

  array := []string{
    "x",
    "y",
    "lala",
    "pizza",
  }

  arrLen := len(array)
  for  i := 0; i < arrLen; i++ {
    value := array[i]
    fmt.Println(value)
  }
}
