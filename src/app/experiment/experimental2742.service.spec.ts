import { TestBed } from '@angular/core/testing';

import { Experimental2742Service } from './experimental2742.service';

describe('Experimental2742Service', () => {
  let service: Experimental2742Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2742Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
