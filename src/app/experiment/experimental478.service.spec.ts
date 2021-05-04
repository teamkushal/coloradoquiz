import { TestBed } from '@angular/core/testing';

import { Experimental478Service } from './experimental478.service';

describe('Experimental478Service', () => {
  let service: Experimental478Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental478Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
