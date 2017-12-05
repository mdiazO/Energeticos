using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Energeticos.Entidades {
    public class Usuarios {

        // Entidades tabla [DatosdeAcceso]
        public int idPersonal { set; get; }
        public String credencial { set; get; }
        public String contrasenia { set; get; }
        public int numIntentos { set; get; }
        public int idPerfil { set; get; }
        public Boolean activo { set; get; }

        // Entidades tabla [Personal]
        public String nombre { set; get; }
        public String apPaterno { set; get; }

    }
}
