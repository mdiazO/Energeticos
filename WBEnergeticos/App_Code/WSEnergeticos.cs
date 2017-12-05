using System;
using System.Collections.Generic;
using System.Web.Services;
using Energeticos.Entidades;
using Energeticos.Negocio;
using System.Data;




/// <summary>
/// Summary description for MyServiceClass
/// </summary>
/// 
[System.Web.Script.Services.ScriptService]

public class WSEnergeticos : System.Web.Services.WebService
{
    public WSEnergeticos() { }

    readonly NegocioCrud metodosNegocio = new NegocioCrud();

    [WebMethod]
    public EntidadCrud LlenaTabla() {
        EntidadCrud listcampos;
        listcampos = metodosNegocio.LlenaTabla();
        return listcampos;
    }

    [WebMethod]
    public bool insertaWs(string nombre, string apellido, int edad, string email,int area,string fecha) {
        CamposCrud campos = new CamposCrud();
        campos.nombre = nombre;
        campos.apellidos = apellido;
        campos.edad = edad;
        campos.email = email;
        campos.idArea = area;
        campos.fecha = Convert.ToDateTime(fecha.ToString());
        return metodosNegocio.insertar(campos);
    }

    [WebMethod]
    public bool ActualisarWs(int idUsuario, string nombre, string apellido, int edad, string email) {
        CamposCrud campos = new CamposCrud();
        campos.idUsuario = idUsuario;
        campos.nombre = nombre;
        campos.apellidos = apellido;
        campos.edad = edad;
        campos.email = email;
        return metodosNegocio.actualisar(campos);
    }

    [WebMethod]
    public bool eliminarWs(int idUsuario)    {
        CamposCrud campos = new CamposCrud();
        campos.idUsuario = idUsuario;
        return metodosNegocio.eliminar(campos);
    }


    [WebMethod]
    public Area LlenaComboWS()    {
        Area listcampos;
        listcampos = metodosNegocio.LlenacomboNeg();
        return listcampos;
    }

    // WS Energeticos
    Energeticos.Negocio.Login datos = new Energeticos.Negocio.Login();
    Energeticos.Negocio.Estructura estructura = new Energeticos.Negocio.Estructura();
    [WebMethod]
    public String AccesoDatos(String usuario, String contrasena) {
        return datos.ObtieneUsuarios(usuario, contrasena);
    }

    [WebMethod]
    public bool CreaEstructura(String jsonEstructura) {
        return estructura.CreaEstructura(jsonEstructura);
    }
}

