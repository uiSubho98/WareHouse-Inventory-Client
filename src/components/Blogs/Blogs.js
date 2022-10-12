import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="faq-container">
<div className="text-container">
  <span>B</span>
  <span>L</span>
  <span>O</span>
  <span>G</span>
  <span>S</span>
  
</div>
            <div className="accordion container" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Difference between javascript and nodejs?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">JavaScript</th>
      <th scope="col">Node js</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Javascript is a programming language that is used for writing scripts on the website. </td>
      <td>NodeJS is a Javascript runtime environment.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Javascript is used in frontend development.</td>
      <td>Nodejs is used in server-side development.</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>It is basically used on the client-side.</td>
      <td>It is mostly used on the server-side.</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
      <td>Nodejs is written in C, C++ and Javascript.</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      When should you use nodejs and when should you use mongodb?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h4>Well, NodeJS and MongoDB are two different process. Here I tried to explain as simpler as possible:</h4>
        <strong className='text-primary'>NODE JS :</strong><p> Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.</p>
        <h4>Well, NodeJS and MongoDB are two different process. Here I tried to explain as simpler as possible:</h4>
        <strong className='text-primary'>MONGO DB :</strong><p>But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.</p>
        <strong className='text-primary'>Example :</strong><p> The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
        <strong className='text-primary'>Example :</strong><p> Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Differences between sql and nosql databases.?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">sql</th>
      <th scope="col">No sql</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database </td>
      <td>NoSQL is a distributed or Non-relational Database</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Database, here is in table format</td>
      <td>NoSQL databases are document based with key-value pairs and graph databases.</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Schema used is pre-defined</td>
      <td>Dynamic schema is used for unstructured or disorganised data</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL</td>
      <td>Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;