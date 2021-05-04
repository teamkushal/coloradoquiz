import { TestBed } from '@angular/core/testing';

import { Experimental77Service } from './experimental77.service';

describe('Experimental77Service', () => {
  let service: Experimental77Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental77Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
