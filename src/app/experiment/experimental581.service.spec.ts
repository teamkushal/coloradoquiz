import { TestBed } from '@angular/core/testing';

import { Experimental581Service } from './experimental581.service';

describe('Experimental581Service', () => {
  let service: Experimental581Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental581Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
