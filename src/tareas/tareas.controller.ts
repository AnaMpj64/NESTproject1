import { Controller, Post, Get, Put, Patch, Delete, Req, Param, Query, Body } from '@nestjs/common';
import {Request} from 'express';
import { TareasService } from './tareas.service';
import { ITareaDTO } from './dto/tarea.dto';

@Controller('api/v1/tareas')
export class TareasController {

    constructor(private readonly NombreTareasServicio: TareasService){}

    //Insertar
    @Post()
    Insertar(@Body() VariableDeNombreTareadto: ITareaDTO){
        return this.NombreTareasServicio.Insertar(VariableDeNombreTareadto)
    }

    @Get()
    Todos(){
        return this.NombreTareasServicio.Todos()
    }

    @Get(':id')
    Uno(@Param('id') id:string){
        return this.NombreTareasServicio.Uno(id)
    }

    @Put(':id')
    Actualizar(@Param('id') id:string, @Body() cuerpo:ITareaDTO){
        return this.NombreTareasServicio.Actualizar(id,cuerpo)
    }

    @Delete(':id')
    Eliminar(@Param('id') id:string){
        return this.NombreTareasServicio.Eliminar(id)
    }
}

/**
 * Get -> Obtener - Select where
 * Post -> Insertar
 * Put/Pacht -> Actualizar
 * Delete ->Eliminar
 */