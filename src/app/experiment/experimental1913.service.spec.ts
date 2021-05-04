import { TestBed } from '@angular/core/testing';

import { Experimental1913Service } from './experimental1913.service';

describe('Experimental1913Service', () => {
  let service: Experimental1913Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1913Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
