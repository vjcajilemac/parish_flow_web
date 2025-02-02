import { AdminLayout } from "@/layouts/AdminLayout";
import {
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Home = () => {
  const infoTags = [
    {
      name: "Total Feligreses",
      value: 1.234,
      message: "+20 este mes",
    },
    {
      name: "Catequistas Activos",
      value: 24,
      message: "12 grupos activos",
    },
    {
      name: "Eventos Próximos",
      value: 8,
      message: "3 esta semana",
    },
    {
      name: "Donaciones del Mes",
      value: 5.23,
      message: "+12% vs mes anterior",
    },
  ];

  const events = [
    {
      name: "Misa Dominical",
      date: "Domingo, 8:00 AM",
      type: "Eucaristía",
    },
    {
      name: "Catequesis Primera Comunión",
      date: "Sábado, 9:00 AM",
      type: "Formación",
    },
    {
      name: "Catequesis Primera ComuniónGrupo de Oración",
      date: "Jueves, 7:00 PM",
      type: "Pastoral",
    },
  ];
  const shortCuts = [
    {
      name: "Registrar catequesis",
      icon: "",
      link: "",
    },
    {
      name: "Nuevo miembro",
      icon: "",
      link: "",
    },
    {
      name: "Agregar evento",
      icon: "",
      link: "",
    },
    {
      name: "Tienda parroquial",
      icon: "",
      link: "",
    },
  ];
  return (
    <AdminLayout>
      <div className="flex flex-col justify-center items-center h-[98%] w-[98%]">
        <div className="flex flex-row h-[15%]">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to the Church Management System
          </h2>
        </div>
        <div className="flex flex-col justify-between h-[85%] w-[100%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[25%] w-[100%]">
            {infoTags.map((tag, index) => (
              <div key={index} className="bg-white shadow p-4 rounded-md">
                <h4 className="text-md font-bold">{tag.name}</h4>
                <p className="text-2xl font-semibold">{tag.value}</p>
                <p className="text-xs text-gray-400">{tag.message}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-8 items-stretch h-[73%] w-[100%] gap-4">
            <div className="flex flex-col justify-between items-stretch bg-white col-span-5 rounded-md">
              {/* Upcoming Events */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Próximos Eventos</CardTitle>
                  <CardDescription>
                    Eventos y actividades programadas para los próximos días
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event) => (
                      <div
                        key={event.name}
                        className="flex items-center border-b pb-2"
                      >
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {event.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {event.date}
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className="text-sm text-muted-foreground">
                            {event.type}
                          </span>
                        </div>
                        <ChevronRightIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-3">
              {/* Quick Access */}
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Accesos Rápidos</CardTitle>
                  <CardDescription>
                    Funciones frecuentes del sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-4 hover:border-primary hover:bg-muted transition-colors">
                      <BookOpenIcon className="mb-2 h-6 w-6" />
                      <span className="text-sm font-medium">
                        Registrar Catequesis
                      </span>
                    </button>
                    <button className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-4 hover:border-primary hover:bg-muted transition-colors">
                      <UsersIcon className="mb-2 h-6 w-6" />
                      <span className="text-sm font-medium">Nuevo Miembro</span>
                    </button>
                    <button className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-4 hover:border-primary hover:bg-muted transition-colors">
                      <CalendarIcon className="mb-2 h-6 w-6" />
                      <span className="text-sm font-medium">
                        Agendar Evento
                      </span>
                    </button>
                    <button className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-4 hover:border-primary hover:bg-muted transition-colors">
                      <ShoppingBagIcon className="mb-2 h-6 w-6" />
                      <span className="text-sm font-medium">
                        Tienda Parroquial
                      </span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;
