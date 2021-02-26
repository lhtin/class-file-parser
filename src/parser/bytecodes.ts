const OPERAND_TYPES = {
  unsigned1: 'u1',
  unsigned2: 'u2',
  unsigned4: 'u4',
  signed1: 's1',
  signed2: 's2',
  signed4: 's4',
  constant_index1: 'constant_index1',
  constant_index2: 'constant_index2',
  local_index1: 'local_index1',
  local_index2: 'local_index2',
  branch_offset2: 'branch_offset2',
  branch_offset4: 'branch_offset4',
}

const Constants = {
  0: { name: 'nop' },
  1: { name: 'aconst_null' },
  2: { name: 'iconst_m1' },
  3: { name: 'iconst_0' },
  4: { name: 'iconst_1' },
  5: { name: 'iconst_2' },
  6: { name: 'iconst_3' },
  7: { name: 'iconst_4' },
  8: { name: 'iconst_5' },
  9: { name: 'lconst_0' },
  10: { name: 'lconst_1' },
  11: { name: 'fconst_0' },
  12: { name: 'fconst_1' },
  13: { name: 'fconst_2' },
  14: { name: 'dconst_0' },
  15: { name: 'dconst_1' },
  16: { name: 'bipush', operands: [OPERAND_TYPES.signed1] },
  17: { name: 'sipush', operands: [OPERAND_TYPES.unsigned2] },
  18: { name: 'ldc', operands: [OPERAND_TYPES.constant_index1] },
  19: { name: 'ldc_w', operands: [OPERAND_TYPES.constant_index2] },
  20: { name: 'ldc2_w', operands: [OPERAND_TYPES.constant_index2] },
}
const Loads = {
  21: { name: 'iload', operands: [OPERAND_TYPES.local_index1] },
  22: { name: 'lload', operands: [OPERAND_TYPES.local_index1] },
  23: { name: 'fload', operands: [OPERAND_TYPES.local_index1] },
  24: { name: 'dload', operands: [OPERAND_TYPES.local_index1] },
  25: { name: 'aload', operands: [OPERAND_TYPES.local_index1] },
  26: { name: 'iload_0' },
  27: { name: 'iload_1' },
  28: { name: 'iload_2' },
  29: { name: 'iload_3' },
  30: { name: 'lload_0' },
  31: { name: 'lload_1' },
  32: { name: 'lload_2' },
  33: { name: 'lload_3' },
  34: { name: 'fload_0' },
  35: { name: 'fload_1' },
  36: { name: 'fload_2' },
  37: { name: 'fload_3' },
  38: { name: 'dload_0' },
  39: { name: 'dload_1' },
  40: { name: 'dload_2' },
  41: { name: 'dload_3' },
  42: { name: 'aload_0' },
  43: { name: 'aload_1' },
  44: { name: 'aload_2' },
  45: { name: 'aload_3' },
  46: { name: 'iaload' },
  47: { name: 'laload' },
  48: { name: 'faload' },
  49: { name: 'daload' },
  50: { name: 'aaload' },
  51: { name: 'baload' },
  52: { name: 'caload' },
  53: { name: 'saload' },
}

const Stores = {
  54: { name: 'istore', operands: [OPERAND_TYPES.local_index1] },
  55: { name: 'lstore', operands: [OPERAND_TYPES.local_index1] },
  56: { name: 'fstore', operands: [OPERAND_TYPES.local_index1] },
  57: { name: 'dstore', operands: [OPERAND_TYPES.local_index1] },
  58: { name: 'astore', operands: [OPERAND_TYPES.local_index1] },
  59: { name: 'istore_0' },
  60: { name: 'istore_1' },
  61: { name: 'istore_2' },
  62: { name: 'istore_3' },
  63: { name: 'lstore_0' },
  64: { name: 'lstore_1' },
  65: { name: 'lstore_2' },
  66: { name: 'lstore_3' },
  67: { name: 'fstore_0' },
  68: { name: 'fstore_1' },
  69: { name: 'fstore_2' },
  70: { name: 'fstore_3' },
  71: { name: 'dstore_0' },
  72: { name: 'dstore_1' },
  73: { name: 'dstore_2' },
  74: { name: 'dstore_3' },
  75: { name: 'astore_0' },
  76: { name: 'astore_1' },
  77: { name: 'astore_2' },
  78: { name: 'astore_3' },
  79: { name: 'iastore' },
  80: { name: 'lastore' },
  81: { name: 'fastore' },
  82: { name: 'dastore' },
  83: { name: 'aastore' },
  84: { name: 'bastore' },
  85: { name: 'castore' },
  86: { name: 'sastore' },
}
const Stack = {
  87: { name: 'pop' },
  88: { name: 'pop2' },
  89: { name: 'dup' },
  90: { name: 'dup_x1' },
  91: { name: 'dup_x2' },
  92: { name: 'dup2' },
  93: { name: 'dup2_x1' },
  94: { name: 'dup2_x2' },
  95: { name: 'swap' },
}
const Math = {
  96: { name: 'iadd' },
  97: { name: 'ladd' },
  98: { name: 'fadd' },
  99: { name: 'dadd' },
  100: { name: 'isub' },
  101: { name: 'lsub' },
  102: { name: 'fsub' },
  103: { name: 'dsub' },
  104: { name: 'imul' },
  105: { name: 'lmul' },
  106: { name: 'fmul' },
  107: { name: 'dmul' },
  108: { name: 'idiv' },
  109: { name: 'ldiv' },
  110: { name: 'fdiv' },
  111: { name: 'ddiv' },
  112: { name: 'irem' },
  113: { name: 'lrem' },
  114: { name: 'frem' },
  115: { name: 'drem' },
  116: { name: 'ineg' },
  117: { name: 'lneg' },
  118: { name: 'fneg' },
  119: { name: 'dneg' },
  120: { name: 'ishl' },
  121: { name: 'lshl' },
  122: { name: 'ishr' },
  123: { name: 'lshr' },
  124: { name: 'iushr' },
  125: { name: 'lushr' },
  126: { name: 'iand' },
  127: { name: 'land' },
  128: { name: 'ior' },
  129: { name: 'lor' },
  130: { name: 'ixor' },
  131: { name: 'lxor' },
  132: { name: 'iinc', operands: [OPERAND_TYPES.unsigned1, OPERAND_TYPES.signed1] },
}
const Conversions = {
  133: { name: 'i2l' },
  134: { name: 'i2f' },
  135: { name: 'i2d' },
  136: { name: 'l2i' },
  137: { name: 'l2f' },
  138: { name: 'l2d' },
  139: { name: 'f2i' },
  140: { name: 'f2l' },
  141: { name: 'f2d' },
  142: { name: 'd2i' },
  143: { name: 'd2l' },
  144: { name: 'd2f' },
  145: { name: 'i2b' },
  146: { name: 'i2c' },
  147: { name: 'i2s' },
}
const Comparisons = {
  148: { name: 'lcmp' },
  149: { name: 'fcmpl' },
  150: { name: 'fcmpg' },
  151: { name: 'dcmpl' },
  152: { name: 'dcmpg' },
  153: { name: 'ifeq', operands: [OPERAND_TYPES.branch_offset2] },
  154: { name: 'ifne', operands: [OPERAND_TYPES.branch_offset2] },
  155: { name: 'iflt', operands: [OPERAND_TYPES.branch_offset2] },
  156: { name: 'ifge', operands: [OPERAND_TYPES.branch_offset2] },
  157: { name: 'ifgt', operands: [OPERAND_TYPES.branch_offset2] },
  158: { name: 'ifle', operands: [OPERAND_TYPES.branch_offset2] },
  159: { name: 'if_icmpeq', operands: [OPERAND_TYPES.branch_offset2] },
  160: { name: 'if_icmpne', operands: [OPERAND_TYPES.branch_offset2] },
  161: { name: 'if_icmplt', operands: [OPERAND_TYPES.branch_offset2] },
  162: { name: 'if_icmpge', operands: [OPERAND_TYPES.branch_offset2] },
  163: { name: 'if_icmpgt', operands: [OPERAND_TYPES.branch_offset2] },
  164: { name: 'if_icmple', operands: [OPERAND_TYPES.branch_offset2] },
  165: { name: 'if_acmpeq', operands: [OPERAND_TYPES.branch_offset2] },
  166: { name: 'if_acmpne', operands: [OPERAND_TYPES.branch_offset2] },
}
const Control = {
  167: { name: 'goto', operands: [OPERAND_TYPES.branch_offset2] },
  168: { name: 'jsr', operands: [OPERAND_TYPES.branch_offset2] },
  169: { name: 'ret', operands: [OPERAND_TYPES.local_index1] },
  170: { name: 'tableswitch', padding: 4, operands: [OPERAND_TYPES.signed4, OPERAND_TYPES.signed4, OPERAND_TYPES.signed4, OPERAND_TYPES.signed4 /* ... jump offsets */] },
  171: { name: 'lookupswitch', padding: 4, operands: [OPERAND_TYPES.signed4, OPERAND_TYPES.signed4, OPERAND_TYPES.signed4, OPERAND_TYPES.signed4 /* n pairs */] },
  172: { name: 'ireturn' },
  173: { name: 'lreturn' },
  174: { name: 'freturn' },
  175: { name: 'dreturn' },
  176: { name: 'areturn' },
  177: { name: 'return' },
}
const References = {
  178: { name: 'getstatic', operands: [OPERAND_TYPES.constant_index2] },
  179: { name: 'putstatic', operands: [OPERAND_TYPES.constant_index2] },
  180: { name: 'getfield', operands: [OPERAND_TYPES.constant_index2] },
  181: { name: 'putfield', operands: [OPERAND_TYPES.constant_index2] },
  182: { name: 'invokevirtual', operands: [OPERAND_TYPES.constant_index2] },
  183: { name: 'invokespecial', operands: [OPERAND_TYPES.constant_index2] },
  184: { name: 'invokestatic', operands: [OPERAND_TYPES.constant_index2] },
  185: { name: 'invokeinterface', operands: [OPERAND_TYPES.constant_index2, OPERAND_TYPES.unsigned2]},
  186: { name: 'invokedynamic', operands: [OPERAND_TYPES.constant_index2, OPERAND_TYPES.unsigned2]},
  187: { name: 'new', operands: [OPERAND_TYPES.constant_index2] },
  188: { name: 'newarray', operands: [OPERAND_TYPES.unsigned1] },
  189: { name: 'anewarray', operands: [OPERAND_TYPES.constant_index2] },
  190: { name: 'arraylength' },
  191: { name: 'athrow' },
  192: { name: 'checkcast', operands: [OPERAND_TYPES.constant_index2] },
  193: { name: 'instanceof', operands: [OPERAND_TYPES.constant_index2] },
  194: { name: 'monitorenter' },
  195: { name: 'monitorexit' },
}
const Extended = {
  196: {
    name: 'wide',
    operands: [OPERAND_TYPES.unsigned1, OPERAND_TYPES.local_index2] || [
      OPERAND_TYPES.unsigned1 /* iinc */,
      OPERAND_TYPES.local_index2,
      OPERAND_TYPES.signed2,
    ],
  },
  197: {
    name: 'multianewarray',
    operands: [OPERAND_TYPES.constant_index2, OPERAND_TYPES.unsigned1],
  },
  198: { name: 'ifnull', operands: [OPERAND_TYPES.branch_offset2] },
  199: { name: 'ifnonnull', operands: [OPERAND_TYPES.branch_offset2] },
  200: { name: 'goto_w', operands: [OPERAND_TYPES.branch_offset4] },
  201: { name: 'jsr_w', operands: [OPERAND_TYPES.branch_offset4] },
}
const Reserved = {
  202: { name: 'breakpoint' },
  254: { name: 'impdep1' },
  255: { name: 'impdep2' },
}

const BYTE_CODES = {
  ...Constants,
  ...Loads,
  ...Stores,
  ...Stack,
  ...Math,
  ...Conversions,
  ...Comparisons,
  ...Control,
  ...References,
  ...Extended,
  ...Reserved,
}

export {
  OPERAND_TYPES,
  BYTE_CODES,
}
