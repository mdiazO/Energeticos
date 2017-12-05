using System;
using System.Collections.Generic;
using System.Data;
using Energeticos.Entidades;

namespace Energeticos.Negocio {
    public class Login {
        public String ObtieneUsuarios(String usuario, String contrasena) {
            try {
                DataTable dt = Datos.Login.ObtieneUsuarios(usuario, contrasena);
                List<Usuarios> List = new List<Usuarios>();
                Usuarios tr = new Usuarios();

                foreach (DataRow row in dt.Rows) {
                    tr.idPersonal = Convert.ToInt32(row["idPersonal"].ToString());
                    tr.credencial = row["credencial"].ToString();
                    tr.contrasenia = row["contrasenia"].ToString();
                    tr.numIntentos = Convert.ToInt32(row["numIntentos"].ToString());
                    tr.idPerfil = Convert.ToInt32(row["idPerfil"].ToString());
                    tr.activo = Convert.ToBoolean(row["activo"].ToString());
                    tr.nombre = row["nombre"].ToString();
                    tr.apPaterno = row["apPaterno"].ToString();
                    List.Add(tr);
                }

                if (List.Count == 0) {
                    return "Error";
                } else {
                    return tr.nombre + " " + tr.apPaterno;
                }
            } catch (Exception e) {
                throw e;
            }
        }
    }
}
