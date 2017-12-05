using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Energeticos.Framework.AccesoDatos;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Energeticos.Datos {
    public class Login {

        // Método Consulta en la BD en List
        public static DataTable ObtieneUsuarios(String usuario, String contrasena) {
            DataTable Lecturas = new DataTable();
            SqlConnection connection = new SqlConnection();
            try {
                using (connection = Conexion.ObtieneConexion("ConexionBD")) {
                    connection.Open();
                    Lecturas = Ejecuta.EjecutarConsulta(connection, null, "SELECT * FROM [RecursosHumanos].[DatosdeAcceso] INNER JOIN [RecursosHumanos].[Personal] ON [RecursosHumanos].[DatosdeAcceso].[idPerfil] = [RecursosHumanos].[Personal].[idPerfil] WHERE credencial='" + usuario + "' and contrasenia='" + contrasena + "' ", false);
                    connection.Close();
                }
            } catch (Exception ex) {
                connection.Close();
                throw new Exception("Error en obtener los estados por máquina  \r\nError: " + ex.Message, ex);
            }
            return Lecturas;
        }

    }
}
