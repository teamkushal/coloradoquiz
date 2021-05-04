import { TestBed } from '@angular/core/testing';

import { Experimental2297Service } from './experimental2297.service';

describe('Experimental2297Service', () => {
  let service: Experimental2297Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2297Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
