import argparse
import json

def make_json():
    
    obj = {
            "object": 'x',
            "test": 'pizza'
        }
    obj_send = json.dumps(obj)
    print(obj_send)
    return 'lala'

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Test input")
    parser.add_argument('-i','--inputstring', help='Input commands in JSON format',required=True)
    
    # Parse the arguments
    args = parser.parse_args()
    raw_data = args.inputstring

    # Parse the json data 
    data = json.loads(raw_data)
    print(data['action'])
    print(str(int(data['argument']['best'])) + 'hey')
    
    data['argument']['malicious_ip'] = '1.1.1.1'
    print(data)
    lala = make_json()
    print(lala)
