CREATE TABLE contacts(
    name character varying(50),
    email varchar,
    phone int
);

CREATE TABLE appointments(
    id serial,
    contact character varying(50),
    date DATE,
    time TIME(0)
);

INSERT INTO contacts(name,email,phone) 
VALUES
('Fred', 'fredhampton@bp.com', 478565925),
('Huey', 'hueynewton@bp.com', 452565925);