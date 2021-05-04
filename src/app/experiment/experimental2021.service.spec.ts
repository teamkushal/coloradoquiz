import { TestBed } from '@angular/core/testing';

import { Experimental2021Service } from './experimental2021.service';

describe('Experimental2021Service', () => {
  let service: Experimental2021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
