const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

/*
productoCtrl.getProducto = async (req, res) => 
{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}*/

transaccionCtrl.createTransaccion = async (req, res) => 
    {
        var transaccion = new Transaccion(req.body);
        try 
        {
            await transaccion.save();
            res.json
            ({
                'status': '1',
                'msg': 'Transaccion guardado.'
            })
        } 
        catch (error) 
        {
            res.status(400).json
            ({
                'status': '0',
                'msg': 'Error procesando operacion.'
            })
        }
    }

transaccionCtrl.getTransacciones = async (req, res) => 
{
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccionByEmail = async (req, res) => 
    {
        try
        {
            var transacciones = await Transaccion.find({ emailCliente: req.params.email });
            res.json(transacciones);
        }
        catch (error)
        {
            res.status(400).json
            ({
                'status': '0',
                'msg': 'Error procesando operacion.'
            })
        }
        
    }

transaccionCtrl.getTransaccionesByDivisa = async (req, res) => 
    {
        try
        {
            const { monedaOrigen, monedaDestino } = req.params;
            var transacciones = await Transaccion.find({ monedaOrigen, monedaDestino });
            res.json(transacciones);
        }
        catch (error)
        {
            res.status(400).json
            ({
                'status': '0',
                'msg': 'Error procesando operacion.'
            })
        }
        
    }

module.exports = transaccionCtrl;