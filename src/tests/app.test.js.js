import { describe, it, expect } from "vitest";

describe("Testes básicos", () => {

  it("1. Soma simples", () => {
    expect(1 + 1).toBe(2);
  });

  it("2. String contém texto", () => {
    expect("docker".includes("dock")).toBe(true);
  });

  it("3. Array contém valor", () => {
    const lista = [1, 2, 3];
    expect(lista.includes(2)).toBe(true);
  });

  it("4. Boolean verdadeiro", () => {
    expect(true).toBe(true);
  });

  it("5. Comparação de número", () => {
    expect(10).toBeGreaterThan(5);
  });

});