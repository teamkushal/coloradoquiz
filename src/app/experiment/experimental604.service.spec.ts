import { TestBed } from '@angular/core/testing';

import { Experimental604Service } from './experimental604.service';

describe('Experimental604Service', () => {
  let service: Experimental604Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental604Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
