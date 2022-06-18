using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contexto
{
    public class ProEventosContext : DbContext
    {
        public ProEventosContext(DbContextOptions<ProEventosContext> options) : base(options) { }
        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<RedeSocial> RedeSociais { get; set; }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<PalestranteEvento>()
            .HasKey(PE => new { PE.EventoId, PE.PalestranteId });

            modelbuilder.Entity<Evento>()
            .HasMany(evento => evento.RedesSociais)
            .WithOne(redeSocial => redeSocial.Evento)
            .OnDelete(DeleteBehavior.Cascade);

            modelbuilder.Entity<Palestrante>()
            .HasMany(palestrante => palestrante.RedesSociais)
            .WithOne(redeSocial => redeSocial.Palestrante)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}