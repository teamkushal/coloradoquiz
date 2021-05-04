import { TestBed } from '@angular/core/testing';

import { Experimental3773Service } from './experimental3773.service';

describe('Experimental3773Service', () => {
  let service: Experimental3773Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3773Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
