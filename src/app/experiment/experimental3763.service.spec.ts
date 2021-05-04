import { TestBed } from '@angular/core/testing';

import { Experimental3763Service } from './experimental3763.service';

describe('Experimental3763Service', () => {
  let service: Experimental3763Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3763Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
