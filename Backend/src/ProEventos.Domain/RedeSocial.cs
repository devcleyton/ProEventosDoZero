namespace ProEventos.Domain
{
    public class RedeSocial
    {
        public int id { get; set; }
        public string NomeRede { get; set; }
        public string Url { get; set; }
        public int? EventoId { get; set; }
        public Evento Evento { get; set; }
        public int? PalestranteId { get; set; }
        public Palestrante Palestrante { get; set; }
    }
}