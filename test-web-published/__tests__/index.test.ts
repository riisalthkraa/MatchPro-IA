/**
 * @file index.test.ts
 * @description Tests Jest pour index.html - Rapport de tests
 */

import * as fs from 'fs';
import * as path from 'path';

const indexPath = path.join(__dirname, '..', 'index.html');

describe('index.html - Rapport de tests', () => {
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(indexPath, 'utf-8');
  });

  test('Le fichier index.html existe', () => {
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('Contient la structure HTML de base', () => {
    expect(content).toMatch(/<!DOCTYPE html>/i);
    expect(content).toMatch(/<html/);
  });

  test('Contient des résultats de tests', () => {
    expect(content).toMatch(/test|spec|suite/i);
  });

  test('Le fichier contient du contenu substantiel', () => {
    expect(content.length).toBeGreaterThan(1000);
  });

  test('Contient des styles ou scripts', () => {
    expect(content).toMatch(/<style>|<script>|<link/);
  });
});
