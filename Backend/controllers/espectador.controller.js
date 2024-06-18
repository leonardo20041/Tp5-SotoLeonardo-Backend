const Espectador = require('../models/espectador');
const espectadorCtrl = {}

espectadorCtrl.createEspectador = async (req, res) => 
    {
        var espectador = new Espectador(req.body);
        try 
        {
            await espectador.save();
            res.json
            ({
                'status': '1',
                'msg': 'Espectador guardado.'
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

espectadorCtrl.getEspectadores = async (req, res) => 
{
    var espectador = await Espectador.find();
    res.json(espectador);
}

espectadorCtrl.getEspectadorById = async (req, res) => 
    {
        const espectador = await Espectador.findById(req.params.id);
        res.json(espectador);                
    }

    espectadorCtrl.deleteEspectador = async (req, res) => 
        {
            try 
            {
                await Espectador.deleteOne({ _id: req.params.id });
                res.json
                ({
                    status: '1',
                    msg: 'Espectador removed'
                })
            } 
            catch (error) 
            {
                res.status(400).json
                ({
                    'status': '0',
                    'msg': 'Error procesando la operacion'
                })
            }
        }
        
module.exports = espectadorCtrl;