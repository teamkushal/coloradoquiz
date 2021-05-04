import { TestBed } from '@angular/core/testing';

import { Experimental1175Service } from './experimental1175.service';

describe('Experimental1175Service', () => {
  let service: Experimental1175Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1175Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
