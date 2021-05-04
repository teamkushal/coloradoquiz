import { TestBed } from '@angular/core/testing';

import { Experimental772Service } from './experimental772.service';

describe('Experimental772Service', () => {
  let service: Experimental772Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental772Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
