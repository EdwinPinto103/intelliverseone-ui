import { createClient } from '@supabase/supabase-js'

// Configurar Supabase con tus claves reales
const supabaseUrl = 'https://zbwiccmsadmghwvsbdkv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpid2ljY21zYWRtZ2h3dnNiZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NzEzOTgsImV4cCI6MjA2NDA0NzM5OH0.S15bKIqsU2y64au9iYrI4cODPk4PEa7nWfy4glkWuhc'

const supabase = createClient(supabaseUrl, supabaseKey)

async function saveConsulta(pregunta, respuesta) {
  const { data, error } = await supabase
    .from('consultas')
    .insert([{ pregunta, respuesta }])

  if (error) {
    console.error('❌ Error al guardar la consulta:', error.message)
  } else {
    console.log('✅ Consulta guardada exitosamente:', data)
  }
}

// Ejecutar prueba
saveConsulta("¿Cuál es el propósito de IntelliVerseOne?", "Conectar humanos con sabiduría de IA.")
