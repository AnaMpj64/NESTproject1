import { Injectable } from '@nestjs/common';
import { ITareaDTO } from './dto/tarea.dto';
import {v4 as uuid } from 'uuid';

//uuid
@Injectable()
export class TareasService {

tareas: ITareaDTO[] =[];

    Insertar(tarea: ITareaDTO){
        const deber = {
            id: uuid(),
            ...tarea,
        };
        this.tareas.push(deber);
        return deber;
    }

    Todos(): ITareaDTO[]{
        return this.tareas;
    }

    Uno(id: string): ITareaDTO{
        return this.tareas.find((t)=> t.id === id)
    }

    Actualizar(id: string, tarea: ITareaDTO){
        const nuevaTarea = {id, ...tarea};
        this.tareas = this.tareas.map((t)=> (t.id === id ? nuevaTarea : t) )
        return nuevaTarea;
    }

    Eliminar (id: string){
        this.tareas = this.tareas.filter((t)=> t.id !== id)
        return "Tarea Eliminada"
    }
}
