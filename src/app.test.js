import { describe, it, expect } from "vitest";

describe("Testes básicos do projeto", () => {

  it("Deve somar corretamente", () => {
    expect(2 + 2).toBe(4);
  });

  it("Deve verificar texto", () => {
    expect("docker".toUpperCase()).toBe("DOCKER");
  });

  it("Deve validar array", () => {
    const lista = [10, 20, 30];
    expect(lista.length).toBe(3);
  });

  it("Deve validar booleano", () => {
    expect(5 > 2).toBe(true);
  });

  it("Deve comparar números", () => {
    expect(100).toBeGreaterThan(50);
  });

});