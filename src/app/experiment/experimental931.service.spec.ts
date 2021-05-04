import { TestBed } from '@angular/core/testing';

import { Experimental931Service } from './experimental931.service';

describe('Experimental931Service', () => {
  let service: Experimental931Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental931Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
