import { TestBed } from '@angular/core/testing';

import { Experimental779Service } from './experimental779.service';

describe('Experimental779Service', () => {
  let service: Experimental779Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental779Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
