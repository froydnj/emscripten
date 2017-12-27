[
 {
  "name": "emcc$defun$rootedFunc1",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$defun$rootedFunc2",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$defun$tempFunc",
  "reaches": []
 },
 {
  "name": "emcc$defun$useExportA",
  "reaches": [
   "emcc$export$expI3"
  ]
 },
 {
  "name": "emcc$defun$useExportB",
  "reaches": [
   "emcc$export$expI3"
  ]
 },
 {
  "name": "emcc$defun$useManySorted",
  "reaches": [
   "emcc$export$expI1",
   "emcc$export$expI2",
   "emcc$export$expI3",
   "emcc$export$expI4"
  ]
 },
 {
  "name": "emcc$defun$used",
  "reaches": []
 },
 {
  "name": "emcc$defun$usedFromDeep",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$defun$usedFromDeep2",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$defun$user",
  "reaches": [
   "emcc$defun$used"
  ]
 },
 {
  "name": "emcc$export$expD1",
  "export": "expD1",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$export$expD2",
  "export": "expD2",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$export$expD3",
  "export": "expD3",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$export$expD4",
  "export": "expD4",
  "reaches": []
 },
 {
  "name": "emcc$export$expI1",
  "export": "expI1",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$export$expI2",
  "export": "expI2",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$export$expI3",
  "export": "expI3",
  "reaches": [],
  "root": true
 },
 {
  "name": "emcc$export$expI4",
  "export": "expI4",
  "reaches": []
 },
 {
  "name": "emcc$import$rootedFunc1",
  "import": [
   "env",
   "rootedFunc1"
  ],
  "reaches": [
   "emcc$defun$rootedFunc1"
  ]
 },
 {
  "name": "emcc$import$rootedFunc2",
  "import": [
   "env",
   "rootedFunc2"
  ],
  "reaches": [
   "emcc$defun$rootedFunc2"
  ]
 },
 {
  "name": "emcc$import$tempFunc",
  "import": [
   "env",
   "tempFunc"
  ],
  "reaches": [
   "emcc$defun$tempFunc"
  ]
 },
 {
  "name": "emcc$import$tempNum",
  "import": [
   "env",
   "tempNum"
  ],
  "reaches": []
 },
 {
  "name": "emcc$import$useExportA",
  "import": [
   "env",
   "useExportA"
  ],
  "reaches": [
   "emcc$defun$useExportA"
  ]
 },
 {
  "name": "emcc$import$useExportB",
  "import": [
   "env",
   "useExportB"
  ],
  "reaches": [
   "emcc$defun$useExportB"
  ]
 },
 {
  "name": "emcc$import$useManySorted",
  "import": [
   "env",
   "useManySorted"
  ],
  "reaches": [
   "emcc$defun$useManySorted"
  ]
 },
 {
  "name": "emcc$import$used",
  "import": [
   "env",
   "used"
  ],
  "reaches": [
   "emcc$defun$used"
  ]
 },
 {
  "name": "emcc$import$user",
  "import": [
   "env",
   "user"
  ],
  "reaches": [
   "emcc$defun$user"
  ]
 }
]
