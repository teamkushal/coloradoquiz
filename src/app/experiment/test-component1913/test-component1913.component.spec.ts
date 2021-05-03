import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1913Component } from './test-component1913.component';

describe('TestComponent1913Component', () => {
  let component: TestComponent1913Component;
  let fixture: ComponentFixture<TestComponent1913Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1913Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
