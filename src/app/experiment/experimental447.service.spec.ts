import { TestBed } from '@angular/core/testing';

import { Experimental447Service } from './experimental447.service';

describe('Experimental447Service', () => {
  let service: Experimental447Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental447Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
