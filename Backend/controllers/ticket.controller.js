const Ticket = require('../models/ticket');
const Espectador = require('../models/espectador');
const ticketCtrl = {}

ticketCtrl.createTicket = async (req, res) => 
    {
        var ticket = new Ticket(req.body);
        try 
        {
            await ticket.save();
            res.json
            ({
                'status': '1',
                'msg': 'Ticket guardado.'
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

ticketCtrl.getTickets = async (req, res) => 
{
    try
    {
        const tickets = await Ticket.find().populate('espectador');
        res.json(tickets);
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

ticketCtrl.getTicket = async (req, res) => 
{
    var ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.status(200).json(ticket);
}

ticketCtrl.deleteTicket = async (req, res) => 
    {
        try 
        {
            await Ticket.deleteOne({ _id: req.params.id });
            res.json
            ({
                status: '1',
                msg: 'Ticket removed'
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

ticketCtrl.editTicket = async (req, res) => 
{
    const vticket = new Ticket(req.body);
    try 
    {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        res.json
        ({
            'status': '1',
            'msg': 'Ticket updated'
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

ticketCtrl.getEspectadoresPorCategoria = async (req, res) => 
    {
        try 
        {
            const tickets = await Ticket.find({ categoriaEspectador: req.params.categoria }).populate('espectador');
            res.json(tickets);
        } 
        catch (error) 
        {
            res.status(400).json
            ({ 
                status: '0', 
                msg: 'Error procesando operación.' 
            });
        }
        
    }

module.exports = ticketCtrl;