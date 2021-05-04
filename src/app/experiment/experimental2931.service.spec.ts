import { TestBed } from '@angular/core/testing';

import { Experimental2931Service } from './experimental2931.service';

describe('Experimental2931Service', () => {
  let service: Experimental2931Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2931Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
