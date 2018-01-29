/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let empresasRouter = express.Router();
 let idCounter = 3;
  empresasRouter.get('/', function(req, res) {
    res.send({
       data: [
        {
          id: 1,
          attributes:
          {
            title: "Telcel",
            namelegal: "RADIOMOVIL DIPSA SA DE CV"
          },
          type: "empresas"
        },
        {
          id: 2,
          attributes:
          {
            title: "Movistar",
             namelegal: "Movistar sa de cv"
          },
          type: "empresas"
        },  {
          id: 3,
          attributes:
          {
            title: "Total play",
             namelegal: "TOTAL PLAY TELECOMUNICACIONES SA DE CV"
          },
          type: "empresas"
        }
      ]
    });
  });

  empresasRouter.post('/', function(req, res) {
     console.log("req body --->" +req.body)
     idCounter += 1
    res.send({
      data: {
        id: idCounter,
        attributes:
        {
          title: req.body.data.attributes.title,
        },
        type: "empresas"
      }
    })
    res.status(201).end();
  });

  empresasRouter.get('/:id', function(req, res) {
    res.send({
      data: {
        id: 1,
        attributes:
        {
          title: "Castle Ravenloft",
          namelegal: "TOTAL PLAY TELECOMUNICACIONES SA DE CV"
       
        },
        type: "empresas"
      }
    });
  });

  empresasRouter.put('/:id', function(req, res) {
    res.send({
      'empresas': {
        id: req.params.id,
         title: "Castle Ravenloft",
          namelegal: "TOTAL PLAY TELECOMUNICACIONES SA DE CV"
      }
    });
  });

  empresasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/empresas', require('body-parser').json());
  app.use('/api/empresas', require('body-parser').json({ type: 'application/*+json' }), empresasRouter);
};
