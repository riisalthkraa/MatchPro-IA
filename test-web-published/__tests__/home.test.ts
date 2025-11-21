/**
 * @file home.test.ts
 * @description Tests Jest pour home.html - Page d'accueil des tests
 */

import * as fs from 'fs';
import * as path from 'path';

const homePath = path.join(__dirname, '..', 'home.html');

describe('home.html - Page d\'accueil', () => {
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(homePath, 'utf-8');
  });

  test('Le fichier home.html existe', () => {
    expect(fs.existsSync(homePath)).toBe(true);
  });

  test('Contient la structure HTML de base', () => {
    expect(content).toMatch(/<!DOCTYPE html>/i);
    expect(content).toMatch(/<html/);
    expect(content).toMatch(/<head>/);
    expect(content).toMatch(/<body>/);
  });

  test('Contient le titre MatchPro IA', () => {
    expect(content).toMatch(/MatchPro IA/i);
  });

  test('Contient les liens de navigation', () => {
    expect(content).toMatch(/index\.html/);
    expect(content).toMatch(/docs/);
  });

  test('Contient les styles CSS', () => {
    expect(content).toMatch(/<style>|<link.*stylesheet/);
  });
});
