import { TestBed } from '@angular/core/testing';

import { Experimental3447Service } from './experimental3447.service';

describe('Experimental3447Service', () => {
  let service: Experimental3447Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3447Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
