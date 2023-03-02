import React from "react";
import { Gasto } from "./Gasto";

export const ListadoGastos = ({
  filtro,
  gastosFiltro,
  gastos,
  setGastoEditar,
  eliminarGasto,
}) => {
  return (
    <div className='listado-gastos contenedor'>
      {filtro ? (
        <>
          <h2>
            {gastosFiltro.length ? "Gastos" : "No hay gastos en esta categoria"}
          </h2>
          {gastosFiltro.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              gasto={gasto}
              key={gasto.id}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              gasto={gasto}
              key={gasto.id}
            />
          ))}
        </>
      )}
    </div>
  );
};
