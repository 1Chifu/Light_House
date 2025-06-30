-- Tabla Usuarios
CREATE TABLE Usuarios (
    usuario_id INTEGER PRIMARY KEY AUTOINCREMENT,
    dni TEXT UNIQUE NOT NULL,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    telefono TEXT,
    direccion TEXT,
    password_hash TEXT NOT NULL,
    tipo TEXT NOT NULL CHECK (tipo IN ('cliente', 'proveedor', 'admin')),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Proveedores
CREATE TABLE Proveedores (
    proveedor_id INTEGER PRIMARY KEY,
    nombre_empresa TEXT NOT NULL,
    logo_url TEXT,
    horario_atencion TEXT,
    FOREIGN KEY (proveedor_id) REFERENCES Usuarios(usuario_id)
);

-- Tabla Sistemas_Energia
CREATE TABLE Sistemas_Energia (
    sistema_id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    proveedor_id INTEGER,
    tipo TEXT NOT NULL CHECK (tipo IN ('solar', 'hibrido', 'eolico')),
    capacidad_kw REAL,
    fecha_instalacion DATE,
    direccion TEXT,
    estado TEXT DEFAULT 'activo' CHECK (estado IN ('activo', 'inactivo', 'mantenimiento')),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id),
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(proveedor_id)
);

-- Tabla Dispositivos
CREATE TABLE Dispositivos (
    dispositivo_id INTEGER PRIMARY KEY AUTOINCREMENT,
    sistema_id INTEGER NOT NULL,
    nombre TEXT NOT NULL,
    tipo TEXT NOT NULL,
    consumo_promedio REAL,
    estado INTEGER DEFAULT 0,
    FOREIGN KEY (sistema_id) REFERENCES Sistemas_Energia(sistema_id)
);

-- Tabla Metricas_Consumo
CREATE TABLE Metricas_Consumo (
    metrica_id INTEGER PRIMARY KEY AUTOINCREMENT,
    sistema_id INTEGER NOT NULL,
    fecha_hora DATETIME NOT NULL,
    consumo_kw REAL NOT NULL,
    generacion_kw REAL,
    bateria_porcentaje REAL,
    red_kw REAL,
    FOREIGN KEY (sistema_id) REFERENCES Sistemas_Energia(sistema_id)
);

-- Tabla Predicciones_Consumo
CREATE TABLE Predicciones_Consumo (
    prediccion_id INTEGER PRIMARY KEY AUTOINCREMENT,
    sistema_id INTEGER NOT NULL,
    fecha DATE NOT NULL,
    tipo TEXT NOT NULL CHECK (tipo IN ('diario', 'semanal', 'mensual')),
    prediccion_kw REAL NOT NULL,
    clima TEXT,
    recomendacion TEXT,
    FOREIGN KEY (sistema_id) REFERENCES Sistemas_Energia(sistema_id)
);

-- Tabla Tickets_Soporte
CREATE TABLE Tickets_Soporte (
    ticket_id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    proveedor_id INTEGER NOT NULL,
    asunto TEXT NOT NULL,
    mensaje TEXT NOT NULL,
    urgencia TEXT DEFAULT 'normal' CHECK (urgencia IN ('normal', 'alta', 'critica')),
    estado TEXT DEFAULT 'abierto' CHECK (estado IN ('abierto', 'en_progreso', 'cerrado')),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id),
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(proveedor_id)
);

-- Tabla Configuraciones_Usuario
CREATE TABLE Configuraciones_Usuario (
    config_id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    idioma TEXT DEFAULT 'es' CHECK (idioma IN ('es', 'qu')),
    alertas_consummo INTEGER DEFAULT 1,
    alertas_mantenimiento INTEGER DEFAULT 1,
    compartir_datos INTEGER DEFAULT 1,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);