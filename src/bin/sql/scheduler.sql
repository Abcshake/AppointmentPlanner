CREATE TABLE contacts(
    id serial,
    email varchar varying(50),
    phone 
)

CREATE TABLE appointments{
    id serial,
    contact character varying(50),
    date DATE,
    time TIME(0)
}