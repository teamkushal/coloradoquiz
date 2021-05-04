import { TestBed } from '@angular/core/testing';

import { Experimental2517Service } from './experimental2517.service';

describe('Experimental2517Service', () => {
  let service: Experimental2517Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2517Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
