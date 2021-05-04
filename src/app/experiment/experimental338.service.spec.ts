import { TestBed } from '@angular/core/testing';

import { Experimental338Service } from './experimental338.service';

describe('Experimental338Service', () => {
  let service: Experimental338Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental338Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
