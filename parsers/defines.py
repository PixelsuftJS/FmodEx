import sys


_input = open(sys.argv[1]).read().replace('f }', ' }').replace('{', '[').replace('}', ']').split('\n')


out = ''


for line in _input:
    if not line.startswith('#define'):
        continue
    _name = line.split(' ')[1]
    _value = ' '.join(line.split(' ')[2:])
    out += 'e.'
    out += _name.strip()
    out += ' = '
    out += _value.strip()
    out += ';\n'


print(out, end='')
