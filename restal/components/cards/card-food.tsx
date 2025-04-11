'use client'
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Food from "@/models/Food";
import { GetFoodById } from "@/services/FoodService";
import { ShinyButton } from "@/components/magicui/shiny-button";
import React, { useEffect, useState } from 'react'

export default function CardFood({id, nome, ingredientes, preco}:Food) {

   return (
    <div>
      <NeonGradientCard>
        <div className="p-4">
           <h2>{nome}</h2>
           <p>{ingredientes}</p>
           <h3>{preco}</h3>
        </div>
      </NeonGradientCard>

      <ShinyButton>Pague aqui</ShinyButton>
    </div>
   )
}
