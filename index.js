const { PrismaClient } = require('@prisma/client')
const { equal } = require('assert')

const prisma = new PrismaClient()

async function main() {
  const librosYNombres = await prisma.libros.findMany({
    select: {
      id: true,
      titulo: true,
    }
  })
  const almenos1prestamo = await prisma.estudiantes.findMany({
    select: {
      nombre: true,
      prestamos_hechos:{
        include
      }
    },

  })
  console.log("ID Junto a libros (Consulta basica)")
  console.dir(librosYNombres, { depth: null })
  console.log("Estudiantes con almenos 1 prestamo (Subconsulta)")
  console.dir(almenos1prestamo, { depth: null })
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })