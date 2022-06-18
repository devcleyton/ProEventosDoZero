using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contexto;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Persistence
{
    public class EventoPersist : IEventosPersist
    {
        private readonly ProEventosContext _context;
        public EventoPersist(ProEventosContext context)
        {
            _context = context;
           // _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(evento => evento.Lotes)
                .Include(evento => evento.RedesSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(eventos => eventos.PalestrantesEventos)
                    .ThenInclude(palestrantes => palestrantes.Palestrante);
            }

            query = query.OrderBy(eventos => eventos.Id)
                .Where(evento => evento.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(evento => evento.Lotes)
                .Include(evento => evento.RedesSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(eventos => eventos.PalestrantesEventos)
                    .ThenInclude(palestrantes => palestrantes.Palestrante);
            }

            query = query.OrderBy(eventos => eventos.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Evento> GetAllEventoByIdAsync(int eventoId, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
                 .Include(evento => evento.Lotes)
                 .Include(evento => evento.RedesSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(eventos => eventos.PalestrantesEventos)
                    .ThenInclude(palestrantesEventos => palestrantesEventos.Palestrante);
            }

            query = query.OrderBy(eventos => eventos.Id)
                .Where(evento => evento.Id == eventoId);

            return await query.FirstOrDefaultAsync();
        }
    }
}