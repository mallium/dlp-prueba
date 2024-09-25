"use client";
import pruebas from "@/app/data/pruebas.json";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <div className="cabecera">
        <h1>Asignaturas</h1>
      </div>

      <div className="contenedor">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Fechas de pruebas</TableCaption>
            <Thead>
              <Tr>
                <Th>Cod. Curso</Th>
                <Th>Nombre Curso</Th>
                <Th>Fecha Prueba</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pruebas.tests.map((ramo, i) => (
                <Tr>
                  <Td>{ramo.subjectId}</Td>
                  <Td>{ramo.subjectName}</Td>
                  <Td>{ramo.testDate}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
