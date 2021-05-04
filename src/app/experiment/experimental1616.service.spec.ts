import { TestBed } from '@angular/core/testing';

import { Experimental1616Service } from './experimental1616.service';

describe('Experimental1616Service', () => {
  let service: Experimental1616Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1616Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
