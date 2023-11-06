import express from 'express';
import cors from 'cors';
import { convBinarioParaDecimal, convDecimalParaBinario } from './conversor.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/binario', (req, res) => {
    const { binario } = req.body;
    const decimal = convBinarioParaDecimal(binario);
    res.json({ decimal: decimal });
});

app.post('/decimal', (req, res) => {
    const { decimal } = req.body;
    const binario = convDecimalParaBinario(decimal);
    res.json({ binario: binario });
});

app.listen(5000, () => {
    console.log("Servidor está rodando no endereço local: http://localhost:5000");
});
