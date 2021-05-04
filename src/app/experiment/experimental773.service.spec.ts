import { TestBed } from '@angular/core/testing';

import { Experimental773Service } from './experimental773.service';

describe('Experimental773Service', () => {
  let service: Experimental773Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental773Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
