CREATE TABLE contacts(
    name character varying(50),
    phone bigint,
    email varchar
);

CREATE TABLE appointments(
    id serial,
    contact character varying(50),
    date DATE,
    time TIME(0)
);

INSERT INTO contacts(name,phone,email) 
VALUES
('Fred', 4521284569, 'fredhampton@bp.com'),
('Huey', 4525659256, 'hueynewton@bp.com' );