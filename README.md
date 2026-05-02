# Servicios ERP — Cuentas Claras

**Hub principal del ecosistema Cuentas Claras.**
Especializado en implementación de sistemas ERP y herramientas de gestión tributaria.

**URL local:** http://localhost:5173  
**Dominio producción:** www.cuentasclaraserp.com

---

## Servicios que ofrece esta app

| Servicio | Descripción |
|----------|-------------|
| Implementación de ERP | Selección, configuración, migración y soporte |
| Calendario Tributario 2026 | Fechas de vencimiento personalizadas por NIT |

---

## Rutas disponibles

| Ruta | Página |
|------|--------|
| `/` | Landing page |
| `/servicios` | ERP + sección ecosistema |
| `/sobre-nosotros` | Información de la firma |
| `/contacto` | Formulario de contacto |
| `/calendario` | Calculadora de fechas tributarias |

---

## Iniciar en desarrollo

```powershell
# Desde la raíz del monorepo
npm run dev:erp        # frontend :5173
npm run back:erp       # backend  :5001

# O ambos a la vez (con el resto del ecosistema)
npm run dev:all
```

---

## Variables de entorno

`frontend/.env` (copiar desde `.env.example`):
```env
VITE_CONTABLES_URL=http://localhost:5174
VITE_SOLUCIONES_URL=http://localhost:5175
```

`backend/.env`:
```env
PORT=5001
DB_HOST=<ip-aiven>
DB_PORT=13622
DB_USER=avnadmin
DB_PASSWORD=<password>
DB_NAME=defaultdb
DB_SCHEMA=erp
CORS_ORIGIN=http://localhost:5173
```

---

## Ecosistema — otras apps

| App | URL local | Descripción |
|-----|-----------|-------------|
| Contables y Tributarios | http://localhost:5174 | Outsourcing contable, tributaria, nómina |
| Soluciones Integrales | http://localhost:5175 | Estados financieros, planeación |
