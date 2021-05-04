import { TestBed } from '@angular/core/testing';

import { Experimental991Service } from './experimental991.service';

describe('Experimental991Service', () => {
  let service: Experimental991Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental991Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
