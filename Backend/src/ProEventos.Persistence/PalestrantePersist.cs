using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contexto;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Persistence
{
    public class PalestrantePersist : IPalestrantesPersist
    {
        private readonly ProEventosContext _context;
        public PalestrantePersist(ProEventosContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        
        public async Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                .Include(palestrantes => palestrantes.RedesSociais);

            if (includeEventos)
            {
                query = query
                    .Include(palestrantes => palestrantes.PalestrantesEventos)
                    .ThenInclude(palestrantesEventos => palestrantesEventos.Palestrante);
            }

            query = query.OrderBy(palestrantes => palestrantes.Id)
                .Where(palestrantes => palestrantes.Nome.ToLower().Contains(nome.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                .Include(palestrantes => palestrantes.RedesSociais);

            if (includeEventos)
            {
                query = query
                    .Include(palestrantes => palestrantes.PalestrantesEventos)
                    .ThenInclude(palestrantesEventos => palestrantesEventos.Evento);
            }

            query = query.OrderBy(palestrantes => palestrantes.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante> GetAllPalestranteByIdAsync(int palestranteId, bool includeEventos)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                .Include(palestrantes => palestrantes.RedesSociais);

            if (includeEventos)
            {
                query = query
                    .Include(palestrantes => palestrantes.PalestrantesEventos)
                    .ThenInclude(palestrantesEventos => palestrantesEventos.Palestrante);
            }

            query = query.OrderBy(palestrantes => palestrantes.Id)
                .Where(palestrantes => palestrantes.Id == palestranteId);

            return await query.FirstOrDefaultAsync();
        }

    }
}