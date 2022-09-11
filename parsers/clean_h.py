import sys

before = open(sys.argv[1], 'r').read()

result = []
for line in before.split('\n'):
    # result.append(line.split('//')[0].strip())
    result.append(line)

f = '\n'.join(result)
if len(sys.argv) > 2:
    s = f.replace('*/', '/*').split('/*')[1::2]
else:
    s = f.replace('*/', '/*').split('/*')[::2]
result = []
for line in ''.join(s).split('\n'):
    if not line.strip():
        continue
    # result.append(line.strip())
    result.append(line)
open('out.h', 'w').write('\n'.join(result))
