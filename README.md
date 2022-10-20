# Sheet Data Visualizer 

SDV is a Google Sheets Data Visualizer for dealing with Academic Data Visualization written in Javascript.

## Installation

Use the node package manager [npm](https://nodejs.org/en/download/current/) to install dependency packages for SDV.

```bash
cd server && npm install
cd ..
cd client && npm install
```

## Usage

```node
~/server:
npm start
~/client:
npm run serve
```

```
Server will be available at http://localhost:5000/
Client will be available at http://localhost:8081/
```

APIs Available:

```
/all              - gives all categories of data

/name/:name       - gives all academic data of specific student "name"

/department/:dept - gives all academic data of specific department "dept"

/semester/:sem    - gives all academic data of specific semester "sem"
```

Client Routes Available:

```
/          - list all categories of data

/name      - visualize academic performance of student selected on home page or entered on current page

/semester  - visualize academic performance of each student on selected semester

/department - visualize academic performance of each department on selected semester
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Developed by Anas Vakyathodi
