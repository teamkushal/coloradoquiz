import { TestBed } from '@angular/core/testing';

import { Experimental1728Service } from './experimental1728.service';

describe('Experimental1728Service', () => {
  let service: Experimental1728Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1728Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
