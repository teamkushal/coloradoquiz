import { TestBed } from '@angular/core/testing';

import { Experimental3972Service } from './experimental3972.service';

describe('Experimental3972Service', () => {
  let service: Experimental3972Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3972Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
