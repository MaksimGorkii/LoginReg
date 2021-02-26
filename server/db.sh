#!/bin/sh
node db.js 
npx prisma migrate dev --name init --preview-feature
npx prisma introspect
npx prisma generate

