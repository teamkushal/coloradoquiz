import { TestBed } from '@angular/core/testing';

import { Experimental2565Service } from './experimental2565.service';

describe('Experimental2565Service', () => {
  let service: Experimental2565Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2565Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
