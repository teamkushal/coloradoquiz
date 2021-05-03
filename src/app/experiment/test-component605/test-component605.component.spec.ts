import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent605Component } from './test-component605.component';

describe('TestComponent605Component', () => {
  let component: TestComponent605Component;
  let fixture: ComponentFixture<TestComponent605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent605Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
