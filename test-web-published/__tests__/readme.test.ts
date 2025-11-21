/**
 * @file readme.test.ts
 * @description Tests Jest pour README.md - Documentation
 */

import * as fs from 'fs';
import * as path from 'path';

const readmePath = path.join(__dirname, '..', 'README.md');

describe('README.md - Documentation', () => {
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(readmePath, 'utf-8');
  });

  test('Le fichier README.md existe', () => {
    expect(fs.existsSync(readmePath)).toBe(true);
  });

  test('Contient un titre principal', () => {
    expect(content).toMatch(/^#\s+.+/m);
  });

  test('Contient des informations sur les tests', () => {
    expect(content).toMatch(/test/i);
  });

  test('Contient des statistiques de tests', () => {
    expect(content).toMatch(/\d+\s*(tests?|passed|executed)/i);
  });

  test('Contient des sections structurées', () => {
    expect(content).toMatch(/##\s+.+/m);
  });

  test('Le fichier n\'est pas vide', () => {
    expect(content.length).toBeGreaterThan(100);
  });
});
