# Publicación y accesos de Adinnov

## Estado de la web

- El sitio público está en este repositorio y se compila con Next.js 16.
- Los casos de éxito y el catálogo publicados se leen de Supabase.
- El formulario envía con Resend. El destinatario es `CONTACT_TO`; si no se configura, usa `info@adinnov.com.ar`. En `.env.local` no están definidos `RESEND_API_KEY`, `RESEND_FROM` ni `CONTACT_TO`, por lo que la entrega real no se puede verificar en local. La configuración de producción debe comprobarse en Vercel.
- Google Tag Manager usa el contenedor `GTM-MZMLHTLG`. El formulario emite `adinnov_form_success` con `contact_intent` después de que la API confirma el envío, sin datos personales.
- El enlace público de WhatsApp usa `+54 11 4190-6432`.

## Para publicar en una cuenta de Adinnov

1. Identificar el correo y las organizaciones de Adinnov que serán propietarias de GitHub, Vercel, Supabase y Resend. El repositorio actual tiene como remoto `nicomurrayai/adinnov-web` y el proyecto local está vinculado a Vercel como `adinnov-web`.
2. Transferir el repositorio o invitar a la organización de Adinnov con el acceso acordado. Vincular el repositorio desde la organización de Vercel de Adinnov.
3. Supabase ya está en la organización Adinnov: el 8 de octubre de 2026 se migraron base de datos, Auth y Storage al proyecto `inyzbjajuqmbnzvuphpa` ("Base de datos - Adinnov") y se actualizaron las claves y la URL en la web y en el panel. El proyecto anterior, `ofhtpbxnokzqunpgjbcl`, quedó sin cambios como respaldo hasta darlo de baja.
4. Configurar en Vercel `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO` y `REVALIDATE_SECRET`. El último debe coincidir con el del panel. No subir valores secretos al repositorio.
5. Verificar el dominio remitente de Resend y probar un envío real al destinatario acordado.
6. Asociar `adinnov.com.ar` al proyecto de Vercel y aplicar los registros DNS que indique Vercel para ese dominio. Comprobar HTTPS, redirección del dominio y rutas principales antes de cambiar el tráfico.
7. Publicar el contenedor de Tag Manager desde la cuenta de Adinnov. Configurar allí Google Ads y Meta Pixel cuando se definan las conversiones con el equipo de marketing. El documento de ajustes no enumera todavía los eventos ni aporta los IDs de conversión o Pixel.
8. Probar la web y el panel con usuarios de Adinnov: catálogo, casos, formulario, enlaces, revalidación de contenido y permisos.

## Decisiones pendientes

- Confirmar el color exacto de marca. El logo del repositorio usa `#0075B2`; la interfaz usa una variante ligeramente más oscura, `#00699F`, para mantener contraste legible sobre fondos claros.
- El panel está en el repositorio hermano `panel-adinnov`. La autorización actual usa Supabase Auth y la tabla `admin_users`; se pueden habilitar más usuarios cuando se reciban sus correos. El script `admin:create` actual crea o cambia la contraseña de una cuenta, por lo que no debe usarse para invitar a personas ya registradas.
- El blog es viable, pero figura en el documento como idea futura. Para gestionarlo desde el panel harían falta una tabla de publicaciones, editor, roles, rutas públicas y reglas de publicación; faltan criterios editoriales y autorización para ese alcance.
- Obtener las cuentas destino y los correos de las personas que tendrán acceso a cada servicio.
