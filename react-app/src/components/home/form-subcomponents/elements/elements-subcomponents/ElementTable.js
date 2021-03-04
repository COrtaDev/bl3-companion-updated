import React from "react";

const ElementTable = ({ itemElements }) => {
  console.log(itemElements);
  const Row = ({ element, number }) => {
    return (
      <tr>
        <th>{number + 1}</th>
        <td>{element.element}</td>
      </tr>
    );
  };
  const TableRow = ({ elements }) => {
    console.log(elements);
    return (
      <>
        {elements.map((element, i) => (
          <Row key={i} number={i} element={element} />
        ))}
      </>
    );
  };
  console.log(itemElements);
  return (
    <table className={"table is-striped is-hoverable is-size-7"}>
      <thead>
        <tr>
          <th className={"pb-0"}>No.</th>
          <th className={"pb-0"}>Element</th>
        </tr>
      </thead>
      <tbody>
        {itemElements.map((elements, i) => (
          <TableRow key={i} elements={[elements]} />
        ))}
      </tbody>
    </table>
  );
};

export default ElementTable;
