using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace Energeticos.Framework.AccesoDatos
{
    public class Conexion
    {
        public static SqlConnection ObtieneConexion(string cadena)
        {
            SqlConnection conexion;

            try
            {

                conexion = new SqlConnection(ConfigurationManager.ConnectionStrings[cadena].ConnectionString);

            }
            catch (SqlException sqlExp)
            {
                Console.WriteLine(sqlExp);
                conexion = null;
            }

            return conexion;
        }
    }
}