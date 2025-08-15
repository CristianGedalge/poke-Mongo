import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';
import { AxiosAdapter } from 'src/common/adapter/axios-adapter';
import { PokeResponse } from './interfaces/poke-response';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';


@Injectable()
export class SeedService {
  private readonly axios :AxiosInstance=axios
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel:Model<Pokemon>,
    private readonly http:AxiosAdapter
  ){}
  async executeSeed(){
    await this.pokemonModel.deleteMany();
    const pokemonToInsert:{name:string,no:number}[]=[];
    const data= await this.http.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=450`);
    data.results.forEach(async ({name,url})=>{
      const segment=url.split('/');
      const no= +segment[segment.length-2];
      pokemonToInsert.push({name,no})
    })
    await this.pokemonModel.insertMany(pokemonToInsert)
    return `Seed executed`
  }
}
