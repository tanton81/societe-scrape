const HTMLParser = require('node-html-parser');
const express = require('express');

const scrapeSocieteService = require('../models/scrapeSocieteService');

const routerSocietes = express.Router({mergeParams: true});

routerSocietes.get('/', function (req, res, next) 
{
    let url = req.query.url;

    scrapeSocieteService.getSociete(url).then((result) =>
    {
        let data = toUTF8(result.data);
        let root = HTMLParser.parse(data);
        
        let extracted = extractData(root);

        res.status(200).send(extracted);
    })
    .catch((err) =>
    {
        console.log(err);
    });
});

function extractData(root)
{
    let name = root.querySelector('#identite_deno').rawText.trim();

    let nbEmployees;
    if(root.querySelector('#effmoy-histo-description'))
    {
        nbEmployees = root.querySelector('#effmoy-histo-description').rawText.trim();        
    }
    else
    if(root.querySelector('#trancheeff-histo-description'))
    {
        nbEmployees = root.querySelector('#trancheeff-histo-description').rawText.trim();
    }
    else
    {
        nbEmployees = "inconnu";
    }

    return {
        companyName: name,
        employees: nbEmployees
    };

  }

function toUTF8(body) 
{
    return body.toString('latin1');
}

module.exports = routerSocietes;
