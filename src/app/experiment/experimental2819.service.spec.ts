import { TestBed } from '@angular/core/testing';

import { Experimental2819Service } from './experimental2819.service';

describe('Experimental2819Service', () => {
  let service: Experimental2819Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2819Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
