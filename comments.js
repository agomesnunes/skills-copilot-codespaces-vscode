// Create web server 
const express = require('express');

const app = express(); 
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { exec } = require('child_process');
const { spawn } = require('child_process');
const { Readable } = require('stream');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { createReadStream } = require('fs');
const { pipeline } = require('stream');
const { finished } = require('stream/promises');
const { Writable } = require('stream');
const { Transform } = require('stream');
const { PassThrough } = require('stream');
