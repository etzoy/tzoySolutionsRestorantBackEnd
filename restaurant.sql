
CREATE TABLE restaurantetzoysolutions.menu (
  id INTEGER   NOT NULL ,
  nombre VARCHAR(300) ,
  precio INTEGER    ,
  imagen VARCHAR(300)    ,
  precio_produccion INTEGER    ,
  tiempo_preparacion TIME      ,
PRIMARY KEY(ids));




CREATE TABLE restaurantetzoysolutions.estado (
  id SERIAL  NOT NULL ,
  nombre VARCHAR(150)   NOT NULL ,
  descripcion VARCHAR(200)   NOT NULL   ,
PRIMARY KEY(id));




CREATE TABLE restaurantetzoysolutions.producto (
  id SERIAL  NOT NULL ,
  nombre VARCHAR(200)    ,
  descripcion VARCHAR(300)    ,
  precio INTEGER    ,
  cantidad INTEGER      ,
PRIMARY KEY(id));




CREATE TABLE restaurantetzoysolutions.cocina (
  id SERIAL  NOT NULL ,
  nombre VARCHAR(150)    ,
  descripcion VARCHAR(300)      ,
PRIMARY KEY(id));




CREATE TABLE restaurantetzoysolutions.mesa (
  id SERIAL  NOT NULL ,
  nombre VARCHAR(150)    ,
  ubicacion VARCHAR(200)      ,
PRIMARY KEY(id));




CREATE TABLE restaurantetzoysolutions.trabajador (
  id SERIAL  NOT NULL ,
  nombre VARCHAR(150)    ,
  sueldo INTEGER    ,
  dpi VARCHAR(15)    ,
  password_2 VARCHAR(15)      ,
PRIMARY KEY(id));




CREATE TABLE restaurantetzoysolutions.catalogo (
  id SERIAL  NOT NULL ,
  nombre VARCHAR    ,
  descripcion VARCHAR      ,
PRIMARY KEY(id));




CREATE TABLE restaurantetzoysolutions.item_catalogo (
  id SERIAL  NOT NULL ,
  catalogo_id INTEGER   NOT NULL ,
  nombre VARCHAR   NOT NULL ,
  descripcion VARCHAR    ,
  valor VARCHAR      ,
PRIMARY KEY(id)  ,
  FOREIGN KEY(catalogo_id)
    REFERENCES restaurantetzoysolutions.catalogo(id));


CREATE INDEX item_catalogo_FKIndex1 ON restaurantetzoysolutions.item_catalogo (catalogo_id);


CREATE INDEX IFK_Rel_09 ON restaurantetzoysolutions.item_catalogo (catalogo_id);


CREATE TABLE restaurantetzoysolutions.alerta (
  id SERIAL  NOT NULL ,
  producto_id INTEGER   NOT NULL ,
  nombre VARCHAR(200)    ,
  descripcion VARCHAR(300)    ,
  cantidad_alert INTEGER      ,
PRIMARY KEY(id)  ,
  FOREIGN KEY(producto_id)
    REFERENCES restaurantetzoysolutions.producto(id));


CREATE INDEX alerta_FKIndex1 ON restaurantetzoysolutions.alerta (producto_id);


CREATE INDEX IFK_Rel_13 ON restaurantetzoysolutions.alerta (producto_id);


CREATE TABLE restaurantetzoysolutions.cuenta (
  id INTEGER   NOT NULL ,
  mesa_id INTEGER   NOT NULL ,
  fecha DATE    ,
  estado INTEGER    ,
  total INTEGER      ,
PRIMARY KEY(id)  ,
  FOREIGN KEY(mesa_id)
    REFERENCES restaurantetzoysolutions.mesa(id));


CREATE INDEX Cuenta_FKIndex1 ON restaurantetzoysolutions.cuenta (mesa_id);


CREATE INDEX IFK_Rel_05 ON restaurantetzoysolutions.cuenta (mesa_id);


CREATE TABLE restaurantetzoysolutions.insumo_menu (
  producto_id INTEGER   NOT NULL ,
  menu_id INTEGER   NOT NULL ,
  dimension SERIAL  NOT NULL ,
  costo INTEGER        ,
  FOREIGN KEY(menu_id)
    REFERENCES restaurantetzoysolutions.menu(id),
  FOREIGN KEY(producto_id)
    REFERENCES restaurantetzoysolutions.producto(id));


CREATE INDEX insumo_FKIndex1 ON restaurantetzoysolutions.insumo_menu (menu_id);
CREATE INDEX insumo_FKIndex2 ON restaurantetzoysolutions.insumo_menu (producto_id);


CREATE INDEX IFK_Rel_11 ON restaurantetzoysolutions.insumo_menu (menu_id);
CREATE INDEX IFK_Rel_12 ON restaurantetzoysolutions.insumo_menu (producto_id);


CREATE TABLE restaurantetzoysolutions.area (
  cocina_id INTEGER   NOT NULL ,
  menu_id INTEGER   NOT NULL ,
  trabajador_id INTEGER   NOT NULL       ,
  FOREIGN KEY(trabajador_id)
    REFERENCES restaurantetzoysolutions.trabajador(id),
  FOREIGN KEY(menu_id)
    REFERENCES restaurantetzoysolutions.menu(id),
  FOREIGN KEY(cocina_id)
    REFERENCES restaurantetzoysolutions.cocina(id));


CREATE INDEX cocina_FKIndex1 ON restaurantetzoysolutions.area (trabajador_id);
CREATE INDEX cocina_FKIndex2 ON restaurantetzoysolutions.area (menu_id);
CREATE INDEX Area_FKIndex3 ON restaurantetzoysolutions.area (cocina_id);


CREATE INDEX IFK_Rel_14 ON restaurantetzoysolutions.area (trabajador_id);
CREATE INDEX IFK_Rel_15 ON restaurantetzoysolutions.area (menu_id);
CREATE INDEX IFK_Rel_16 ON restaurantetzoysolutions.area (cocina_id);


CREATE TABLE restaurantetzoysolutions.orden (
  id SERIAL  NOT NULL ,
  estado_id INTEGER   NOT NULL ,
  cuenta_id INTEGER   NOT NULL ,
  trabajador_id INTEGER   NOT NULL ,
  menu_id INTEGER   NOT NULL ,
  cantidad INTEGER    ,
  total INTEGER    ,
  fecha DATE    ,
  tiempo TIME      ,
PRIMARY KEY(id)        ,
  FOREIGN KEY(menu_id)
    REFERENCES restaurantetzoysolutions.menu(id),
  FOREIGN KEY(trabajador_id)
    REFERENCES restaurantetzoysolutions.trabajador(id),
  FOREIGN KEY(cuenta_id)
    REFERENCES restaurantetzoysolutions.cuenta(id),
  FOREIGN KEY(estado_id)
    REFERENCES restaurantetzoysolutions.estado(id));


CREATE INDEX orden_FKIndex1 ON restaurantetzoysolutions.orden (menu_id);
CREATE INDEX orden_FKIndex3 ON restaurantetzoysolutions.orden (trabajador_id);
CREATE INDEX orden_FKIndex5 ON restaurantetzoysolutions.orden (cuenta_id);
CREATE INDEX orden_FKIndex4 ON restaurantetzoysolutions.orden (estado_id);


CREATE INDEX IFK_Rel_02 ON restaurantetzoysolutions.orden (menu_id);
CREATE INDEX IFK_Rel_04 ON restaurantetzoysolutions.orden (trabajador_id);
CREATE INDEX IFK_Rel_08 ON restaurantetzoysolutions.orden (cuenta_id);
CREATE INDEX IFK_Rel_10 ON restaurantetzoysolutions.orden (estado_id);


INSERT INTO restaurantetzoysolutions.menu(
id, nombre, precio, imagen, precio_produccion)
VALUES (1,'carnita',15,'carnita.jpg',10);
