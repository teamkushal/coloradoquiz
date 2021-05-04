import { TestBed } from '@angular/core/testing';

import { Experimental1155Service } from './experimental1155.service';

describe('Experimental1155Service', () => {
  let service: Experimental1155Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1155Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
