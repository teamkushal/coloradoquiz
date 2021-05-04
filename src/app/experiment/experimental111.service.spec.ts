import { TestBed } from '@angular/core/testing';

import { Experimental111Service } from './experimental111.service';

describe('Experimental111Service', () => {
  let service: Experimental111Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental111Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
