// import { Welcome } from './components/Welcome.js';


// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.innerText)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
    //   <Page
    //     titulo="Mi diario"
    //     articulos={[
        //       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
        //       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
        //     ]}
        //   />,
        //   document.getElementById('react-app')
        // );
        
        // import { LikeButton } from './components/LikeButton.js';
        
        // ReactDOM.render(<LikeButton />, document.getElementById('react-app'));
        
        // import { ToDoList } from './components/ToDoList.js';
        
        // ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

//////////////////////TAREA 1//////////////////////
/*import { BlogPost, Tarjeta } from './tarea/Tarea1.js';
            

ReactDOM.render(
    <>
    <Tarjeta
    nombre= "Fran Real Salas"
    titulo= "Programador Front End"
    imagen= "https://avatars.githubusercontent.com/u/101210953?v=4"
    />
    <BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.
    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
        nombre: "Fran Real Salas",
    titulo: "Programador Front End",
    imagen: "https://avatars.githubusercontent.com/u/101210953?v=4"
}}
/>
    </>
    , document.getElementById('react-app')
);
*/

//////////////////////TAREA 2//////////////////////
/*
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';

ReactDOM.render(
    //<MatchNombre nombre="fran"/>
    //<PasswordInput minLength={8}/>
    <ValidationInput
        validation = {(value)=>value? true : false}
        minLength={8}
        isPassword
    />
    ,document.getElementById("react-app")
);*/

//////////////////////TAREA 3//////////////////////

/*
import { UncontrolledCheckbox, CheckboxList } from "./tarea/Tarea3.js"

ReactDOM.render(
    //<UncontrolledCheckbox name="Checkbox" initialValue={false}/>
    <CheckboxList items={{
        uno: false,
        dos: true,
        tres: false,
    }}
    />
    ,document.getElementById("react-app")
)*/

//////////////////////TAREA 4//////////////////////

import { CheckboxListWithState, ControlledCheckbox } from "./tarea/Tarea4.js";

ReactDOM.render(
    //<ControlledCheckbox
        //name="Checkbox"
        //value={false}
        //onChange={()=>{console.log("Funciona")}}
    ///>
    <CheckboxListWithState items={{
    uno:false,
    dos:true,
    tres:false
    }}
    />
    
    ,document.getElementById("react-app")
)