import { TestBed } from '@angular/core/testing';

import { Experimental2929Service } from './experimental2929.service';

describe('Experimental2929Service', () => {
  let service: Experimental2929Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2929Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
