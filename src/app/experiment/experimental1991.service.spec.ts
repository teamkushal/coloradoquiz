import { TestBed } from '@angular/core/testing';

import { Experimental1991Service } from './experimental1991.service';

describe('Experimental1991Service', () => {
  let service: Experimental1991Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1991Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
