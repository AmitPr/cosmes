#!/usr/bin/env node
// @ts-check

import { createEcmaScriptPlugin, runNodeJs } from "@bufbuild/protoplugin";
import {
    literalString,
    localName,
    makeJsDoc,
    type Schema
} from "@bufbuild/protoplugin/ecmascript";

import type { DescFile } from "@bufbuild/protobuf";


export function generateTs(schema: Schema) {
    for (const protoFile of schema.files) {
        generateTypeRegistry(schema, protoFile);
    }
}


function generateTypeRegistry(schema: Schema, protoFile: DescFile) {
    if (protoFile.services.length === 0) {
        return;
    }
    const file = schema.generateFile(protoFile.name + "_registry.ts");
    file.preamble(protoFile);

    for (const service of protoFile.services) {
        if (service.methods.length === 0) {
            continue;
        }
        file.print("export const ", localName(service), "Registry = {");
        for (const method of service.methods) {
            file.print("  ", literalString(service.typeName + method.name), ": ", method.input, ",");
        }
        file.print("};");
    }
}

function generateTypeDefinitions(schema: Schema, protoFile: DescFile) {
    const file = schema.generateFile(protoFile.name + "_types.ts");
    file.preamble(protoFile);
    const plainMessage = file.import("PlainMessage", "@bufbuild/protobuf")

    for (const service of protoFile.services) {
        for (const method of service.methods) {
            file.print(makeJsDoc(method));
            file.print("export type ", localName(service), method.name, " = {");
            file.print("  typeUrl: ", literalString(service.typeName + method.name), ";");
            file.print("  value: ", plainMessage, "<", method.input, ">", ";");
            file.print("};");
            file.print("");
        }
    }
}

runNodeJs(
    createEcmaScriptPlugin({
        name: "protoc-gen-ts-protobuf-any",
        version: "v0.0.2",
        generateTs,
    })
);
