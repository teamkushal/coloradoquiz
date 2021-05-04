import { TestBed } from '@angular/core/testing';

import { Experimental949Service } from './experimental949.service';

describe('Experimental949Service', () => {
  let service: Experimental949Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental949Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
