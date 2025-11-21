/**
 * @file docs.test.ts
 * @description Tests Jest pour le dossier docs/ - Documentation TypeDoc
 */

import * as fs from 'fs';
import * as path from 'path';

const docsPath = path.join(__dirname, '..', 'docs');

describe('docs/ - Documentation TypeDoc', () => {
  test('Le dossier docs existe', () => {
    expect(fs.existsSync(docsPath)).toBe(true);
  });

  test('Le dossier docs est un répertoire', () => {
    const stats = fs.statSync(docsPath);
    expect(stats.isDirectory()).toBe(true);
  });

  test('Contient un fichier index.html', () => {
    const indexPath = path.join(docsPath, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('Contient des fichiers de documentation', () => {
    const files = fs.readdirSync(docsPath);
    expect(files.length).toBeGreaterThan(0);
  });

  test('Les fichiers HTML sont valides', () => {
    const indexPath = path.join(docsPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8');
      expect(content).toMatch(/<!DOCTYPE html>|<html/i);
    }
  });
});
