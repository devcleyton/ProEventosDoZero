using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[]{
                new Evento()
                    {
                    EventoID = 1,
                    Tema = "Angular 11 e .Net 5",
                    Local = "Planaltina",
                    Lote = "1 lote",
                    QuantidadeSuportada = 250,
                    DataEvento = DateTime.Now.AddDays(2).ToString(),
                    ImagemUrl = "foto.png"
                    },
                new Evento()
                    {
                    EventoID = 2,
                    Tema = "Crie sua WebApi com .Net",
                    Local = "Sobradinho",
                    Lote = "3 lote",
                    QuantidadeSuportada = 50,
                    DataEvento = DateTime.Now.AddDays(5).ToString(),
                    ImagemUrl = "foto2.png"
                    }
        };


        public EventoController()
        {
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoID == id);
        }


        [HttpPost]
        public string Post()
        {
            return "Post - Cleyton";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Put - Cleyton - id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Delete - Cleyton - id = {id}";
        }
    }
}

