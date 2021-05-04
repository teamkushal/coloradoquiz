import { TestBed } from '@angular/core/testing';

import { Experimental1334Service } from './experimental1334.service';

describe('Experimental1334Service', () => {
  let service: Experimental1334Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1334Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
