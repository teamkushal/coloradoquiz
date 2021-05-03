import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent474Component } from './test-component474.component';

describe('TestComponent474Component', () => {
  let component: TestComponent474Component;
  let fixture: ComponentFixture<TestComponent474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent474Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
