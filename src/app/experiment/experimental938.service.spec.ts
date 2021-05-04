import { TestBed } from '@angular/core/testing';

import { Experimental938Service } from './experimental938.service';

describe('Experimental938Service', () => {
  let service: Experimental938Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental938Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
