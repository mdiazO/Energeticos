using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Energeticos.Entidades
{
    public class Area
    {
        public CamposArea [] listaReg { get; set; }
    }
    public class CamposArea
    {
        public int idArea { get; set; }
        public string descripcion { get; set; }
    }
}
