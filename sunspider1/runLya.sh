

for t in 3d-morph 3d-raytrace bitops-bitwise-and crypto-aes crypto-md5; do
  echo "$t no-with" >> time.txt
  ((time (lya $t.js > /dev/null)) | grep real) 2>> time.txt
done
