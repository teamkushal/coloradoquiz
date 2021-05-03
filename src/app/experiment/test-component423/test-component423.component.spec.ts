import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent423Component } from './test-component423.component';

describe('TestComponent423Component', () => {
  let component: TestComponent423Component;
  let fixture: ComponentFixture<TestComponent423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent423Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
