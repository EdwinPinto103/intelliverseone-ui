import { supabase } from './supabaseClient';

export async function saveConsulta(pregunta) {
  const { data, error } = await supabase
    .from('consultas')
    .insert([{ pregunta }]);

  if (error) {
    console.error('❌ Error al guardar la consulta:', error.message);
  } else {
    console.log('✅ Consulta guardada exitosamente:', data);
  }
}
