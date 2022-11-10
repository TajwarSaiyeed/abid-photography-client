import React from "react";

const NoSQLVSSQL = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <caption className="text-3xl font-bold p-3 text-slate-400">
          No SQL VS SQL
        </caption>
        <thead>
          <tr>
            <th></th>

            <th>SQL</th>
            <th>NoSQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
            <td>Non-relational or distributed database system.</td>
          </tr>
          <tr>
            <th>2</th>
            <td>These databases have fixed or static or predefined schema</td>
            <td>They have dynamic schema</td>
          </tr>
          <tr>
            <th>3</th>

            <td>
              These databases are not suited for hierarchical data storage.
            </td>
            <td>
              These databases are best suited for hierarchical data storage.
            </td>
          </tr>
          <tr>
            <th>4</th>

            <td>These databases are best suited for complex queries</td>
            <td>These databases are not so good for complex queries</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Vertically Scalable</td>
            <td>Horizontally scalable</td>
          </tr>
          <tr>
            <th>6</th>

            <td>Follows ACID property</td>
            <td>Follows CAP(consistency, availability, partition tolerance)</td>
          </tr>
          <tr>
            <th>7</th>

            <td>
              <strong>Examples: </strong>MySQL, PostgreSQL, Oracle, MS-SQL
              Server etc
            </td>
            <td>
              <strong>Examples: </strong>MongoDB, GraphQL, HBase, Neo4j,
              Cassandra etc
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NoSQLVSSQL;
