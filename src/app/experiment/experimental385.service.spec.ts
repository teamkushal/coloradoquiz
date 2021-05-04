import { TestBed } from '@angular/core/testing';

import { Experimental385Service } from './experimental385.service';

describe('Experimental385Service', () => {
  let service: Experimental385Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental385Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
