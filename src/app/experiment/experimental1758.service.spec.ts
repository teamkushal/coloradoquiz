import { TestBed } from '@angular/core/testing';

import { Experimental1758Service } from './experimental1758.service';

describe('Experimental1758Service', () => {
  let service: Experimental1758Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1758Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
